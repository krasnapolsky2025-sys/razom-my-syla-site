const ALLOWED_CATEGORIES = new Set([
  "team",
  "volunteer",
  "partner",
  "donor",
  "logistics",
  "medical",
  "community",
  "international"
]);

function text(value, maxLength) {
  return String(value || "").trim().slice(0, maxLength);
}

function safePhoto(value) {
  const photo = text(value, 500);
  if (!photo) return "";
  if (photo.startsWith("javascript:")) return "";
  if (photo.startsWith("data:")) return "";
  return photo;
}

function sanitizePerson(person) {
  const sanitized = {
    id: text(person.id, 80),
    name: text(person.name, 160),
    role: text(person.role, 120),
    category: text(person.category, 40),
    city: text(person.city, 120),
    contribution: text(person.contribution, 260),
    description: text(person.description, 700),
    photo: safePhoto(person.photo),
    visible: Boolean(person.visible),
    featured: Boolean(person.featured)
  };

  if (!sanitized.id || !sanitized.name || !sanitized.category) {
    throw new Error("Invalid honor-board record");
  }

  if (!/^[a-zA-Z0-9_-]+$/.test(sanitized.id)) {
    throw new Error("Invalid honor-board id");
  }

  if (!ALLOWED_CATEGORIES.has(sanitized.category)) {
    throw new Error("Invalid honor-board category");
  }

  return sanitized;
}

function validateBoard(input) {
  if (!Array.isArray(input)) {
    throw new Error("Honor board must be an array");
  }

  if (input.length > 500) {
    throw new Error("Honor board is too large");
  }

  const ids = new Set();
  return input.map((person) => {
    const sanitized = sanitizePerson(person || {});
    if (ids.has(sanitized.id)) {
      throw new Error("Duplicate honor-board id");
    }
    ids.add(sanitized.id);
    return sanitized;
  });
}

function prettyJson(data) {
  return `${JSON.stringify(data, null, 2)}\n`;
}

module.exports = {
  ALLOWED_CATEGORIES: Array.from(ALLOWED_CATEGORIES),
  prettyJson,
  validateBoard
};
