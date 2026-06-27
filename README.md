# Разом ми сила — сайт благотворительного фонда

Это публичная статическая версия сайта благотворительного фонда «Разом ми сила».

В этот набор входят только файлы, которые можно публиковать как открытый сайт: главная страница, страница «Дошка пошани», стили, публичный JavaScript, публичные JSON-данные, изображения, документы, `robots.txt`, `sitemap.xml`, `_redirects` и настройки Vercel.

Админка, backend, локальный сервер и приватные данные в этот репозиторий не входят.

## Структура файлов

```text
.
├── index.html
├── honor.html
├── styles.css
├── script.js
├── robots.txt
├── sitemap.xml
├── _redirects
├── vercel.json
├── data/
│   ├── public-content.json
│   └── honor-board.json
└── assets/
    ├── documents/
    ├── optimized/
    ├── uploads/
    ├── donation-fuel-qr.jpeg
    ├── favicon.png
    ├── logo-razom.png
    ├── og-razom-my-syla.webp
    └── report-quarter.jpeg
```

## Как открыть сайт локально

Из папки `DEPLOY_PUBLIC` запустите простой статический сервер:

```bash
python -m http.server 8080
```

После этого откройте:

```text
http://localhost:8080
http://localhost:8080/honor.html
```

Если Python недоступен, можно использовать любой статический сервер, например `npx serve .`.

## Деплой на Vercel

1. Создайте отдельный GitHub-репозиторий.
2. Загрузите в него содержимое папки `DEPLOY_PUBLIC`.
3. В Vercel выберите `Add New Project`.
4. Подключите GitHub-репозиторий.
5. Framework Preset: `Other`.
6. Build Command: оставить пустым.
7. Output Directory: `.`.
8. Нажмите `Deploy`.

Также можно деплоить через Vercel CLI:

```bash
vercel --prod
```

## Как обновлять контент

- Основной публичный контент сайта хранится в `data/public-content.json`.
- Данные страницы «Дошка пошани» хранятся в `data/honor-board.json`.
- Чтобы добавить человека на доску почёта, добавьте новый объект в `data/honor-board.json` и оставьте `visible: true`.
- Если фото человека пока нет, поле `photo` можно оставить пустым: сайт покажет аккуратный блок с инициалами.

## Важно

Не добавляйте в этот репозиторий:

- `admin.html`
- `admin.js`
- `admin.css`
- `server.js`
- `serve-site.bat`
- `data/site-content.json`
- `.env` и любые файлы с секретами
- приватные документы
- приватные фото или видео
- локальные отчёты аудита и предзапусковые заметки

Публичный сайт должен читать только `data/public-content.json` и `data/honor-board.json`.
