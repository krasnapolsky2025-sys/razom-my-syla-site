const body = document.body;
const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const year = document.querySelector("#year");
const langButtons = document.querySelectorAll("[data-lang-switch]");
const translatableNodes = document.querySelectorAll("[data-i18n]");
const revealTargets = document.querySelectorAll(
  [
    ".section-heading",
    ".about-copy",
    ".director-panel",
    ".process-grid article",
    ".photo-story",
    ".impact-cases figure",
    ".field-notes article",
    ".report-copy",
    ".report-board div",
    ".report-panel",
    ".report-proof-card",
    ".report-note",
    ".donate-copy",
    ".donate-method",
    ".donate-qr",
    ".direction-card",
    ".credibility-item",
    ".partner-card",
    ".international-panel",
    ".international-grid article",
    ".honor-page-hero-inner",
    ".honor-stat-grid article",
    ".honor-toolbar",
    ".honor-person-card",
    ".honor-card",
    ".honor-note",
    ".official-document-panel",
    ".document-card",
    ".transparency-inner > div:first-child",
    ".transparency-list div",
    ".faq-grid article",
    ".contact-card",
  ].join(", ")
);

const translations = {
  uk: {
    "brand.name": "Разом ми сила",
    "brand.type": "Благодійний фонд",
    "nav.about": "Про фонд",
    "nav.process": "Як працюємо",
    "nav.activity": "Діяльність",
    "nav.updates": "Оновлення",
    "nav.report": "Звітність",
    "nav.donate": "Підтримати",
    "nav.directions": "Напрями",
    "nav.honor": "Дошка пошани",
    "nav.documents": "Документи",
    "nav.contacts": "Контакти",
    "hero.eyebrow": "Офіційний благодійний фонд • Україна",
    "hero.title": "Підтримуємо людей, громади та захисників України",
    "hero.copy":
      "Благодійний фонд «Разом ми сила» організовує гуманітарну допомогу, логістику, підтримку родин, дітей, громад і військових підрозділів. Пожертви перетворюємо на конкретні передачі та відкриті звіти.",
    "hero.primary": "Підтримати фонд",
    "hero.secondary": "Переглянути звіти",
    "hero.proof.donors": "Країн-донорів",
    "hero.proof.cities": "Міст допомоги",
    "stats.volunteers.label": "Волонтери",
    "stats.volunteers.text": "людей залучені до роботи фонду.",
    "stats.logistics.label": "Логістика",
    "stats.logistics.text": "вантажу отримано та опрацьовано.",
    "stats.help.label": "Допомога",
    "stats.help.text": "ВПО отримали підтримку через проєкти фонду.",
    "unit.tons": "тонн",
    "about.label": "Про фонд",
    "about.title": "Офіційний, спокійний і відповідальний голос благодійності.",
    "about.p1":
      "«Разом ми сила» працює як простір довіри між тими, хто готовий підтримати, і тими, кому потрібна допомога. Фонд фокусується на конкретних потребах, партнерській взаємодії та зрозумілій комунікації.",
    "about.p2":
      "На сайті зібрані головні факти: напрями діяльності, фото роботи, квартальні показники, офіційні реквізити та швидкий зв'язок з фондом.",
    "director.label": "Керівництво",
    "director.title": "Директор фонду",
    "director.text": "Координація партнерств, офіційних звернень і стратегічного розвитку фонду.",
    "process.label": "Як працюємо",
    "process.title": "Від запиту до звіту: зрозуміла система допомоги.",
    "process.text":
      "Фонд працює як координаційний центр: приймає потребу, підтверджує ресурс, організовує логістику і показує результат партнерам.",
    "process.step1.title": "Запит і перевірка",
    "process.step1.text": "Фіксуємо потребу, пріоритет, адресу, відповідальних і формат допомоги.",
    "process.step2.title": "Партнерський ресурс",
    "process.step2.text": "Погоджуємо донорів, вантажі, закупівлі або збір коштів під конкретну задачу.",
    "process.step3.title": "Логістика і передача",
    "process.step3.text": "Організовуємо транспорт, сортування, видачу та комунікацію на місці.",
    "process.step4.title": "Публічний результат",
    "process.step4.text": "Збираємо фото, цифри, підтвердження і переносимо їх у зрозумілу звітність.",
    "activity.label": "Діяльність",
    "activity.title": "Робота фонду в кадрі: не обіцянки, а процес і результат.",
    "activity.text":
      "Фото з виїздів, подій і логістики показують масштаб роботи: партнери бачать людей, вантажі та організацію допомоги.",
    "managed.label": "Оновлення",
    "managed.title": "Нові записи, фото та короткі звіти з адмін-панелі.",
    "managed.text": "Цей блок можна поповнювати самостійно: додавати події, фото з роботи фонду, посилання та короткі пояснення.",
    "managed.gallery.more": "Показати більше фото",
    "managed.gallery.less": "Сховати зайве",
    "photo.main.label": "Публічна робота",
    "photo.main.title": "Видача подарункових наборів і комунікація з людьми",
    "photo.logistics": "Гуманітарна логістика",
    "photo.cargo": "Підготовка та сортування вантажу",
    "photo.community": "Благодійні заходи у громадах",
    "case.bread.label": "Щоденна підтримка",
    "case.bread.title": "Хліб, продукти та базові речі для людей",
    "case.food.label": "Партнерська доставка",
    "case.food.title": "Передача продуктової допомоги громадам",
    "case.shelter.label": "Шелтери",
    "case.shelter.title": "Місця тимчасового проживання та підтримки",
    "field.defenders.label": "Підтримка захисників",
    "field.defenders.title": "Допомога тим, хто тримає країну.",
    "field.defenders.text":
      "Партнерські зустрічі, передача ресурсів і координація запитів для підрозділів та військових госпіталів.",
    "field.mobility.label": "Адресна допомога",
    "field.mobility.title": "Мобільність, гідність і конкретний результат.",
    "field.mobility.text":
      "Інвалідні візки, ходунці та інші засоби підтримки передаються людям, яким вони потрібні тут і зараз.",
    "report.label": "Звітність за квартал",
    "report.title": "Підсумки кварталу в цифрах, які легко перевірити і показати.",
    "report.text":
      "Інформацію з квартальної інфографіки перенесено в живий блок сайту: без дрібного тексту на картинці, з чіткими категоріями і акцентом на результат.",
    "report.top.volunteers": "волонтерів залучені до роботи фонду",
    "report.top.trucks": "вантажних автомобілів отримано",
    "report.top.cargo": "гуманітарного вантажу опрацьовано",
    "report.top.idp": "ВПО отримали допомогу через проєкти фонду",
    "report.received": "Отримано",
    "report.received.trucks": "вантажних автомобілів, з яких 2 військового призначення",
    "report.received.cargo": "гуманітарного вантажу",
    "report.received.events": "благодійних заходів",
    "report.received.shelter": "шелтер на утриманні фонду",
    "report.distributed": "Роздано",
    "report.distributed.strollers": "дитячих візочків",
    "report.distributed.wheelchairs": "інвалідних колясок",
    "report.distributed.walkers": "ходунців для дорослих",
    "report.distributed.gifts": "подарункових наборів для дітей до Дня захисту дітей",
    "report.helped": "Надали допомогу",
    "report.helped.shelters": "шелтерам",
    "report.helped.cities": "містам",
    "report.helped.idp": "внутрішньо переміщеним особам",
    "report.defense": "Допомога воїнам",
    "report.defense.zsu": "бригади ЗСУ",
    "report.defense.tro": "бригад ТРО",
    "report.defense.hospitals": "військових госпіталів",
    "report.defense.donors": "країн-донорів долучилися до допомоги",
    "report.note.title": "Звітність за квартал",
    "report.note.text":
      "Дані перенесено з оригінальної інфографіки фонду і оформлено як окремий репутаційний блок сайту.",
    "donate.label": "Підтримати фонд",
    "donate.title": "Банка на паливо для гуманітарних виїздів.",
    "donate.text":
      "Паливо - це швидкість доставки допомоги: вантажі, виїзди до громад, передача продуктів, засобів мобільності та підтримка військових напрямів.",
    "donate.goal.label": "Ціль збору",
    "donate.goal.value": "100 000 грн",
    "donate.impact.one.label": "500 грн",
    "donate.impact.one.text": "допомагають закрити частину пального для міського виїзду",
    "donate.impact.two.label": "1 000 грн",
    "donate.impact.two.text": "підсилюють доставку продуктів, речей або засобів мобільності",
    "donate.impact.three.label": "5 000 грн",
    "donate.impact.three.text": "наближають великий гуманітарний рейс між громадами",
    "donate.open": "Відкрити Банку",
    "donate.copyCard": "Скопіювати карту",
    "donate.copyLink": "Скопіювати посилання",
    "donate.card.label": "Номер картки Банки",
    "donate.qr": "Скануйте QR або відкрийте посилання на Банку.",
    "directions.label": "Напрями роботи",
    "directions.title": "Сфери, у яких фонд діє системно і зрозуміло для партнерів.",
    "direction.humanitarian.label": "Гуманітарна допомога",
    "direction.humanitarian.title": "Підтримка людей і родин",
    "direction.humanitarian.text":
      "Адресні збори, базові потреби, допомога в кризових обставинах і координація запитів.",
    "direction.communities.label": "Громади",
    "direction.communities.title": "Локальні ініціативи",
    "direction.communities.text":
      "Проєкти для громад, партнерські програми і підтримка важливих соціальних сервісів.",
    "direction.partners.label": "Партнерство",
    "direction.partners.title": "Бізнес і меценати",
    "direction.partners.text":
      "Офіційна комунікація, спільні кампанії, корпоративна благодійність і прозорі домовленості.",
    "direction.reports.label": "Звітування",
    "direction.reports.title": "Довіра через факти",
    "direction.reports.text": "Публічні підсумки, підтвердження витрат і зрозуміла історія кожного важливого проєкту.",
    "honor.label": "Дошка пошани",
    "honor.title": "Подяка людям і партнерам, завдяки яким допомога доходить адресно.",
    "honor.text":
      "Публічна вдячність прив'язана до реальних напрямів роботи: волонтери, партнери, логістика, медичні заклади, госпіталі та міжнародні донори.",
    "honor.partners.label": "Партнери-донори",
    "honor.partners.title": "Партнери, що дають ресурс",
    "honor.partners.text": "Nova Ukraine, міжнародні благодійники та локальні партнери допомагають закривати потреби у вантажах, продуктах, пальному й обладнанні.",
    "honor.volunteers.label": "Волонтери",
    "honor.volunteers.title": "80 людей у роботі фонду",
    "honor.volunteers.text": "Команда, яка організовує видачі, комунікацію, сортування та підтримку людей на місцях.",
    "honor.defenders.label": "Захисники і медики",
    "honor.defenders.title": "Повага до служби",
    "honor.defenders.text": "Окремий напрям вдячності тим, хто тримає країну, та тим, хто допомагає рятувати життя.",
    "honor.logistics.label": "Логістичні команди",
    "honor.logistics.title": "500+ тонн допомоги",
    "honor.logistics.text": "Люди за кермом, на складах і в координації, завдяки яким вантажі рухаються швидко.",
    "honor.note.title": "Подяки, які можна розширювати",
    "honor.note.text":
      "Короткий блок на головній показує обрані записи. Повна дошка пошани винесена на окрему сторінку, щоб її було легко поповнювати.",
    "requisites.label": "Прозорість",
    "requisites.title": "Офіційні реквізити фонду для партнерів і благодійників.",
    "requisites.recipient": "Одержувач",
    "requisites.bank": "Банк",
    "requisites.account": "Рахунок",
    "requisites.purpose": "Призначення",
    "requisites.purposeText": "Благодійна допомога або підтримка збору на паливо",
    "documents.label": "Документи",
    "documents.title": "Файли, які допомагають партнерам швидко перевірити фонд.",
    "documents.text": "Зібрали реєстраційні матеріали, банківські реквізити та звітну інфографіку в одному місці.",
    "documents.verify.label": "Офіційна перевірка",
    "documents.verify.title": "Ключові дані фонду в одному блоці.",
    "documents.verify.text": "Тут зібрані реквізити, реєстраційний код і файли, які зазвичай потрібні партнерам перед переказом або співпрацею.",
    "documents.verify.registry": "ЄДРПОУ",
    "documents.verify.iban": "IBAN UAH",
    "documents.verify.bank": "Банк",
    "documents.verify.email": "Пошта фонду",
    "documents.verify.openRegistration": "Реєстрація",
    "documents.verify.openBank": "Реквізити",
    "documents.verify.toReport": "Звітність",
    "documents.registration.label": "PDF",
    "documents.registration.title": "Реєстраційні документи",
    "documents.registration.text": "Файл для первинної перевірки офіційного статусу організації.",
    "documents.bank.label": "PDF",
    "documents.bank.title": "Банківські реквізити",
    "documents.bank.text": "Офіційний файл з даними для переказів і партнерських оплат.",
    "documents.report.label": "JPG",
    "documents.report.title": "Квартальна інфографіка",
    "documents.report.text": "Оригінальний візуальний звіт, з якого перенесені показники на сайт.",
    "faq.label": "Коротко",
    "faq.title": "Три відповіді, які потрібні людині перед донатом.",
    "faq.official.q": "Фонд офіційний?",
    "faq.official.a": "Так. На сайті вказані офіційні реквізити, код ЄДРПОУ, банк та IBAN для переказів.",
    "faq.where.q": "Куди йде допомога?",
    "faq.where.a":
      "На гуманітарні вантажі, благодійні заходи, підтримку ВПО, шелтери, засоби мобільності та допомогу військовим напрямам.",
    "faq.result.q": "Як побачити результат?",
    "faq.result.a":
      "У розділі звітності є квартальні цифри та фото реальної роботи фонду з виїздів, передачі допомоги і партнерських подій.",
    "contacts.label": "Контакти",
    "contacts.title": "Для партнерів, благодійників і офіційних звернень.",
    "contacts.direct": "Прямий контакт",
    "contacts.connection": "Зв'язок з фондом",
    "contacts.country": "Україна",
    "contacts.official": "Офіційно",
    "contacts.requisites": "Запит реквізитів",
    "contacts.text":
      "Надішліть повідомлення із темою співпраці, сумою або форматом допомоги. Команда фонду підготує відповідь і необхідні документи.",
    "contacts.request": "Запросити реквізити",
    "contacts.quick": "Швидкий зв'язок:",
    "contacts.copyEmail": "Email",
    "contacts.copyTelegram": "Telegram",
    "contacts.copyPhone": "Телефон",
    "contacts.copyViber": "Viber",
    "footer.copy": "© <span id=\"year\"></span> Благодійний фонд «Разом ми сила».",
    "footer.top": "На початок",
    "action.copy": "Копіювати",
    "action.copied": "Скопійовано",
  },
  en: {
    "brand.name": "Razom My Syla",
    "brand.type": "Charitable Foundation",
    "nav.about": "About",
    "nav.process": "How We Work",
    "nav.activity": "Activity",
    "nav.updates": "Updates",
    "nav.report": "Reports",
    "nav.donate": "Donate",
    "nav.directions": "Focus Areas",
    "nav.honor": "Honor Board",
    "nav.documents": "Documents",
    "nav.contacts": "Contacts",
    "hero.eyebrow": "Official charity foundation • Ukraine",
    "hero.title": "Supporting people, communities and defenders of Ukraine",
    "hero.copy":
      "Razom My Syla is a charity foundation organizing humanitarian aid, logistics, support for families, children, communities and military units. Donations become concrete deliveries and open reports.",
    "hero.primary": "Support the foundation",
    "hero.secondary": "View reports",
    "hero.proof.donors": "Donor countries",
    "hero.proof.cities": "Cities helped",
    "stats.volunteers.label": "Volunteers",
    "stats.volunteers.text": "people involved in the foundation's work.",
    "stats.logistics.label": "Logistics",
    "stats.logistics.text": "of aid cargo received and processed.",
    "stats.help.label": "Assistance",
    "stats.help.text": "internally displaced people supported through foundation projects.",
    "unit.tons": "tons",
    "about.label": "About",
    "about.title": "An official, calm and accountable voice of charity.",
    "about.p1":
      "Razom My Syla works as a space of trust between those ready to help and those who need support. The foundation focuses on specific needs, partnership and clear communication.",
    "about.p2":
      "This site brings together the essentials: focus areas, field photos, quarterly indicators, official banking details and direct contact.",
    "director.label": "Leadership",
    "director.title": "Foundation Director",
    "director.text": "Coordination of partnerships, official requests and strategic development of the foundation.",
    "process.label": "How we work",
    "process.title": "From request to report: a clear aid system.",
    "process.text":
      "The foundation works as a coordination center: it receives a need, confirms resources, organizes logistics and shows partners the result.",
    "process.step1.title": "Request and verification",
    "process.step1.text": "We record the need, priority, address, responsible people and aid format.",
    "process.step2.title": "Partner resource",
    "process.step2.text": "We coordinate donors, cargo, purchases or fundraising for a specific task.",
    "process.step3.title": "Logistics and delivery",
    "process.step3.text": "We organize transport, sorting, distribution and on-site communication.",
    "process.step4.title": "Public result",
    "process.step4.text": "We collect photos, numbers and confirmations, then turn them into clear reporting.",
    "activity.label": "Activity",
    "activity.title": "The foundation at work: not promises, but process and results.",
    "activity.text":
      "Photos from field work, events and logistics show the scale of activity: partners see people, cargo and organized assistance.",
    "managed.label": "Updates",
    "managed.title": "New posts, photos and short reports from the admin panel.",
    "managed.text": "This block can be updated independently with events, foundation work photos, links and short explanations.",
    "managed.gallery.more": "Show more photos",
    "managed.gallery.less": "Show less",
    "photo.main.label": "Public work",
    "photo.main.title": "Distribution of gift sets and direct communication with people",
    "photo.logistics": "Humanitarian logistics",
    "photo.cargo": "Cargo preparation and sorting",
    "photo.community": "Charity events in communities",
    "case.bread.label": "Daily support",
    "case.bread.title": "Bread, food and essential items for people",
    "case.food.label": "Partner delivery",
    "case.food.title": "Food assistance delivered to communities",
    "case.shelter.label": "Shelters",
    "case.shelter.title": "Temporary accommodation and support spaces",
    "field.defenders.label": "Support for defenders",
    "field.defenders.title": "Helping those who protect the country.",
    "field.defenders.text": "Partner meetings, resource transfers and request coordination for units and military hospitals.",
    "field.mobility.label": "Targeted assistance",
    "field.mobility.title": "Mobility, dignity and a concrete result.",
    "field.mobility.text": "Wheelchairs, walkers and other mobility aids are delivered to people who need them here and now.",
    "report.label": "Quarterly report",
    "report.title": "Quarterly results in figures that are easy to verify and share.",
    "report.text":
      "The information from the quarterly infographic has been converted into a live site section with clear categories and a focus on results.",
    "report.top.volunteers": "volunteers involved in foundation work",
    "report.top.trucks": "cargo vehicles received",
    "report.top.cargo": "humanitarian cargo processed",
    "report.top.idp": "internally displaced people supported",
    "report.received": "Received",
    "report.received.trucks": "cargo vehicles, including 2 for military use",
    "report.received.cargo": "of humanitarian cargo",
    "report.received.events": "charity events",
    "report.received.shelter": "shelter maintained by the foundation",
    "report.distributed": "Distributed",
    "report.distributed.strollers": "children's strollers",
    "report.distributed.wheelchairs": "wheelchairs",
    "report.distributed.walkers": "adult walkers",
    "report.distributed.gifts": "gift sets for Children's Day",
    "report.helped": "Assistance provided",
    "report.helped.shelters": "shelters",
    "report.helped.cities": "cities",
    "report.helped.idp": "internally displaced people",
    "report.defense": "Support for defenders",
    "report.defense.zsu": "Armed Forces brigades",
    "report.defense.tro": "Territorial Defense brigades",
    "report.defense.hospitals": "military hospitals",
    "report.defense.donors": "donor countries joined the effort",
    "report.note.title": "Quarterly reporting",
    "report.note.text": "The data was taken from the foundation's original infographic and redesigned as a clear reputation section.",
    "donate.label": "Support the foundation",
    "donate.title": "Fuel fundraiser for humanitarian trips.",
    "donate.text":
      "Fuel means faster delivery of aid: cargo, community trips, food distribution, mobility aids and support for defense-related needs.",
    "donate.goal.label": "Fundraising goal",
    "donate.goal.value": "UAH 100,000",
    "donate.impact.one.label": "UAH 500",
    "donate.impact.one.text": "helps cover part of the fuel for a city delivery trip",
    "donate.impact.two.label": "UAH 1,000",
    "donate.impact.two.text": "strengthens delivery of food, essentials or mobility aids",
    "donate.impact.three.label": "UAH 5,000",
    "donate.impact.three.text": "brings a major humanitarian route between communities closer",
    "donate.open": "Open Monobank Jar",
    "donate.copyCard": "Copy card number",
    "donate.copyLink": "Copy Jar link",
    "donate.card.label": "Monobank Jar card number",
    "donate.qr": "Scan the QR code or open the Monobank Jar link.",
    "directions.label": "Focus areas",
    "directions.title": "Areas where the foundation works systematically and clearly for partners.",
    "direction.humanitarian.label": "Humanitarian aid",
    "direction.humanitarian.title": "Support for people and families",
    "direction.humanitarian.text": "Targeted collections, essential needs, crisis assistance and request coordination.",
    "direction.communities.label": "Communities",
    "direction.communities.title": "Local initiatives",
    "direction.communities.text": "Community projects, partnership programs and support for important social services.",
    "direction.partners.label": "Partnership",
    "direction.partners.title": "Businesses and patrons",
    "direction.partners.text": "Official communication, joint campaigns, corporate charity and transparent agreements.",
    "direction.reports.label": "Reporting",
    "direction.reports.title": "Trust through facts",
    "direction.reports.text": "Public summaries, proof of spending and a clear story behind every important project.",
    "honor.label": "Honor board",
    "honor.title": "Gratitude to the people and partners who help aid reach the right hands.",
    "honor.text":
      "Public gratitude is tied to real areas of work: volunteers, partners, logistics, medical institutions, hospitals and international donors.",
    "honor.partners.label": "Donor partners",
    "honor.partners.title": "Partners who provide resources",
    "honor.partners.text": "Nova Ukraine, international benefactors and local partners help cover cargo, food, fuel and equipment needs.",
    "honor.volunteers.label": "Volunteers",
    "honor.volunteers.title": "80 people involved in the foundation",
    "honor.volunteers.text": "The team organizing distributions, communication, sorting and on-site support.",
    "honor.defenders.label": "Defenders and medics",
    "honor.defenders.title": "Respect for service",
    "honor.defenders.text": "A separate line of gratitude to those who hold the country and those who help save lives.",
    "honor.logistics.label": "Logistics teams",
    "honor.logistics.title": "500+ tons of aid",
    "honor.logistics.text": "People behind the wheel, in warehouses and in coordination who keep aid moving quickly.",
    "honor.note.title": "Acknowledgements that can grow",
    "honor.note.text":
      "The main groups are already shown. Once approved, personal names, company logos and organization names can be added without changing the site's structure.",
    "requisites.label": "Transparency",
    "requisites.title": "Official foundation banking details for partners and donors.",
    "requisites.recipient": "Recipient",
    "requisites.bank": "Bank",
    "requisites.account": "Account",
    "requisites.purpose": "Payment purpose",
    "requisites.purposeText": "Charitable assistance or support for the fuel fundraiser",
    "documents.label": "Documents",
    "documents.title": "Files that help partners verify the foundation quickly.",
    "documents.text": "Registration materials, bank details and reporting infographics are collected in one place.",
    "documents.verify.label": "Official check",
    "documents.verify.title": "Key foundation details in one block.",
    "documents.verify.text": "Here are the bank details, registration code and files partners usually need before a transfer or cooperation.",
    "documents.verify.registry": "Registration code",
    "documents.verify.iban": "IBAN UAH",
    "documents.verify.bank": "Bank",
    "documents.verify.email": "Foundation email",
    "documents.verify.openRegistration": "Registration",
    "documents.verify.openBank": "Bank details",
    "documents.verify.toReport": "Reporting",
    "documents.registration.label": "PDF",
    "documents.registration.title": "Registration documents",
    "documents.registration.text": "A file for an initial check of the organization's official status.",
    "documents.bank.label": "PDF",
    "documents.bank.title": "Banking details",
    "documents.bank.text": "Official file with transfer details for donations and partner payments.",
    "documents.report.label": "JPG",
    "documents.report.title": "Quarterly infographic",
    "documents.report.text": "The original visual report whose figures were transferred to the site.",
    "faq.label": "Briefly",
    "faq.title": "Three answers a person needs before donating.",
    "faq.official.q": "Is the foundation official?",
    "faq.official.a": "Yes. The site lists official banking details, registration code, bank and IBAN for transfers.",
    "faq.where.q": "Where does the support go?",
    "faq.where.a":
      "To humanitarian cargo, charity events, IDP support, shelters, mobility aids and defense-related support areas.",
    "faq.result.q": "How can I see the result?",
    "faq.result.a": "The reporting section contains quarterly figures and real photos from field work, aid delivery and partner events.",
    "contacts.label": "Contacts",
    "contacts.title": "For partners, donors and official requests.",
    "contacts.direct": "Direct contact",
    "contacts.connection": "Contact the foundation",
    "contacts.country": "Ukraine",
    "contacts.official": "Official",
    "contacts.requisites": "Request banking details",
    "contacts.text": "Send a message with the partnership topic, amount or aid format. The foundation team will prepare a reply and documents.",
    "contacts.request": "Request details",
    "contacts.quick": "Quick contact:",
    "contacts.copyEmail": "Email",
    "contacts.copyTelegram": "Telegram",
    "contacts.copyPhone": "Phone",
    "contacts.copyViber": "Viber",
    "footer.copy": "© <span id=\"year\"></span> Razom My Syla Charitable Foundation.",
    "footer.top": "Back to top",
    "action.copy": "Copy",
    "action.copied": "Copied",
  },
  de: {
    "brand.name": "Razom My Syla",
    "brand.type": "Wohltätigkeitsstiftung",
    "nav.about": "Über uns",
    "nav.process": "Arbeitsweise",
    "nav.activity": "Aktivität",
    "nav.updates": "Aktuelles",
    "nav.report": "Berichte",
    "nav.donate": "Spenden",
    "nav.directions": "Bereiche",
    "nav.honor": "Ehrentafel",
    "nav.documents": "Dokumente",
    "nav.contacts": "Kontakt",
    "hero.eyebrow": "Offizielle Wohltätigkeitsstiftung • Ukraine",
    "hero.title": "Wir unterstützen Menschen, Gemeinden und Verteidiger der Ukraine",
    "hero.copy":
      "Razom My Syla organisiert humanitäre Hilfe, Logistik sowie Unterstützung für Familien, Kinder, Gemeinden und militärische Einheiten. Spenden werden zu konkreten Lieferungen und offenen Berichten.",
    "hero.primary": "Stiftung unterstützen",
    "hero.secondary": "Berichte ansehen",
    "hero.proof.donors": "Spenderländer",
    "hero.proof.cities": "unterstützte Städte",
    "stats.volunteers.label": "Freiwillige",
    "stats.volunteers.text": "Menschen sind in die Arbeit der Stiftung eingebunden.",
    "stats.logistics.label": "Logistik",
    "stats.logistics.text": "Hilfsgüter wurden erhalten und verarbeitet.",
    "stats.help.label": "Hilfe",
    "stats.help.text": "Binnenvertriebene wurden durch Projekte der Stiftung unterstützt.",
    "unit.tons": "Tonnen",
    "about.label": "Über uns",
    "about.title": "Eine offizielle, ruhige und verantwortungsvolle Stimme der Hilfe.",
    "about.p1":
      "Razom My Syla schafft Vertrauen zwischen Menschen, die helfen möchten, und Menschen, die Unterstützung brauchen. Der Fokus liegt auf konkreten Bedürfnissen, Partnerschaft und klarer Kommunikation.",
    "about.p2":
      "Diese Seite bündelt die wichtigsten Informationen: Tätigkeitsbereiche, Fotos der Arbeit, Quartalszahlen, offizielle Bankdaten und direkte Kontakte.",
    "director.label": "Leitung",
    "director.title": "Direktor der Stiftung",
    "director.text": "Koordination von Partnerschaften, offiziellen Anfragen und strategischer Entwicklung der Stiftung.",
    "process.label": "Arbeitsweise",
    "process.title": "Vom Bedarf bis zum Bericht: ein klares Hilfesystem.",
    "process.text":
      "Die Stiftung arbeitet als Koordinationszentrum: Sie nimmt Bedarf auf, bestätigt Ressourcen, organisiert Logistik und zeigt Partnern das Ergebnis.",
    "process.step1.title": "Anfrage und Prüfung",
    "process.step1.text": "Wir erfassen Bedarf, Priorität, Adresse, Verantwortliche und Format der Hilfe.",
    "process.step2.title": "Partnerressource",
    "process.step2.text": "Wir koordinieren Spender, Güter, Einkäufe oder Fundraising für eine konkrete Aufgabe.",
    "process.step3.title": "Logistik und Übergabe",
    "process.step3.text": "Wir organisieren Transport, Sortierung, Ausgabe und Kommunikation vor Ort.",
    "process.step4.title": "Öffentliches Ergebnis",
    "process.step4.text": "Wir sammeln Fotos, Zahlen und Nachweise und machen daraus verständliche Berichte.",
    "activity.label": "Aktivität",
    "activity.title": "Die Arbeit der Stiftung: nicht Versprechen, sondern Prozess und Ergebnis.",
    "activity.text":
      "Fotos von Einsätzen, Veranstaltungen und Logistik zeigen den Umfang der Arbeit: Partner sehen Menschen, Lieferungen und organisierte Hilfe.",
    "managed.label": "Aktuelles",
    "managed.title": "Neue Einträge, Fotos und kurze Berichte aus dem Admin-Bereich.",
    "managed.text": "Dieser Bereich kann selbst ergänzt werden: Ereignisse, Fotos der Stiftungsarbeit, Links und kurze Erklärungen.",
    "managed.gallery.more": "Mehr Fotos zeigen",
    "managed.gallery.less": "Weniger zeigen",
    "photo.main.label": "Öffentliche Arbeit",
    "photo.main.title": "Ausgabe von Geschenksets und direkte Kommunikation mit Menschen",
    "photo.logistics": "Humanitäre Logistik",
    "photo.cargo": "Vorbereitung und Sortierung von Hilfsgütern",
    "photo.community": "Wohltätigkeitsveranstaltungen in Gemeinden",
    "case.bread.label": "Tägliche Unterstützung",
    "case.bread.title": "Brot, Lebensmittel und Grundbedarf für Menschen",
    "case.food.label": "Partnerlieferung",
    "case.food.title": "Lebensmittelhilfe für Gemeinden",
    "case.shelter.label": "Unterkünfte",
    "case.shelter.title": "Orte für vorübergehendes Wohnen und Unterstützung",
    "field.defenders.label": "Unterstützung der Verteidiger",
    "field.defenders.title": "Hilfe für diejenigen, die das Land schützen.",
    "field.defenders.text": "Partnertreffen, Übergabe von Ressourcen und Koordination von Anfragen für Einheiten und Militärkrankenhäuser.",
    "field.mobility.label": "Gezielte Hilfe",
    "field.mobility.title": "Mobilität, Würde und ein konkretes Ergebnis.",
    "field.mobility.text": "Rollstühle, Gehhilfen und weitere Hilfsmittel werden an Menschen übergeben, die sie jetzt brauchen.",
    "report.label": "Quartalsbericht",
    "report.title": "Quartalsergebnisse in Zahlen, die leicht zu prüfen und zu zeigen sind.",
    "report.text":
      "Die Daten aus der Quartalsinfografik wurden in einen klaren Website-Bereich mit Kategorien und Ergebnisfokus übertragen.",
    "report.top.volunteers": "Freiwillige in der Arbeit der Stiftung",
    "report.top.trucks": "Lastwagen erhalten",
    "report.top.cargo": "humanitäre Hilfsgüter verarbeitet",
    "report.top.idp": "Binnenvertriebene unterstützt",
    "report.received": "Erhalten",
    "report.received.trucks": "Lastwagen, davon 2 für militärische Zwecke",
    "report.received.cargo": "humanitäre Hilfsgüter",
    "report.received.events": "Wohltätigkeitsveranstaltungen",
    "report.received.shelter": "Unterkunft in Betreuung der Stiftung",
    "report.distributed": "Verteilt",
    "report.distributed.strollers": "Kinderwagen",
    "report.distributed.wheelchairs": "Rollstühle",
    "report.distributed.walkers": "Gehhilfen für Erwachsene",
    "report.distributed.gifts": "Geschenksets zum Kinderschutztag",
    "report.helped": "Hilfe geleistet",
    "report.helped.shelters": "Unterkünfte",
    "report.helped.cities": "Städte",
    "report.helped.idp": "Binnenvertriebene",
    "report.defense": "Hilfe für Verteidiger",
    "report.defense.zsu": "Brigaden der Streitkräfte",
    "report.defense.tro": "Territorialverteidigungsbrigaden",
    "report.defense.hospitals": "Militärkrankenhäuser",
    "report.defense.donors": "Geberländer beteiligten sich",
    "report.note.title": "Quartalsbericht",
    "report.note.text": "Die Daten stammen aus der Originalinfografik der Stiftung und wurden als klarer Reputationsbereich gestaltet.",
    "donate.label": "Stiftung unterstützen",
    "donate.title": "Spendenbox für Treibstoff humanitärer Fahrten.",
    "donate.text":
      "Treibstoff bedeutet schnellere Hilfe: Lieferungen, Fahrten in Gemeinden, Lebensmittelverteilung, Mobilitätshilfen und Unterstützung verteidigungsbezogener Bereiche.",
    "donate.goal.label": "Spendenziel",
    "donate.goal.value": "100.000 UAH",
    "donate.impact.one.label": "500 UAH",
    "donate.impact.one.text": "helfen, einen Teil des Treibstoffs für eine Stadtfahrt zu decken",
    "donate.impact.two.label": "1.000 UAH",
    "donate.impact.two.text": "stärken die Lieferung von Lebensmitteln, Dingen oder Mobilitätshilfen",
    "donate.impact.three.label": "5.000 UAH",
    "donate.impact.three.text": "bringen eine große humanitäre Fahrt zwischen Gemeinden näher",
    "donate.open": "Monobank-Spendenbox öffnen",
    "donate.copyCard": "Kartennummer kopieren",
    "donate.copyLink": "Link kopieren",
    "donate.card.label": "Kartennummer der Spendenbox",
    "donate.qr": "QR-Code scannen oder den Link zur Spendenbox öffnen.",
    "directions.label": "Arbeitsbereiche",
    "directions.title": "Bereiche, in denen die Stiftung systematisch und nachvollziehbar arbeitet.",
    "direction.humanitarian.label": "Humanitäre Hilfe",
    "direction.humanitarian.title": "Unterstützung für Menschen und Familien",
    "direction.humanitarian.text": "Gezielte Sammlungen, Grundbedarf, Krisenhilfe und Koordination von Anfragen.",
    "direction.communities.label": "Gemeinden",
    "direction.communities.title": "Lokale Initiativen",
    "direction.communities.text": "Gemeindeprojekte, Partnerprogramme und Unterstützung wichtiger sozialer Dienste.",
    "direction.partners.label": "Partnerschaft",
    "direction.partners.title": "Unternehmen und Förderer",
    "direction.partners.text": "Offizielle Kommunikation, gemeinsame Kampagnen, Unternehmensspenden und transparente Vereinbarungen.",
    "direction.reports.label": "Berichte",
    "direction.reports.title": "Vertrauen durch Fakten",
    "direction.reports.text": "Öffentliche Zusammenfassungen, Nachweise der Ausgaben und klare Geschichten hinter wichtigen Projekten.",
    "honor.label": "Ehrentafel",
    "honor.title": "Dank an Menschen und Partner, durch die Hilfe zielgerichtet ankommt.",
    "honor.text":
      "Der öffentliche Dank ist an reale Arbeitsbereiche gebunden: Freiwillige, Partner, Logistik, medizinische Einrichtungen, Hospitäler und internationale Spender.",
    "honor.partners.label": "Spenderpartner",
    "honor.partners.title": "Partner, die Ressourcen geben",
    "honor.partners.text": "Nova Ukraine, internationale Förderer und lokale Partner helfen, Bedarf an Hilfsgütern, Lebensmitteln, Treibstoff und Ausrüstung zu decken.",
    "honor.volunteers.label": "Freiwillige",
    "honor.volunteers.title": "80 Menschen in der Stiftungsarbeit",
    "honor.volunteers.text": "Das Team organisiert Ausgaben, Kommunikation, Sortierung und Unterstützung vor Ort.",
    "honor.defenders.label": "Verteidiger und Mediziner",
    "honor.defenders.title": "Respekt vor dem Dienst",
    "honor.defenders.text": "Ein eigener Dank an diejenigen, die das Land halten, und an diejenigen, die helfen, Leben zu retten.",
    "honor.logistics.label": "Logistikteams",
    "honor.logistics.title": "500+ Tonnen Hilfe",
    "honor.logistics.text": "Menschen am Steuer, in Lagern und in der Koordination, durch die Hilfe schnell unterwegs ist.",
    "honor.note.title": "Danksagungen, die wachsen können",
    "honor.note.text":
      "Die wichtigsten Gruppen sind bereits genannt. Nach Freigabe können Namen, Firmenlogos und Organisationen ergänzt werden, ohne die Seitenstruktur zu ändern.",
    "requisites.label": "Transparenz",
    "requisites.title": "Offizielle Bankdaten der Stiftung für Partner und Spender.",
    "requisites.recipient": "Empfänger",
    "requisites.bank": "Bank",
    "requisites.account": "Konto",
    "requisites.purpose": "Zahlungszweck",
    "requisites.purposeText": "Wohltätige Hilfe oder Unterstützung der Treibstoffsammlung",
    "documents.label": "Dokumente",
    "documents.title": "Dateien, mit denen Partner die Stiftung schnell prüfen können.",
    "documents.text": "Registrierungsunterlagen, Bankdaten und Berichtsgrafik sind an einem Ort gesammelt.",
    "documents.verify.label": "Offizielle Prüfung",
    "documents.verify.title": "Die wichtigsten Stiftungsdaten in einem Block.",
    "documents.verify.text": "Hier stehen Bankdaten, Registrierungsnummer und Dateien, die Partner vor einer Überweisung oder Zusammenarbeit benötigen.",
    "documents.verify.registry": "Registrierungsnummer",
    "documents.verify.iban": "IBAN UAH",
    "documents.verify.bank": "Bank",
    "documents.verify.email": "E-Mail der Stiftung",
    "documents.verify.openRegistration": "Registrierung",
    "documents.verify.openBank": "Bankdaten",
    "documents.verify.toReport": "Berichte",
    "documents.registration.label": "PDF",
    "documents.registration.title": "Registrierungsdokumente",
    "documents.registration.text": "Datei für die erste Prüfung des offiziellen Status der Organisation.",
    "documents.bank.label": "PDF",
    "documents.bank.title": "Bankdaten",
    "documents.bank.text": "Offizielle Datei mit Angaben für Überweisungen und Partnerzahlungen.",
    "documents.report.label": "JPG",
    "documents.report.title": "Quartalsinfografik",
    "documents.report.text": "Der ursprüngliche visuelle Bericht, dessen Zahlen auf die Website übertragen wurden.",
    "faq.label": "Kurz",
    "faq.title": "Drei Antworten, die Menschen vor einer Spende brauchen.",
    "faq.official.q": "Ist die Stiftung offiziell?",
    "faq.official.a": "Ja. Die Website enthält offizielle Bankdaten, Registrierungsnummer, Bank und IBAN für Überweisungen.",
    "faq.where.q": "Wohin geht die Hilfe?",
    "faq.where.a": "In humanitäre Lieferungen, Veranstaltungen, Unterstützung für Binnenvertriebene, Unterkünfte, Mobilitätshilfen und verteidigungsbezogene Hilfe.",
    "faq.result.q": "Wie sieht man das Ergebnis?",
    "faq.result.a": "Der Berichtbereich zeigt Quartalszahlen und echte Fotos von Einsätzen, Hilfsübergaben und Partnerveranstaltungen.",
    "contacts.label": "Kontakt",
    "contacts.title": "Für Partner, Spender und offizielle Anfragen.",
    "contacts.direct": "Direkter Kontakt",
    "contacts.connection": "Kontakt zur Stiftung",
    "contacts.country": "Ukraine",
    "contacts.official": "Offiziell",
    "contacts.requisites": "Bankdaten anfragen",
    "contacts.text": "Senden Sie eine Nachricht mit Thema der Zusammenarbeit, Betrag oder Art der Hilfe. Das Team bereitet Antwort und Dokumente vor.",
    "contacts.request": "Bankdaten anfragen",
    "contacts.quick": "Schneller Kontakt:",
    "contacts.copyEmail": "E-Mail",
    "contacts.copyTelegram": "Telegram",
    "contacts.copyPhone": "Telefon",
    "contacts.copyViber": "Viber",
    "footer.copy": "© <span id=\"year\"></span> Wohltätigkeitsstiftung Razom My Syla.",
    "footer.top": "Nach oben",
    "action.copy": "Kopieren",
    "action.copied": "Kopiert",
  },
  pl: {
    "brand.name": "Razom My Syla",
    "brand.type": "Fundacja charytatywna",
    "nav.about": "O fundacji",
    "nav.process": "Jak działamy",
    "nav.activity": "Działalność",
    "nav.updates": "Aktualności",
    "nav.report": "Raporty",
    "nav.donate": "Wesprzyj",
    "nav.directions": "Obszary",
    "nav.honor": "Tablica honorowa",
    "nav.documents": "Dokumenty",
    "nav.contacts": "Kontakt",
    "hero.eyebrow": "Oficjalna fundacja charytatywna • Ukraina",
    "hero.title": "Wspieramy ludzi, społeczności i obrońców Ukrainy",
    "hero.copy":
      "Razom My Syla organizuje pomoc humanitarną, logistykę oraz wsparcie rodzin, dzieci, społeczności i jednostek wojskowych. Darowizny zamieniamy w konkretne dostawy i otwarte raporty.",
    "hero.primary": "Wesprzyj fundację",
    "hero.secondary": "Zobacz raporty",
    "hero.proof.donors": "Kraje-darczyńcy",
    "hero.proof.cities": "Miasta pomocy",
    "stats.volunteers.label": "Wolontariusze",
    "stats.volunteers.text": "osób zaangażowanych w pracę fundacji.",
    "stats.logistics.label": "Logistyka",
    "stats.logistics.text": "ładunku otrzymano i opracowano.",
    "stats.help.label": "Pomoc",
    "stats.help.text": "osób wewnętrznie przesiedlonych otrzymało wsparcie przez projekty fundacji.",
    "unit.tons": "ton",
    "about.label": "O fundacji",
    "about.title": "Oficjalny, spokojny i odpowiedzialny głos dobroczynności.",
    "about.p1":
      "Razom My Syla działa jako przestrzeń zaufania między tymi, którzy chcą pomagać, a tymi, którzy tej pomocy potrzebują. Fundacja skupia się na konkretnych potrzebach, partnerstwie i zrozumiałej komunikacji.",
    "about.p2":
      "Na stronie zebrano najważniejsze fakty: kierunki działania, zdjęcia pracy, wyniki kwartalne, oficjalne dane bankowe i szybki kontakt z fundacją.",
    "director.label": "Kierownictwo",
    "director.title": "Dyrektor fundacji",
    "director.text": "Koordynacja partnerstw, oficjalnych zapytań i strategicznego rozwoju fundacji.",
    "process.label": "Jak działamy",
    "process.title": "Od zgłoszenia do raportu: przejrzysty system pomocy.",
    "process.text":
      "Fundacja działa jako centrum koordynacyjne: przyjmuje potrzebę, potwierdza zasoby, organizuje logistykę i pokazuje partnerom rezultat.",
    "process.step1.title": "Zgłoszenie i weryfikacja",
    "process.step1.text": "Ustalamy potrzebę, priorytet, adres, osoby odpowiedzialne i format pomocy.",
    "process.step2.title": "Zasób partnerski",
    "process.step2.text": "Koordynujemy darczyńców, ładunki, zakupy lub zbiórkę pod konkretne zadanie.",
    "process.step3.title": "Logistyka i przekazanie",
    "process.step3.text": "Organizujemy transport, sortowanie, wydawanie i komunikację na miejscu.",
    "process.step4.title": "Publiczny rezultat",
    "process.step4.text": "Zbieramy zdjęcia, liczby i potwierdzenia, a następnie zamieniamy je w czytelny raport.",
    "activity.label": "Działalność",
    "activity.title": "Praca fundacji w kadrze: nie obietnice, lecz proces i rezultat.",
    "activity.text":
      "Zdjęcia z wyjazdów, wydarzeń i logistyki pokazują skalę pracy: partnerzy widzą ludzi, ładunki i organizację pomocy.",
    "managed.label": "Aktualności",
    "managed.title": "Nowe wpisy, zdjęcia i krótkie raporty z panelu administracyjnego.",
    "managed.text": "Ten blok można samodzielnie uzupełniać o wydarzenia, zdjęcia z pracy fundacji, linki i krótkie wyjaśnienia.",
    "managed.gallery.more": "Pokaż więcej zdjęć",
    "managed.gallery.less": "Pokaż mniej",
    "photo.main.label": "Praca publiczna",
    "photo.main.title": "Wydawanie zestawów prezentowych i komunikacja z ludźmi",
    "photo.logistics": "Logistyka humanitarna",
    "photo.cargo": "Przygotowanie i sortowanie ładunku",
    "photo.community": "Wydarzenia charytatywne w społecznościach",
    "case.bread.label": "Codzienne wsparcie",
    "case.bread.title": "Chleb, produkty i podstawowe rzeczy dla ludzi",
    "case.food.label": "Dostawa partnerska",
    "case.food.title": "Przekazanie pomocy żywnościowej społecznościom",
    "case.shelter.label": "Schronienia",
    "case.shelter.title": "Miejsca tymczasowego pobytu i wsparcia",
    "field.defenders.label": "Wsparcie obrońców",
    "field.defenders.title": "Pomoc tym, którzy bronią kraju.",
    "field.defenders.text":
      "Spotkania partnerskie, przekazywanie zasobów i koordynacja zapytań dla jednostek oraz szpitali wojskowych.",
    "field.mobility.label": "Pomoc celowa",
    "field.mobility.title": "Mobilność, godność i konkretny rezultat.",
    "field.mobility.text":
      "Wózki inwalidzkie, chodziki i inne środki wsparcia trafiają do osób, które potrzebują ich tu i teraz.",
    "report.label": "Raport kwartalny",
    "report.title": "Wyniki kwartału w liczbach, które łatwo sprawdzić i pokazać.",
    "report.text":
      "Informacje z kwartalnej infografiki przeniesiono do żywego bloku strony: bez drobnego tekstu na obrazku, z jasnymi kategoriami i naciskiem na rezultat.",
    "report.top.volunteers": "wolontariuszy zaangażowanych w pracę fundacji",
    "report.top.trucks": "ciężarówek otrzymano",
    "report.top.cargo": "ładunku humanitarnego opracowano",
    "report.top.idp": "osób przesiedlonych otrzymało pomoc przez projekty fundacji",
    "report.received": "Otrzymano",
    "report.received.trucks": "ciężarówek, w tym 2 pojazdy przeznaczenia wojskowego",
    "report.received.cargo": "ładunku humanitarnego",
    "report.received.events": "wydarzeń charytatywnych",
    "report.received.shelter": "schronienie utrzymywane przez fundację",
    "report.distributed": "Przekazano",
    "report.distributed.strollers": "wózków dziecięcych",
    "report.distributed.wheelchairs": "wózków inwalidzkich",
    "report.distributed.walkers": "chodzików dla dorosłych",
    "report.distributed.gifts": "zestawów prezentowych dla dzieci z okazji Dnia Dziecka",
    "report.helped": "Udzielono pomocy",
    "report.helped.shelters": "schronieniom",
    "report.helped.cities": "miastom",
    "report.helped.idp": "osobom wewnętrznie przesiedlonym",
    "report.defense": "Pomoc żołnierzom",
    "report.defense.zsu": "brygady Sił Zbrojnych Ukrainy",
    "report.defense.tro": "brygad Obrony Terytorialnej",
    "report.defense.hospitals": "szpitali wojskowych",
    "report.defense.donors": "krajów-darczyńców dołączyło do pomocy",
    "report.note.title": "Raport kwartalny",
    "report.note.text":
      "Dane przeniesiono z oryginalnej infografiki fundacji i opracowano jako oddzielny blok reputacyjny strony.",
    "donate.label": "Wesprzyj fundację",
    "donate.title": "Zbiórka na paliwo dla wyjazdów humanitarnych.",
    "donate.text":
      "Paliwo oznacza szybsze dostarczanie pomocy: transporty, wyjazdy do społeczności, przekazywanie żywności, środków mobilności i wsparcie kierunków obronnych.",
    "donate.goal.label": "Cel zbiórki",
    "donate.goal.value": "100 000 UAH",
    "donate.impact.one.label": "500 UAH",
    "donate.impact.one.text": "pomaga pokryć część paliwa na miejski wyjazd z pomocą",
    "donate.impact.two.label": "1 000 UAH",
    "donate.impact.two.text": "wzmacnia dostawę żywności, rzeczy lub środków mobilności",
    "donate.impact.three.label": "5 000 UAH",
    "donate.impact.three.text": "przybliża duży humanitarny kurs między społecznościami",
    "donate.open": "Otwórz skarbonkę Monobank",
    "donate.copyCard": "Skopiuj numer karty",
    "donate.copyLink": "Skopiuj link",
    "donate.card.label": "Numer karty skarbonki",
    "donate.qr": "Zeskanuj kod QR albo otwórz link do skarbonki.",
    "directions.label": "Obszary pracy",
    "directions.title": "Obszary, w których fundacja działa systemowo i zrozumiale dla partnerów.",
    "direction.humanitarian.label": "Pomoc humanitarna",
    "direction.humanitarian.title": "Wsparcie ludzi i rodzin",
    "direction.humanitarian.text": "Zbiórki celowe, podstawowe potrzeby, pomoc kryzysowa i koordynacja zapytań.",
    "direction.communities.label": "Społeczności",
    "direction.communities.title": "Inicjatywy lokalne",
    "direction.communities.text": "Projekty dla społeczności, programy partnerskie i wsparcie ważnych usług społecznych.",
    "direction.partners.label": "Partnerstwo",
    "direction.partners.title": "Biznes i mecenasi",
    "direction.partners.text": "Oficjalna komunikacja, wspólne kampanie, dobroczynność firmowa i przejrzyste uzgodnienia.",
    "direction.reports.label": "Raportowanie",
    "direction.reports.title": "Zaufanie przez fakty",
    "direction.reports.text": "Publiczne podsumowania, potwierdzenia wydatków i jasna historia każdego ważnego projektu.",
    "honor.label": "Tablica honorowa",
    "honor.title": "Podziękowanie ludziom i partnerom, dzięki którym pomoc trafia celowo.",
    "honor.text":
      "Publiczne podziękowania są powiązane z realnymi obszarami pracy: wolontariuszami, partnerami, logistyką, placówkami medycznymi, szpitalami i darczyńcami międzynarodowymi.",
    "honor.partners.label": "Partnerzy-darczyńcy",
    "honor.partners.title": "Partnerzy przekazujący zasoby",
    "honor.partners.text": "Nova Ukraine, międzynarodowi darczyńcy i lokalni partnerzy pomagają pokrywać potrzeby w transporcie, żywności, paliwie i sprzęcie.",
    "honor.volunteers.label": "Wolontariusze",
    "honor.volunteers.title": "80 osób w pracy fundacji",
    "honor.volunteers.text": "Zespół, który organizuje wydawanie pomocy, komunikację, sortowanie i wsparcie ludzi na miejscu.",
    "honor.defenders.label": "Obrońcy i medycy",
    "honor.defenders.title": "Szacunek dla służby",
    "honor.defenders.text": "Oddzielny kierunek wdzięczności dla tych, którzy bronią kraju, i tych, którzy pomagają ratować życie.",
    "honor.logistics.label": "Zespoły logistyczne",
    "honor.logistics.title": "500+ ton pomocy",
    "honor.logistics.text": "Ludzie za kierownicą, w magazynach i w koordynacji, dzięki którym pomoc porusza się szybko.",
    "honor.note.title": "Podziękowania, które można rozwijać",
    "honor.note.text":
      "Główne grupy są już wskazane. Po zatwierdzeniu można dodać nazwiska, logotypy firm i nazwy organizacji bez zmiany struktury strony.",
    "requisites.label": "Przejrzystość",
    "requisites.title": "Oficjalne dane bankowe fundacji dla partnerów i darczyńców.",
    "requisites.recipient": "Odbiorca",
    "requisites.bank": "Bank",
    "requisites.account": "Rachunek",
    "requisites.purpose": "Cel płatności",
    "requisites.purposeText": "Pomoc charytatywna albo wsparcie zbiórki na paliwo",
    "documents.label": "Dokumenty",
    "documents.title": "Pliki, które pomagają partnerom szybko sprawdzić fundację.",
    "documents.text": "Materiały rejestracyjne, dane bankowe i infografika raportowa są zebrane w jednym miejscu.",
    "documents.verify.label": "Oficjalna weryfikacja",
    "documents.verify.title": "Kluczowe dane fundacji w jednym bloku.",
    "documents.verify.text": "Tutaj zebrano dane bankowe, kod rejestracyjny i pliki, których partnerzy zwykle potrzebują przed przelewem lub współpracą.",
    "documents.verify.registry": "Kod rejestracyjny",
    "documents.verify.iban": "IBAN UAH",
    "documents.verify.bank": "Bank",
    "documents.verify.email": "Email fundacji",
    "documents.verify.openRegistration": "Rejestracja",
    "documents.verify.openBank": "Dane bankowe",
    "documents.verify.toReport": "Raporty",
    "documents.registration.label": "PDF",
    "documents.registration.title": "Dokumenty rejestracyjne",
    "documents.registration.text": "Plik do wstępnej weryfikacji oficjalnego statusu organizacji.",
    "documents.bank.label": "PDF",
    "documents.bank.title": "Dane bankowe",
    "documents.bank.text": "Oficjalny plik z danymi do przelewów i płatności partnerskich.",
    "documents.report.label": "JPG",
    "documents.report.title": "Infografika kwartalna",
    "documents.report.text": "Oryginalny raport wizualny, z którego przeniesiono wskaźniki na stronę.",
    "faq.label": "Krótko",
    "faq.title": "Trzy odpowiedzi potrzebne przed darowizną.",
    "faq.official.q": "Czy fundacja jest oficjalna?",
    "faq.official.a": "Tak. Na stronie podano oficjalne dane bankowe, kod rejestracyjny, bank i IBAN do przelewów.",
    "faq.where.q": "Dokąd trafia wsparcie?",
    "faq.where.a":
      "Na transporty humanitarne, wydarzenia charytatywne, wsparcie osób przesiedlonych, schronienia, środki mobilności i pomoc dla kierunków obronnych.",
    "faq.result.q": "Jak zobaczyć rezultat?",
    "faq.result.a": "Sekcja raportów zawiera kwartalne liczby oraz prawdziwe zdjęcia z pracy terenowej, przekazywania pomocy i wydarzeń partnerskich.",
    "contacts.label": "Kontakt",
    "contacts.title": "Dla partnerów, darczyńców i oficjalnych zapytań.",
    "contacts.direct": "Kontakt bezpośredni",
    "contacts.connection": "Kontakt z fundacją",
    "contacts.country": "Ukraina",
    "contacts.official": "Oficjalnie",
    "contacts.requisites": "Zapytanie o dane bankowe",
    "contacts.text": "Wyślij wiadomość z tematem współpracy, kwotą lub formatem pomocy. Zespół fundacji przygotuje odpowiedź i dokumenty.",
    "contacts.request": "Poproś o dane",
    "contacts.quick": "Szybki kontakt:",
    "contacts.copyEmail": "Email",
    "contacts.copyTelegram": "Telegram",
    "contacts.copyPhone": "Telefon",
    "contacts.copyViber": "Viber",
    "footer.copy": "© <span id=\"year\"></span> Fundacja charytatywna Razom My Syla.",
    "footer.top": "Na początek",
    "action.copy": "Kopiuj",
    "action.copied": "Skopiowano",
  },
  ro: {
    "brand.name": "Razom My Syla",
    "brand.type": "Fundație caritabilă",
    "nav.about": "Despre",
    "nav.process": "Cum lucrăm",
    "nav.activity": "Activitate",
    "nav.updates": "Actualizări",
    "nav.report": "Rapoarte",
    "nav.donate": "Donează",
    "nav.directions": "Direcții",
    "nav.honor": "Onoare",
    "nav.documents": "Documente",
    "nav.contacts": "Contacte",
    "hero.eyebrow": "Fundație caritabilă oficială • Ucraina",
    "hero.title": "Sprijinim oamenii, comunitățile și apărătorii Ucrainei",
    "hero.copy":
      "Razom My Syla organizează ajutor umanitar, logistică și sprijin pentru familii, copii, comunități și unități militare. Donațiile devin livrări concrete și rapoarte deschise.",
    "hero.primary": "Susține fundația",
    "hero.secondary": "Vezi rapoartele",
    "hero.proof.donors": "Țări donatoare",
    "hero.proof.cities": "Orașe ajutate",
    "stats.volunteers.label": "Voluntari",
    "stats.volunteers.text": "persoane implicate în activitatea fundației.",
    "stats.logistics.label": "Logistică",
    "stats.logistics.text": "de încărcătură primită și procesată.",
    "stats.help.label": "Ajutor",
    "stats.help.text": "persoane strămutate intern au primit sprijin prin proiectele fundației.",
    "unit.tons": "tone",
    "about.label": "Despre fundație",
    "about.title": "O voce oficială, calmă și responsabilă a carității.",
    "about.p1":
      "Razom My Syla funcționează ca un spațiu de încredere între cei care sunt gata să sprijine și cei care au nevoie de ajutor. Fundația se concentrează pe nevoi concrete, parteneriate și comunicare clară.",
    "about.p2":
      "Site-ul adună faptele principale: direcții de activitate, fotografii ale muncii, indicatori trimestriali, date bancare oficiale și contact rapid cu fundația.",
    "director.label": "Conducere",
    "director.title": "Directorul fundației",
    "director.text": "Coordonarea parteneriatelor, solicitărilor oficiale și dezvoltării strategice a fundației.",
    "process.label": "Cum lucrăm",
    "process.title": "De la solicitare la raport: un sistem clar de ajutor.",
    "process.text":
      "Fundația lucrează ca centru de coordonare: primește nevoia, confirmă resursele, organizează logistica și arată partenerilor rezultatul.",
    "process.step1.title": "Solicitare și verificare",
    "process.step1.text": "Înregistrăm nevoia, prioritatea, adresa, responsabilii și formatul ajutorului.",
    "process.step2.title": "Resursă de parteneriat",
    "process.step2.text": "Coordonăm donatori, transporturi, achiziții sau strângere de fonduri pentru o sarcină concretă.",
    "process.step3.title": "Logistică și transmitere",
    "process.step3.text": "Organizăm transportul, sortarea, distribuirea și comunicarea la fața locului.",
    "process.step4.title": "Rezultat public",
    "process.step4.text": "Colectăm fotografii, cifre și confirmări, apoi le transformăm în raportare clară.",
    "activity.label": "Activitate",
    "activity.title": "Munca fundației în imagini: nu promisiuni, ci proces și rezultat.",
    "activity.text":
      "Fotografiile din deplasări, evenimente și logistică arată amploarea muncii: partenerii văd oamenii, transporturile și organizarea ajutorului.",
    "managed.label": "Actualizări",
    "managed.title": "Postări noi, fotografii și rapoarte scurte din panoul de administrare.",
    "managed.text": "Acest bloc poate fi completat independent cu evenimente, fotografii din activitatea fundației, linkuri și explicații scurte.",
    "managed.gallery.more": "Arată mai multe fotografii",
    "managed.gallery.less": "Arată mai puțin",
    "photo.main.label": "Activitate publică",
    "photo.main.title": "Distribuirea seturilor cadou și comunicarea cu oamenii",
    "photo.logistics": "Logistică umanitară",
    "photo.cargo": "Pregătirea și sortarea încărcăturii",
    "photo.community": "Evenimente caritabile în comunități",
    "case.bread.label": "Sprijin zilnic",
    "case.bread.title": "Pâine, alimente și lucruri de bază pentru oameni",
    "case.food.label": "Livrare prin parteneri",
    "case.food.title": "Transmiterea ajutorului alimentar către comunități",
    "case.shelter.label": "Adăposturi",
    "case.shelter.title": "Locuri de cazare temporară și sprijin",
    "field.defenders.label": "Sprijin pentru apărători",
    "field.defenders.title": "Ajutor pentru cei care țin țara.",
    "field.defenders.text":
      "Întâlniri cu parteneri, transmitere de resurse și coordonarea solicitărilor pentru unități și spitale militare.",
    "field.mobility.label": "Ajutor țintit",
    "field.mobility.title": "Mobilitate, demnitate și rezultat concret.",
    "field.mobility.text":
      "Scaune rulante, cadre de mers și alte mijloace de sprijin sunt transmise oamenilor care au nevoie de ele aici și acum.",
    "report.label": "Raport trimestrial",
    "report.title": "Rezultatele trimestrului în cifre ușor de verificat și prezentat.",
    "report.text":
      "Informațiile din infograficul trimestrial au fost transferate într-un bloc viu al site-ului: fără text mic pe imagine, cu categorii clare și accent pe rezultat.",
    "report.top.volunteers": "voluntari implicați în activitatea fundației",
    "report.top.trucks": "camioane primite",
    "report.top.cargo": "încărcătură umanitară procesată",
    "report.top.idp": "persoane strămutate intern au primit ajutor prin proiectele fundației",
    "report.received": "Primit",
    "report.received.trucks": "camioane, dintre care 2 cu destinație militară",
    "report.received.cargo": "încărcătură umanitară",
    "report.received.events": "evenimente caritabile",
    "report.received.shelter": "adăpost întreținut de fundație",
    "report.distributed": "Distribuit",
    "report.distributed.strollers": "cărucioare pentru copii",
    "report.distributed.wheelchairs": "scaune rulante",
    "report.distributed.walkers": "cadre de mers pentru adulți",
    "report.distributed.gifts": "seturi cadou pentru copii de Ziua Copilului",
    "report.helped": "Ajutor oferit",
    "report.helped.shelters": "adăposturilor",
    "report.helped.cities": "orașelor",
    "report.helped.idp": "persoanelor strămutate intern",
    "report.defense": "Ajutor pentru militari",
    "report.defense.zsu": "brigăzi ale Forțelor Armate ale Ucrainei",
    "report.defense.tro": "brigăzi de apărare teritorială",
    "report.defense.hospitals": "spitale militare",
    "report.defense.donors": "țări donatoare s-au alăturat ajutorului",
    "report.note.title": "Raport trimestrial",
    "report.note.text":
      "Datele au fost transferate din infograficul original al fundației și prezentate ca un bloc reputațional separat al site-ului.",
    "donate.label": "Susține fundația",
    "donate.title": "Colectă pentru combustibil pentru deplasări umanitare.",
    "donate.text":
      "Combustibilul înseamnă livrare mai rapidă a ajutorului: transporturi, deplasări în comunități, distribuire de alimente, mijloace de mobilitate și sprijin pentru direcții de apărare.",
    "donate.goal.label": "Obiectivul colectei",
    "donate.goal.value": "100 000 UAH",
    "donate.impact.one.label": "500 UAH",
    "donate.impact.one.text": "ajută la acoperirea unei părți din combustibil pentru o deplasare urbană",
    "donate.impact.two.label": "1 000 UAH",
    "donate.impact.two.text": "întărește livrarea de produse, lucruri sau mijloace de mobilitate",
    "donate.impact.three.label": "5 000 UAH",
    "donate.impact.three.text": "apropie o cursă umanitară mare între comunități",
    "donate.open": "Deschide Borcanul Monobank",
    "donate.copyCard": "Copiază cardul",
    "donate.copyLink": "Copiază linkul",
    "donate.card.label": "Numărul cardului Borcanului",
    "donate.qr": "Scanați codul QR sau deschideți linkul către Borcan.",
    "directions.label": "Direcții de lucru",
    "directions.title": "Domenii în care fundația acționează sistematic și clar pentru parteneri.",
    "direction.humanitarian.label": "Ajutor umanitar",
    "direction.humanitarian.title": "Sprijin pentru oameni și familii",
    "direction.humanitarian.text": "Colecte țintite, nevoi de bază, ajutor în situații de criză și coordonarea solicitărilor.",
    "direction.communities.label": "Comunități",
    "direction.communities.title": "Inițiative locale",
    "direction.communities.text": "Proiecte pentru comunități, programe de parteneriat și sprijin pentru servicii sociale importante.",
    "direction.partners.label": "Parteneriat",
    "direction.partners.title": "Afaceri și mecenați",
    "direction.partners.text": "Comunicare oficială, campanii comune, caritate corporativă și acorduri transparente.",
    "direction.reports.label": "Raportare",
    "direction.reports.title": "Încredere prin fapte",
    "direction.reports.text": "Rezultate publice, confirmarea cheltuielilor și poveste clară pentru fiecare proiect important.",
    "honor.label": "Tablou de onoare",
    "honor.title": "Mulțumiri oamenilor și partenerilor datorită cărora ajutorul ajunge țintit.",
    "honor.text":
      "Recunoștința publică este legată de domenii reale de lucru: voluntari, parteneri, logistică, instituții medicale, spitale și donatori internaționali.",
    "honor.partners.label": "Parteneri donatori",
    "honor.partners.title": "Parteneri care oferă resurse",
    "honor.partners.text": "Nova Ukraine, binefăcători internaționali și parteneri locali ajută la acoperirea nevoilor de transporturi, alimente, combustibil și echipamente.",
    "honor.volunteers.label": "Voluntari",
    "honor.volunteers.title": "80 de persoane în activitatea fundației",
    "honor.volunteers.text": "Echipa care organizează distribuții, comunicare, sortare și sprijin pentru oameni la fața locului.",
    "honor.defenders.label": "Apărători și medici",
    "honor.defenders.title": "Respect pentru serviciu",
    "honor.defenders.text": "O direcție separată de recunoștință pentru cei care țin țara și pentru cei care ajută la salvarea vieților.",
    "honor.logistics.label": "Echipe logistice",
    "honor.logistics.title": "500+ tone de ajutor",
    "honor.logistics.text": "Oamenii de la volan, din depozite și din coordonare, datorită cărora ajutorul se mișcă rapid.",
    "honor.note.title": "Mulțumiri care pot fi extinse",
    "honor.note.text":
      "Grupurile principale sunt deja indicate. După aprobare pot fi adăugate nume, logouri de companii și organizații fără schimbarea structurii site-ului.",
    "requisites.label": "Transparență",
    "requisites.title": "Datele bancare oficiale ale fundației pentru parteneri și donatori.",
    "requisites.recipient": "Beneficiar",
    "requisites.bank": "Bancă",
    "requisites.account": "Cont",
    "requisites.purpose": "Destinația plății",
    "requisites.purposeText": "Ajutor caritabil sau sprijin pentru colecta de combustibil",
    "documents.label": "Documente",
    "documents.title": "Fișiere care ajută partenerii să verifice rapid fundația.",
    "documents.text": "Materialele de înregistrare, datele bancare și infograficul de raportare sunt adunate într-un singur loc.",
    "documents.verify.label": "Verificare oficială",
    "documents.verify.title": "Datele-cheie ale fundației într-un singur bloc.",
    "documents.verify.text": "Aici sunt datele bancare, codul de înregistrare și fișierele de care partenerii au nevoie de obicei înainte de transfer sau colaborare.",
    "documents.verify.registry": "Cod de înregistrare",
    "documents.verify.iban": "IBAN UAH",
    "documents.verify.bank": "Bancă",
    "documents.verify.email": "Emailul fundației",
    "documents.verify.openRegistration": "Înregistrare",
    "documents.verify.openBank": "Date bancare",
    "documents.verify.toReport": "Rapoarte",
    "documents.registration.label": "PDF",
    "documents.registration.title": "Documente de înregistrare",
    "documents.registration.text": "Fișier pentru verificarea inițială a statutului oficial al organizației.",
    "documents.bank.label": "PDF",
    "documents.bank.title": "Date bancare",
    "documents.bank.text": "Fișier oficial cu date pentru transferuri și plăți ale partenerilor.",
    "documents.report.label": "JPG",
    "documents.report.title": "Infografic trimestrial",
    "documents.report.text": "Raportul vizual original ale cărui cifre au fost transferate pe site.",
    "faq.label": "Pe scurt",
    "faq.title": "Trei răspunsuri necesare înainte de donație.",
    "faq.official.q": "Fundația este oficială?",
    "faq.official.a": "Da. Site-ul indică date bancare oficiale, cod de înregistrare, bancă și IBAN pentru transferuri.",
    "faq.where.q": "Unde merge sprijinul?",
    "faq.where.a":
      "Către transporturi umanitare, evenimente caritabile, sprijin pentru persoane strămutate, adăposturi, mijloace de mobilitate și ajutor pentru direcții de apărare.",
    "faq.result.q": "Cum pot vedea rezultatul?",
    "faq.result.a": "Secțiunea de rapoarte conține cifre trimestriale și fotografii reale din activitatea de teren, transmiterea ajutorului și evenimente cu partenerii.",
    "contacts.label": "Contacte",
    "contacts.title": "Pentru parteneri, donatori și solicitări oficiale.",
    "contacts.direct": "Contact direct",
    "contacts.connection": "Legătura cu fundația",
    "contacts.country": "Ucraina",
    "contacts.official": "Oficial",
    "contacts.requisites": "Solicitare date bancare",
    "contacts.text": "Trimiteți un mesaj cu tema colaborării, suma sau formatul ajutorului. Echipa fundației va pregăti răspunsul și documentele.",
    "contacts.request": "Solicită datele",
    "contacts.quick": "Contact rapid:",
    "contacts.copyEmail": "Email",
    "contacts.copyTelegram": "Telegram",
    "contacts.copyPhone": "Telefon",
    "contacts.copyViber": "Viber",
    "footer.copy": "© <span id=\"year\"></span> Fundația caritabilă Razom My Syla.",
    "footer.top": "La început",
    "action.copy": "Copiază",
    "action.copied": "Copiat",
  },
  it: {
    "brand.name": "Razom My Syla",
    "brand.type": "Fondazione benefica",
    "nav.about": "Chi siamo",
    "nav.process": "Come lavoriamo",
    "nav.activity": "Attività",
    "nav.updates": "Aggiornamenti",
    "nav.report": "Rapporti",
    "nav.donate": "Sostieni",
    "nav.directions": "Aree",
    "nav.honor": "Onore",
    "nav.documents": "Documenti",
    "nav.contacts": "Contatti",
    "hero.eyebrow": "Fondazione benefica ufficiale • Ucraina",
    "hero.title": "Sosteniamo persone, comunità e difensori dell'Ucraina",
    "hero.copy":
      "Razom My Syla organizza aiuti umanitari, logistica e sostegno per famiglie, bambini, comunità e unità militari. Le donazioni diventano consegne concrete e report aperti.",
    "hero.primary": "Sostieni la fondazione",
    "hero.secondary": "Vedi i report",
    "hero.proof.donors": "Paesi donatori",
    "hero.proof.cities": "Città aiutate",
    "stats.volunteers.label": "Volontari",
    "stats.volunteers.text": "persone coinvolte nel lavoro della fondazione.",
    "stats.logistics.label": "Logistica",
    "stats.logistics.text": "di carico ricevuto e gestito.",
    "stats.help.label": "Aiuto",
    "stats.help.text": "sfollati interni hanno ricevuto sostegno tramite i progetti della fondazione.",
    "unit.tons": "tonnellate",
    "about.label": "Chi siamo",
    "about.title": "Una voce ufficiale, calma e responsabile della solidarietà.",
    "about.p1":
      "Razom My Syla lavora come spazio di fiducia tra chi è pronto a sostenere e chi ha bisogno di aiuto. La fondazione si concentra su bisogni concreti, collaborazione con i partner e comunicazione chiara.",
    "about.p2":
      "Il sito raccoglie i fatti principali: aree di attività, foto del lavoro, indicatori trimestrali, dati bancari ufficiali e contatto rapido con la fondazione.",
    "director.label": "Direzione",
    "director.title": "Direttore della fondazione",
    "director.text": "Coordinamento di partnership, richieste ufficiali e sviluppo strategico della fondazione.",
    "process.label": "Come lavoriamo",
    "process.title": "Dalla richiesta al rapporto: un sistema di aiuto chiaro.",
    "process.text":
      "La fondazione lavora come centro di coordinamento: riceve il bisogno, conferma le risorse, organizza la logistica e mostra ai partner il risultato.",
    "process.step1.title": "Richiesta e verifica",
    "process.step1.text": "Registriamo bisogno, priorità, indirizzo, responsabili e formato dell'aiuto.",
    "process.step2.title": "Risorsa dei partner",
    "process.step2.text": "Coordiniamo donatori, carichi, acquisti o raccolta fondi per un compito concreto.",
    "process.step3.title": "Logistica e consegna",
    "process.step3.text": "Organizziamo trasporto, smistamento, distribuzione e comunicazione sul posto.",
    "process.step4.title": "Risultato pubblico",
    "process.step4.text": "Raccogliamo foto, numeri e conferme, poi li trasformiamo in una rendicontazione chiara.",
    "activity.label": "Attività",
    "activity.title": "Il lavoro della fondazione in immagini: non promesse, ma processo e risultato.",
    "activity.text":
      "Le foto da missioni, eventi e logistica mostrano la scala del lavoro: i partner vedono persone, carichi e organizzazione dell'aiuto.",
    "managed.label": "Aggiornamenti",
    "managed.title": "Nuovi post, foto e brevi report dal pannello di amministrazione.",
    "managed.text": "Questo blocco può essere aggiornato in autonomia con eventi, foto del lavoro della fondazione, link e brevi spiegazioni.",
    "managed.gallery.more": "Mostra più foto",
    "managed.gallery.less": "Mostra meno",
    "photo.main.label": "Lavoro pubblico",
    "photo.main.title": "Distribuzione di pacchi regalo e comunicazione con le persone",
    "photo.logistics": "Logistica umanitaria",
    "photo.cargo": "Preparazione e smistamento del carico",
    "photo.community": "Eventi benefici nelle comunità",
    "case.bread.label": "Sostegno quotidiano",
    "case.bread.title": "Pane, alimenti e beni essenziali per le persone",
    "case.food.label": "Consegna con partner",
    "case.food.title": "Trasferimento di aiuti alimentari alle comunità",
    "case.shelter.label": "Rifugi",
    "case.shelter.title": "Luoghi di permanenza temporanea e sostegno",
    "field.defenders.label": "Sostegno ai difensori",
    "field.defenders.title": "Aiuto a chi sostiene il Paese.",
    "field.defenders.text":
      "Incontri con partner, trasferimento di risorse e coordinamento delle richieste per unità e ospedali militari.",
    "field.mobility.label": "Aiuto mirato",
    "field.mobility.title": "Mobilità, dignità e risultato concreto.",
    "field.mobility.text":
      "Sedie a rotelle, deambulatori e altri strumenti di sostegno vengono consegnati alle persone che ne hanno bisogno qui e ora.",
    "report.label": "Rapporto trimestrale",
    "report.title": "Risultati del trimestre in numeri facili da verificare e mostrare.",
    "report.text":
      "Le informazioni dell'infografica trimestrale sono state trasformate in un blocco vivo del sito: senza testo piccolo sull'immagine, con categorie chiare e focus sul risultato.",
    "report.top.volunteers": "volontari coinvolti nel lavoro della fondazione",
    "report.top.trucks": "camion ricevuti",
    "report.top.cargo": "carico umanitario gestito",
    "report.top.idp": "sfollati interni hanno ricevuto aiuto tramite i progetti della fondazione",
    "report.received": "Ricevuto",
    "report.received.trucks": "camion, di cui 2 a destinazione militare",
    "report.received.cargo": "carico umanitario",
    "report.received.events": "eventi benefici",
    "report.received.shelter": "rifugio mantenuto dalla fondazione",
    "report.distributed": "Distribuito",
    "report.distributed.strollers": "passeggini per bambini",
    "report.distributed.wheelchairs": "sedie a rotelle",
    "report.distributed.walkers": "deambulatori per adulti",
    "report.distributed.gifts": "pacchi regalo per bambini per la Giornata dei bambini",
    "report.helped": "Aiuto fornito",
    "report.helped.shelters": "rifugi",
    "report.helped.cities": "città",
    "report.helped.idp": "persone sfollate internamente",
    "report.defense": "Aiuto ai militari",
    "report.defense.zsu": "brigate delle Forze Armate dell'Ucraina",
    "report.defense.tro": "brigate di difesa territoriale",
    "report.defense.hospitals": "ospedali militari",
    "report.defense.donors": "Paesi donatori hanno aderito all'aiuto",
    "report.note.title": "Rapporto trimestrale",
    "report.note.text":
      "I dati sono stati trasferiti dall'infografica originale della fondazione e presentati come blocco reputazionale separato del sito.",
    "donate.label": "Sostieni la fondazione",
    "donate.title": "Raccolta per il carburante delle missioni umanitarie.",
    "donate.text":
      "Il carburante significa consegna più rapida dell'aiuto: carichi, viaggi nelle comunità, distribuzione di alimenti, strumenti di mobilità e sostegno alle aree di difesa.",
    "donate.goal.label": "Obiettivo della raccolta",
    "donate.goal.value": "100 000 UAH",
    "donate.impact.one.label": "500 UAH",
    "donate.impact.one.text": "aiutano a coprire parte del carburante per una missione urbana",
    "donate.impact.two.label": "1 000 UAH",
    "donate.impact.two.text": "rafforzano la consegna di alimenti, beni o strumenti di mobilità",
    "donate.impact.three.label": "5 000 UAH",
    "donate.impact.three.text": "avvicinano una grande missione umanitaria tra comunità",
    "donate.open": "Apri il salvadanaio Monobank",
    "donate.copyCard": "Copia il numero carta",
    "donate.copyLink": "Copia il link",
    "donate.card.label": "Numero della carta del salvadanaio",
    "donate.qr": "Scansiona il QR o apri il link al salvadanaio.",
    "directions.label": "Aree di lavoro",
    "directions.title": "Aree in cui la fondazione opera in modo sistematico e chiaro per i partner.",
    "direction.humanitarian.label": "Aiuto umanitario",
    "direction.humanitarian.title": "Sostegno a persone e famiglie",
    "direction.humanitarian.text": "Raccolte mirate, bisogni essenziali, aiuto in situazioni di crisi e coordinamento delle richieste.",
    "direction.communities.label": "Comunità",
    "direction.communities.title": "Iniziative locali",
    "direction.communities.text": "Progetti per comunità, programmi di partnership e sostegno a servizi sociali importanti.",
    "direction.partners.label": "Partnership",
    "direction.partners.title": "Imprese e mecenati",
    "direction.partners.text": "Comunicazione ufficiale, campagne congiunte, beneficenza aziendale e accordi trasparenti.",
    "direction.reports.label": "Rendicontazione",
    "direction.reports.title": "Fiducia attraverso i fatti",
    "direction.reports.text": "Risultati pubblici, conferme delle spese e una storia chiara per ogni progetto importante.",
    "honor.label": "Albo d'onore",
    "honor.title": "Gratitudine a persone e partner grazie ai quali l'aiuto arriva a destinazione.",
    "honor.text":
      "La gratitudine pubblica è legata ad aree reali di lavoro: volontari, partner, logistica, strutture mediche, ospedali e donatori internazionali.",
    "honor.partners.label": "Partner donatori",
    "honor.partners.title": "Partner che forniscono risorse",
    "honor.partners.text": "Nova Ukraine, benefattori internazionali e partner locali aiutano a coprire bisogni di carichi, alimenti, carburante e attrezzature.",
    "honor.volunteers.label": "Volontari",
    "honor.volunteers.title": "80 persone nel lavoro della fondazione",
    "honor.volunteers.text": "Il team che organizza distribuzioni, comunicazione, smistamento e sostegno alle persone sul posto.",
    "honor.defenders.label": "Difensori e medici",
    "honor.defenders.title": "Rispetto per il servizio",
    "honor.defenders.text": "Una linea separata di gratitudine per chi sostiene il Paese e per chi aiuta a salvare vite.",
    "honor.logistics.label": "Squadre logistiche",
    "honor.logistics.title": "500+ tonnellate di aiuto",
    "honor.logistics.text": "Persone alla guida, nei magazzini e nel coordinamento, grazie alle quali gli aiuti si muovono rapidamente.",
    "honor.note.title": "Ringraziamenti che possono crescere",
    "honor.note.text":
      "I gruppi principali sono già indicati. Dopo l'approvazione si potranno aggiungere nomi, loghi aziendali e organizzazioni senza cambiare la struttura del sito.",
    "requisites.label": "Trasparenza",
    "requisites.title": "Dati bancari ufficiali della fondazione per partner e donatori.",
    "requisites.recipient": "Beneficiario",
    "requisites.bank": "Banca",
    "requisites.account": "Conto",
    "requisites.purpose": "Causale del pagamento",
    "requisites.purposeText": "Aiuto benefico o sostegno alla raccolta per il carburante",
    "documents.label": "Documenti",
    "documents.title": "File che aiutano i partner a verificare rapidamente la fondazione.",
    "documents.text": "Materiali di registrazione, dati bancari e infografica di report sono raccolti in un unico posto.",
    "documents.verify.label": "Verifica ufficiale",
    "documents.verify.title": "Dati chiave della fondazione in un unico blocco.",
    "documents.verify.text": "Qui sono raccolti dati bancari, codice di registrazione e file che i partner di solito richiedono prima di un trasferimento o collaborazione.",
    "documents.verify.registry": "Codice di registrazione",
    "documents.verify.iban": "IBAN UAH",
    "documents.verify.bank": "Banca",
    "documents.verify.email": "Email della fondazione",
    "documents.verify.openRegistration": "Registrazione",
    "documents.verify.openBank": "Dati bancari",
    "documents.verify.toReport": "Report",
    "documents.registration.label": "PDF",
    "documents.registration.title": "Documenti di registrazione",
    "documents.registration.text": "File per una prima verifica dello status ufficiale dell'organizzazione.",
    "documents.bank.label": "PDF",
    "documents.bank.title": "Dati bancari",
    "documents.bank.text": "File ufficiale con dati per bonifici e pagamenti dei partner.",
    "documents.report.label": "JPG",
    "documents.report.title": "Infografica trimestrale",
    "documents.report.text": "Il report visivo originale da cui sono stati trasferiti gli indicatori sul sito.",
    "faq.label": "In breve",
    "faq.title": "Tre risposte utili prima di donare.",
    "faq.official.q": "La fondazione è ufficiale?",
    "faq.official.a": "Sì. Il sito indica dati bancari ufficiali, codice di registrazione, banca e IBAN per i bonifici.",
    "faq.where.q": "Dove va il sostegno?",
    "faq.where.a":
      "A carichi umanitari, eventi benefici, sostegno agli sfollati interni, rifugi, strumenti di mobilità e aiuto alle aree di difesa.",
    "faq.result.q": "Come vedere il risultato?",
    "faq.result.a": "La sezione dei rapporti contiene dati trimestrali e foto reali del lavoro sul campo, consegne di aiuti ed eventi con partner.",
    "contacts.label": "Contatti",
    "contacts.title": "Per partner, donatori e richieste ufficiali.",
    "contacts.direct": "Contatto diretto",
    "contacts.connection": "Contatto con la fondazione",
    "contacts.country": "Ucraina",
    "contacts.official": "Ufficiale",
    "contacts.requisites": "Richiesta dati bancari",
    "contacts.text": "Invia un messaggio con il tema della collaborazione, l'importo o il formato dell'aiuto. Il team della fondazione preparerà risposta e documenti.",
    "contacts.request": "Richiedi i dati",
    "contacts.quick": "Contatto rapido:",
    "contacts.copyEmail": "Email",
    "contacts.copyTelegram": "Telegram",
    "contacts.copyPhone": "Telefono",
    "contacts.copyViber": "Viber",
    "footer.copy": "© <span id=\"year\"></span> Fondazione benefica Razom My Syla.",
    "footer.top": "All'inizio",
    "action.copy": "Copia",
    "action.copied": "Copiato",
  },
};

