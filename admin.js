const categoryLabels = {
  team: "Команда",
  volunteer: "Волонтери",
  partner: "Партнери",
  donor: "Донори",
  logistics: "Логістика",
  medical: "Медицина",
  community: "Громади",
  international: "Міжнародні партнери"
};

const state = {
  items: [],
  editingId: "",
  dirty: false
};

const els = {
  appStatus: document.getElementById("appStatus"),
  appView: document.getElementById("appView"),
  checkGithubButton: document.getElementById("checkGithubButton"),
  countText: document.getElementById("countText"),
  form: document.getElementById("personForm"),
  list: document.getElementById("peopleList"),
  loginForm: document.getElementById("loginForm"),
  loginStatus: document.getElementById("loginStatus"),
  loginView: document.getElementById("loginView"),
  logoutButton: document.getElementById("logoutButton"),
  newButton: document.getElementById("newButton"),
  reloadButton: document.getElementById("reloadButton"),
  saveButton: document.getElementById("saveButton"),
  searchInput: document.getElementById("searchInput")
};

const fields = {
  id: document.getElementById("personId"),
  name: document.getElementById("personName"),
  role: document.getElementById("personRole"),
  category: document.getElementById("personCategory"),
  city: document.getElementById("personCity"),
  contribution: document.getElementById("personContribution"),
  description: document.getElementById("personDescription"),
  photo: document.getElementById("personPhoto"),
  visible: document.getElementById("personVisible"),
  featured: document.getElementById("personFeatured")
};

function status(element, message, tone = "") {
  element.textContent = message;
  if (tone) {
    element.dataset.tone = tone;
  } else {
    element.removeAttribute("data-tone");
  }
}

function normalize(value) {
  return String(value || "").trim();
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function nextId() {
  const max = state.items.reduce((highest, item) => {
    const match = String(item.id || "").match(/^person-(\d+)$/);
    return match ? Math.max(highest, Number(match[1])) : highest;
  }, 0);
  return `person-${String(max + 1).padStart(3, "0")}`;
}

async function requestJson(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    }
  });

  let payload = {};
  try {
    payload = await response.json();
  } catch {
    payload = {};
  }

  if (!response.ok) {
    throw new Error(payload.error || payload.message || "Request failed");
  }

  return payload;
}

function showApp(isAuthenticated) {
  els.loginView.classList.toggle("hidden", isAuthenticated);
  els.appView.classList.toggle("hidden", !isAuthenticated);
  els.logoutButton.classList.toggle("hidden", !isAuthenticated);
}

function resetForm() {
  state.editingId = "";
  els.form.reset();
  fields.id.value = nextId();
  fields.category.value = "volunteer";
  fields.visible.checked = true;
  fields.featured.checked = false;
  document.getElementById("formTitle").textContent = "Додати запис";
}

function personFromForm() {
  return {
    id: normalize(fields.id.value),
    name: normalize(fields.name.value),
    role: normalize(fields.role.value),
    category: normalize(fields.category.value),
    city: normalize(fields.city.value),
    contribution: normalize(fields.contribution.value),
    description: normalize(fields.description.value),
    photo: normalize(fields.photo.value),
    visible: fields.visible.checked,
    featured: fields.featured.checked
  };
}

