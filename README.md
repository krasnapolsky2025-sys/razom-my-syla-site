# Разом ми сила — сайт благотворительного фонда

Это публичная версия сайта фонда «Разом ми сила» для Vercel.

В репозитории есть:

- публичный статический сайт;
- страница «Дошка пошани»;
- безопасная Vercel-админка только для `data/honor-board.json`;
- Vercel Functions в папке `api/`.

Старая локальная админка и старый `server.js` не используются и не должны публиковаться.

## Структура

```text
.
├── index.html
├── honor.html
├── honor/index.html
├── admin.html
├── admin.css
├── admin.js
├── styles.css
├── script.js
├── vercel.json
├── robots.txt
├── sitemap.xml
├── data/
│   ├── public-content.json
│   └── honor-board.json
├── api/
│   ├── login.js
│   ├── logout.js
│   ├── session.js
│   ├── honor.js
│   └── _lib/
└── assets/
```

## Как открыть локально

Для публичной части:

```bash
python -m http.server 8080
```

Публичные страницы:

```text
http://localhost:8080/
http://localhost:8080/honor.html
```

Для проверки API и `/admin` нужен Vercel CLI:

```bash
vercel dev
```

## Деплой на Vercel

1. Подключите GitHub-репозиторий `krasnapolsky2025-sys/razom-my-syla-site` к Vercel.
2. Framework Preset: `Other`.
3. Build Command: оставить пустым.
4. Output Directory: оставить пустым или указать `.`.
5. Добавить переменные окружения из раздела ниже.
6. Нажать Deploy.

## Required Vercel Environment Variables

Обязательно добавить в Vercel:

```text
ADMIN_PASSWORD
SESSION_SECRET
GITHUB_TOKEN
GITHUB_OWNER
GITHUB_REPO
GITHUB_BRANCH
```

Рекомендуемые значения:

```text
GITHUB_OWNER=krasnapolsky2025-sys
GITHUB_REPO=razom-my-syla-site
GITHUB_BRANCH=main
```

`ADMIN_PASSWORD` — пароль для входа в `/admin`.

`SESSION_SECRET` — длинная случайная строка для подписи cookie. Можно сгенерировать любым генератором паролей.

`GITHUB_TOKEN` — токен GitHub, который имеет доступ только к этому репозиторию и может читать/записывать contents.

## Как получить GitHub token

Лучше использовать fine-grained token:

1. GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens.
2. Generate new token.
3. Repository access: выбрать только `krasnapolsky2025-sys/razom-my-syla-site`.
4. Permissions:
   - Contents: `Read and write`
   - Metadata: `Read`
5. Скопировать токен и добавить его в Vercel как `GITHUB_TOKEN`.

Не добавляйте GitHub token в файлы проекта.

## Админка

Админка доступна по адресу:

```text
/admin
```

В ней можно:

- войти по паролю;
- посмотреть список людей из `data/honor-board.json`;
- добавить человека;
- редактировать человека;
- включить/выключить `visible`;
- включить/выключить `featured`;
- выбрать категорию;
- сохранить изменения в GitHub.

После сохранения API делает commit в GitHub с сообщением:

```text
Update honor board from admin
```

Vercel после этого должен автоматически обновить сайт из GitHub.

## Формат записи honor-board

```json
{
  "id": "person-001",
  "name": "Ім’я Прізвище",
  "role": "Волонтер",
  "category": "volunteer",
  "city": "Дніпро",
  "contribution": "Коротко про внесок",
  "description": "Текст подяки",
  "photo": "",
  "visible": true,
  "featured": false
}
```

Разрешённые категории:

```text
team
volunteer
partner
donor
logistics
medical
community
international
```

## Безопасность

- Пароль не хранится в коде.
- GitHub token не хранится в коде.
- Сессия хранится в HttpOnly cookie.
- Cookie использует `SameSite=Strict` и `Secure` на production/HTTPS.
- `/admin` имеет `noindex,nofollow`.
- На публичном сайте нет ссылки на админку.
- Старый `server.js` не используется.

## Не добавлять в репозиторий

- `.env`
- `.env.*`
- `server.js`
- `serve-site.bat`
- `data/site-content.json`
- приватные документы
- приватные фото или видео
- любые токены и пароли