const getTranslation = (key) => translations[currentLanguage]?.[key] || translations.uk[key] || "";
let currentLanguage = localStorage.getItem("siteLanguage") || "uk";

const applyLanguage = (language) => {
  currentLanguage = translations[language] ? language : "uk";
  localStorage.setItem("siteLanguage", currentLanguage);
  document.documentElement.lang = currentLanguage;

  translatableNodes.forEach((node) => {
    const key = node.getAttribute("data-i18n");
    const value = getTranslation(key);
    if (!value) return;
    node.innerHTML = value;
  });

  langButtons.forEach((button) => {
    const isActive = button.getAttribute("data-lang-switch") === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (year) {
    year.textContent = new Date().getFullYear();
  }
};

if (year) {
  year.textContent = new Date().getFullYear();
}

applyLanguage(currentLanguage);

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.getAttribute("data-lang-switch"));
    if (typeof renderManagedGallery === "function") {
      renderManagedGallery();
    }
  });
});

const setHeaderState = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const isOpen = body.classList.toggle("nav-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    body.classList.remove("nav-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const copyToClipboard = async (value) => {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(value);
      return true;
    } catch {
      // Some embedded browsers deny clipboard writes; fall back to the classic selection flow.
    }
  }

  try {
    const field = document.createElement("textarea");
    field.value = value;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.left = "-9999px";
    document.body.appendChild(field);
    field.select();
    const copied = document.execCommand("copy");
    field.remove();
    return copied;
  } catch {
    return false;
  }
};