function fillForm(person) {
  state.editingId = person.id;
  fields.id.value = person.id || "";
  fields.name.value = person.name || "";
  fields.role.value = person.role || "";
  fields.category.value = person.category || "volunteer";
  fields.city.value = person.city || "";
  fields.contribution.value = person.contribution || "";
  fields.description.value = person.description || "";
  fields.photo.value = person.photo || "";
  fields.visible.checked = Boolean(person.visible);
  fields.featured.checked = Boolean(person.featured);
  document.getElementById("formTitle").textContent = "Редагувати запис";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function markDirty() {
  state.dirty = true;
  status(els.appStatus, "Є незбережені зміни. Натисніть «Зберегти в GitHub».", "");
}

function renderCategories() {
  fields.category.innerHTML = Object.entries(categoryLabels)
    .map(([value, label]) => `<option value="${value}">${escapeHtml(label)}</option>`)
    .join("");
}

function filteredItems() {
  const query = normalize(els.searchInput.value).toLowerCase();
  if (!query) return state.items;

  return state.items.filter((item) => [
    item.name,
    item.role,
    item.city,
    item.contribution,
    item.description,
    item.category
  ].join(" ").toLowerCase().includes(query));
}

function renderList() {
  const items = filteredItems();
  els.countText.textContent = `${state.items.length} записів`;

  if (!items.length) {
    els.list.innerHTML = '<p class="admin-muted">Нічого не знайдено.</p>';
    return;
  }

  els.list.innerHTML = items.map((item) => `
    <article class="admin-card" data-id="${escapeHtml(item.id)}">
      <div class="admin-card-head">
        <div>
          <h3 class="admin-card-title">${escapeHtml(item.name)}</h3>
          <p class="admin-card-meta">${escapeHtml(item.role || "Роль не вказана")}${item.city ? ` · ${escapeHtml(item.city)}` : ""}</p>
        </div>
        <div class="admin-badges">
          <span class="admin-badge">${escapeHtml(categoryLabels[item.category] || item.category)}</span>
          <span class="admin-badge${item.visible ? "" : " is-off"}">${item.visible ? "visible" : "hidden"}</span>
          <span class="admin-badge${item.featured ? "" : " is-off"}">${item.featured ? "featured" : "not featured"}</span>
        </div>
      </div>
      <p class="admin-muted">${escapeHtml(item.contribution || "Внесок поки не описаний.")}</p>
      <div class="admin-card-actions">
        <button type="button" data-action="edit" data-id="${escapeHtml(item.id)}">Редагувати</button>
        <button type="button" data-action="toggle-visible" data-id="${escapeHtml(item.id)}">${item.visible ? "Сховати" : "Показати"}</button>
        <button type="button" data-action="toggle-featured" data-id="${escapeHtml(item.id)}">${item.featured ? "Зняти з головної" : "На головну"}</button>
        <button class="danger" type="button" data-action="remove" data-id="${escapeHtml(item.id)}">Видалити</button>
      </div>
    </article>
  `).join("");
}

async function loadBoard() {
  status(els.appStatus, "Завантажую дошку пошани...");
  const payload = await requestJson("/api/honor");
  state.items = Array.isArray(payload.items) ? payload.items : [];
  state.dirty = false;
  resetForm();
  renderList();
  status(els.appStatus, "Дані завантажені.", "success");
}

async function saveBoard() {
  status(els.appStatus, "Зберігаю зміни в GitHub...");
  els.saveButton.disabled = true;

  try {
    const payload = await requestJson("/api/honor", {
      method: "POST",
      body: JSON.stringify({ items: state.items })
    });
    state.items = Array.isArray(payload.items) ? payload.items : state.items;
    state.dirty = false;
    renderList();
    status(els.appStatus, "Сохранено в GitHub. Обновление сайта может занять 1–3 минуты.", "success");
  } catch (error) {
    status(els.appStatus, error.message || "Не удалось сохранить изменения.", "error");
  } finally {
    els.saveButton.disabled = false;
  }
}

async function checkGithubConnection() {
  status(els.appStatus, "Перевіряю з'єднання з GitHub...");
  els.checkGithubButton.disabled = true;

  try {
    const payload = await requestJson("/api/admin-debug");
    const ready = payload.githubTokenConfigured
      && payload.githubOwnerConfigured
      && payload.githubRepoConfigured
      && payload.canReadHonorFile
      && payload.honorFileShaPresent;

    if (ready) {
      status(els.appStatus, "GitHub готовий: токен налаштований, файл знайдений, sha отриманий, можна зберігати.", "success");
    } else {
      const missing = [];
      if (!payload.githubTokenConfigured) missing.push("GITHUB_TOKEN");
      if (!payload.githubOwnerConfigured) missing.push("GITHUB_OWNER");
      if (!payload.githubRepoConfigured) missing.push("GITHUB_REPO");
      if (!payload.canReadHonorFile) missing.push("data/honor-board.json");
      if (!payload.honorFileShaPresent) missing.push("file sha");
      status(els.appStatus, `GitHub не готовий: ${missing.join(", ")}.`, "error");
    }
  } catch (error) {
    status(els.appStatus, error.message || "Не вдалося перевірити GitHub.", "error");
  } finally {
    els.checkGithubButton.disabled = false;
  }
}

function upsertPerson(event) {
  event.preventDefault();
  const person = personFromForm();

  if (!person.id || !person.name || !person.category) {
    status(els.appStatus, "ID, ім'я та категорія обов'язкові.", "error");
    return;
  }

  if (!/^[a-zA-Z0-9_-]+$/.test(person.id)) {
    status(els.appStatus, "ID може містити тільки латинські літери, цифри, дефіс і підкреслення.", "error");
    return;
  }

  const existingIndex = state.items.findIndex((item) => item.id === state.editingId);
  const duplicate = state.items.some((item, index) => item.id === person.id && index !== existingIndex);
  if (duplicate) {
    status(els.appStatus, "Запис з таким ID вже існує.", "error");
    return;
  }

  if (existingIndex >= 0) {
    state.items = state.items.map((item, index) => index === existingIndex ? person : item);
  } else {
    state.items = [...state.items, person];
  }

  markDirty();
  resetForm();
  renderList();
}

function handleListClick(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const id = button.dataset.id;
  const index = state.items.findIndex((item) => item.id === id);
  if (index === -1) return;

  const action = button.dataset.action;
  if (action === "edit") {
    fillForm(state.items[index]);
    return;
  }

  if (action === "toggle-visible") {
    state.items = state.items.map((item, itemIndex) => itemIndex === index ? {
      ...item,
      visible: !item.visible
    } : item);
  }

  if (action === "toggle-featured") {
    state.items = state.items.map((item, itemIndex) => itemIndex === index ? {
      ...item,
      featured: !item.featured
    } : item);
  }

  if (action === "remove") {
    const confirmed = window.confirm("Видалити цей запис з дошки пошани?");
    if (!confirmed) return;
    state.items = state.items.filter((item) => item.id !== id);
  }

  markDirty();
  renderList();
}

async function login(event) {
  event.preventDefault();
  status(els.loginStatus, "Перевіряю пароль...");

  try {
    await requestJson("/api/login", {
      method: "POST",
      body: JSON.stringify({ password: document.getElementById("passwordInput").value })
    });
    document.getElementById("passwordInput").value = "";
    showApp(true);
    await loadBoard();
  } catch {
    status(els.loginStatus, "Не вдалося увійти. Перевірте пароль.", "error");
  }
}

async function logout() {
  await requestJson("/api/logout", { method: "POST" }).catch(() => null);
  state.items = [];
  showApp(false);
  status(els.loginStatus, "Сесію завершено.", "success");
}

async function checkSession() {
  try {
    await requestJson("/api/session");
    showApp(true);
    await loadBoard();
  } catch {
    showApp(false);
  }
}

renderCategories();
els.loginForm.addEventListener("submit", login);
els.logoutButton.addEventListener("click", logout);
els.reloadButton.addEventListener("click", loadBoard);
els.saveButton.addEventListener("click", saveBoard);
els.checkGithubButton.addEventListener("click", checkGithubConnection);
els.newButton.addEventListener("click", resetForm);
els.form.addEventListener("submit", upsertPerson);
els.list.addEventListener("click", handleListClick);
els.searchInput.addEventListener("input", renderList);
checkSession();