document.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-copy]");
  if (!button) return;

  const value = button.getAttribute("data-copy");
  if (!value) return;

  const key = button.getAttribute("data-i18n");
  const originalText = key ? getTranslation(key) : button.textContent;
  try {
    const copied = await copyToClipboard(value);
    button.textContent = copied ? getTranslation("action.copied") : getTranslation("action.copy");
  } catch {
    button.textContent = getTranslation("action.copy");
  }

  window.setTimeout(() => {
    button.textContent = originalText;
  }, 1800);
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (reducedMotion || !("IntersectionObserver" in window)) {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
} else {
  revealTargets.forEach((target, index) => {
    target.classList.add("reveal-target");
    target.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 70}ms`);
  });

  const revealVisibleTargets = () => {
    revealTargets.forEach((target) => {
      if (target.classList.contains("is-visible")) return;
      const rect = target.getBoundingClientRect();
      const entersViewport = rect.top < window.innerHeight * 0.88 && rect.bottom > 0;
      if (entersViewport) {
        target.classList.add("is-visible");
      }
    });
  };

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.14,
    }
  );

  revealTargets.forEach((target) => revealObserver.observe(target));
  window.addEventListener("scroll", revealVisibleTargets, { passive: true });
  window.addEventListener("resize", revealVisibleTargets);
  window.setTimeout(revealVisibleTargets, 120);
}

const managedNotice = document.querySelector("[data-managed-notice]");
const managedUpdatesSection = document.querySelector("[data-managed-updates-section]");
const managedUpdates = document.querySelector("[data-managed-updates]");
const managedGallery = document.querySelector("[data-managed-gallery]");
const managedGalleryMore = document.querySelector("[data-managed-gallery-more]");
const managedHonor = document.querySelector("[data-managed-honor]");
const honorFeaturedGrid = document.querySelector("[data-honor-featured-grid]");
const honorBoardGrid = document.querySelector("[data-honor-board-grid]");
const honorBoardStatus = document.querySelector("[data-honor-board-status]");
const honorFilterButtons = document.querySelectorAll("[data-honor-filter]");
const honorSearch = document.querySelector("[data-honor-search]");
const managedGalleryLimit = 15;
let managedGalleryExpanded = false;
let managedGalleryItems = [];
let honorBoardItems = [];
let activeHonorCategory = "all";
let honorSearchTerm = "";

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const isSafeUrl = (value = "") => {
  if (!value) return false;
  return /^(https?:\/\/|assets\/|\/|#)/i.test(value);
};

const isVideoItem = (item) => item?.mediaType === "video" || /\.(mp4|webm|mov|avi)(?:[?#].*)?$/i.test(item?.image || "");

const visibleItems = (items) =>
  Array.isArray(items) ? items.filter((item) => item && item.visible !== false && !isVideoItem(item)) : [];

const linkMarkup = (item) => {
  if (!item.linkText || !isSafeUrl(item.linkUrl)) return "";
  const external = /^https?:\/\//i.test(item.linkUrl) ? ' target="_blank" rel="noopener"' : "";
  return `<a href="${escapeHtml(item.linkUrl)}"${external}>${escapeHtml(item.linkText)}</a>`;
};

const mediaMarkup = (item, className = "") => {
  const image = isSafeUrl(item.image) ? item.image : "assets/logo-razom.png";
  const poster = isSafeUrl(item.poster) ? ` poster="${escapeHtml(item.poster)}"` : "";
  const alt = escapeHtml(item.alt || item.title || "Фото фонду");
  if (isVideoItem(item) && isSafeUrl(item.image)) {
    return `<video class="${className}" src="${escapeHtml(image)}" aria-label="${alt}" controls muted playsinline preload="metadata"${poster}></video>`;
  }
  return `<img class="${className}" src="${escapeHtml(image)}" alt="${alt}" loading="lazy" />`;
};

const galleryCardMarkup = (item) => `
  <figure class="managed-gallery-card">
    ${mediaMarkup(item)}
    <figcaption>
      <span>${escapeHtml(item.label || item.date || "Фото")}</span>
      <strong>${escapeHtml(item.title)}</strong>
      <p>${escapeHtml(item.text)}</p>
      ${linkMarkup(item)}
    </figcaption>
  </figure>
`;

const renderManagedGallery = () => {
  if (!managedGallery) return;

  const items = managedGalleryExpanded ? managedGalleryItems : managedGalleryItems.slice(0, managedGalleryLimit);
  managedGallery.innerHTML = items.map(galleryCardMarkup).join("");

  if (managedGalleryMore) {
    const hasMore = managedGalleryItems.length > managedGalleryLimit;
    managedGalleryMore.hidden = !hasMore;
    managedGalleryMore.setAttribute("aria-expanded", String(managedGalleryExpanded));
    managedGalleryMore.textContent = getTranslation(managedGalleryExpanded ? "managed.gallery.less" : "managed.gallery.more");
  }
};

if (managedGalleryMore) {
  managedGalleryMore.addEventListener("click", () => {
    managedGalleryExpanded = !managedGalleryExpanded;
    renderManagedGallery();
    if (!managedGalleryExpanded) {
      managedUpdatesSection?.scrollIntoView({ block: "start", behavior: reducedMotion ? "auto" : "smooth" });
    }
  });
}

const honorCategoryLabels = {
  team: "Команда",
  volunteer: "Волонтери",
  partner: "Партнери",
  donor: "Донори",
  logistics: "Логістика",
  medical: "Медицина",
  community: "Громади",
};

const normalizeText = (value = "") => String(value).toLocaleLowerCase("uk-UA").trim();

const getInitials = (name = "") => {
  const initials = String(name)
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join("")
    .toLocaleUpperCase("uk-UA");
  return initials || "РС";
};

const visibleHonorItems = (items) =>
  Array.isArray(items)
    ? items.filter((item) => item && item.visible !== false && !isVideoItem({ image: item.photo || "" }))
    : [];

const honorPersonMediaMarkup = (item) => {
  const photo = String(item.photo || "").trim();
  const name = item.name || "Учасник фонду";
  if (photo && isSafeUrl(photo) && !isVideoItem({ image: photo })) {
    return `<img src="${escapeHtml(photo)}" alt="${escapeHtml(name)}" loading="lazy" />`;
  }
  return `<div class="honor-person-placeholder" aria-hidden="true">${escapeHtml(getInitials(name))}</div>`;
};

const honorPersonCardMarkup = (item) => {
  const role = item.role || honorCategoryLabels[item.category] || "Учасник";
  const city = item.city ? `<span class="honor-person-city">${escapeHtml(item.city)}</span>` : "";
  const featured = item.featured ? " is-featured" : "";
  const category = escapeHtml(item.category || "other");

  return `
    <article class="honor-person-card${featured}" data-category="${category}">
      <div class="honor-person-media">
        ${honorPersonMediaMarkup(item)}
      </div>
      <div class="honor-person-body">
        <span class="honor-person-role">${escapeHtml(role)}</span>
        <h3>${escapeHtml(item.name || "Учасник фонду")}</h3>
        ${city}
        <strong>${escapeHtml(item.contribution || "Допомога фонду та громаді.")}</strong>
        <p>${escapeHtml(item.description || "Дякуємо за участь у роботі фонду та підтримку людей.")}</p>
      </div>
    </article>
  `;
};

const renderHonorFeatured = () => {
  if (!honorFeaturedGrid) return;

  const featured = honorBoardItems.filter((item) => item.featured).slice(0, 8);
  if (!featured.length) {
    honorFeaturedGrid.innerHTML = `<p class="honor-board-message">Дошка пошани готується до публікації.</p>`;
    return;
  }

  honorFeaturedGrid.innerHTML = featured.map(honorPersonCardMarkup).join("");
};

const honorMatchesSearch = (item) => {
  if (!honorSearchTerm) return true;
  const haystack = normalizeText([item.name, item.role, item.city, item.contribution, item.description].join(" "));
  return haystack.includes(honorSearchTerm);
};

const syncHonorFilterButtons = () => {
  honorFilterButtons.forEach((filterButton) => {
    const isActive = (filterButton.getAttribute("data-honor-filter") || "all") === activeHonorCategory;
    filterButton.classList.toggle("is-active", isActive);
    filterButton.setAttribute("aria-pressed", String(isActive));
  });
};

const renderHonorBoard = () => {
  if (!honorBoardGrid) return;

  syncHonorFilterButtons();

  const filtered = honorBoardItems.filter((item) => {
    const categoryMatches = activeHonorCategory === "all" || item.category === activeHonorCategory;
    return categoryMatches && honorMatchesSearch(item);
  });

  if (honorBoardStatus) {
    honorBoardStatus.textContent = filtered.length
      ? `Показано записів: ${filtered.length}`
      : "За цим пошуком або фільтром записів не знайдено.";
  }

  honorBoardGrid.innerHTML = filtered.length
    ? filtered.map(honorPersonCardMarkup).join("")
    : `<p class="honor-board-message">Спробуйте інший фільтр або пошуковий запит.</p>`;
};

const renderHonorError = () => {
  if (honorFeaturedGrid) {
    honorFeaturedGrid.innerHTML = `<p class="honor-board-message">Не вдалося завантажити дошку пошани. Спробуйте оновити сторінку пізніше.</p>`;
  }
  if (honorBoardStatus) {
    honorBoardStatus.textContent = "Не вдалося завантажити записи дошки пошани.";
  }
  if (honorBoardGrid) {
    honorBoardGrid.innerHTML = `<p class="honor-board-message">Дані тимчасово недоступні.</p>`;
  }
};

const renderHonorContent = (items = []) => {
  honorBoardItems = visibleHonorItems(items);
  renderHonorFeatured();
  renderHonorBoard();
};

honorFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeHonorCategory = button.getAttribute("data-honor-filter") || "all";
    renderHonorBoard();
  });
});

if (honorSearch) {
  honorSearch.addEventListener("input", () => {
    honorSearchTerm = normalizeText(honorSearch.value);
    renderHonorBoard();
  });
}

const renderManagedContent = (content = {}) => {
  const notice = content.notice || {};
  if (managedNotice) {
    const shouldShow = notice.enabled && (notice.title || notice.text);
    managedNotice.hidden = !shouldShow;
    if (shouldShow) {
      const button = notice.buttonText && isSafeUrl(notice.buttonUrl)
        ? `<a href="${escapeHtml(notice.buttonUrl)}" target="_blank" rel="noopener">${escapeHtml(notice.buttonText)}</a>`
        : "";
      managedNotice.innerHTML = `
        <span>${escapeHtml(notice.label || "Актуально")}</span>
        <strong>${escapeHtml(notice.title)}</strong>
        <p>${escapeHtml(notice.text)}</p>
        ${button}
      `;
    }
  }

  const updates = visibleItems(content.updates);
  const gallery = visibleItems(content.gallery);
  if (managedUpdatesSection) {
    managedUpdatesSection.hidden = updates.length === 0 && gallery.length === 0;
  }

  if (managedUpdates) {
    managedUpdates.innerHTML = updates
      .map(
        (item) => `
          <article class="managed-update-card">
            ${mediaMarkup(item)}
            <div>
              <span>${escapeHtml(item.label || item.date || "Оновлення")}</span>
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.text)}</p>
              ${linkMarkup(item)}
            </div>
          </article>
        `
      )
      .join("");
  }

  managedGalleryItems = gallery;
  managedGalleryExpanded = false;
  renderManagedGallery();

  const honor = visibleItems(content.honor);
  if (managedHonor) {
    managedHonor.hidden = honor.length === 0;
    managedHonor.innerHTML = honor
      .map(
        (item) => `
          <article class="honor-card managed-honor-card">
            ${mediaMarkup(item)}
            <div>
              <span>${escapeHtml(item.label || "Подяка")}</span>
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.text)}</p>
              ${linkMarkup(item)}
            </div>
          </article>
        `
      )
      .join("");
  }
};

fetch("/data/public-content.json?cache=" + Date.now(), { cache: "no-store" })
  .then((response) => (response.ok ? response.json() : null))
  .then((content) => {
    if (content) renderManagedContent(content);
  })
  .catch(() => {});

if (honorFeaturedGrid || honorBoardGrid) {
  fetch("/data/honor-board.json?cache=" + Date.now(), { cache: "no-store" })
    .then((response) => (response.ok ? response.json() : null))
    .then((items) => {
      if (Array.isArray(items)) {
        renderHonorContent(items);
      } else {
        renderHonorError();
      }
    })
    .catch(renderHonorError);
}
