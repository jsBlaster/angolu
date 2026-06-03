// ── LANG MODULE ─────────────────────────────────────────────────────────────

const SUPPORTED_LANGS = ['it', 'en'];
const browserLang = navigator.language.slice(0, 2);
const DEFAULT_LANG = SUPPORTED_LANGS.includes(browserLang) ? browserLang : 'it';

let currentLang = localStorage.getItem('lang') || DEFAULT_LANG;
let currentCategory = null;

const UI_STRINGS = {
  backLink:   { it: 'homepage',                                                    en: 'home' },
  vegetarian: { it: '🍃 vegetariano',                                              en: '🍃 vegetarian' },
  frozen:     { it: '* prodotto congelato all\'origine',                           en: '* frozen at source' },
  allergies:  { it: 'Per eventuali intolleranze alimentari, rivolgersi al personale.',
                en: 'Please inform staff of any food allergies or intolerances.' },
};

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  renderUI();
  rerenderMenu();
}

function renderUI() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (UI_STRINGS[key]) el.textContent = UI_STRINGS[key][currentLang];
  });
  const toggle = document.getElementById('lang-toggle');
  if (toggle) {
    const flags = { it: '🇮🇹', en: '🇬🇧' };
    const strong = document.createElement('strong');
    strong.textContent = currentLang.toUpperCase();
    toggle.textContent = flags[currentLang] + ' ';
    toggle.appendChild(strong);
  }
}

function initLangToggle() {
  document.documentElement.lang = currentLang;

  const btn = document.createElement('button');
  btn.id = 'lang-toggle';
  btn.setAttribute('aria-label', 'Switch language');
  btn.addEventListener('click', () => setLang(currentLang === 'it' ? 'en' : 'it'));

  const nav = document.querySelector('.header-nav');
  const wrapper = document.querySelector('.lang-toggle-wrapper');
  if (nav) {
    nav.appendChild(btn);
  } else if (wrapper) {
    wrapper.appendChild(btn);
  }

  renderUI();
}

// ── MENU RENDERING ───────────────────────────────────────────────────────────

function renderMenu(category) {
  currentCategory = category;
  const container = document.getElementById('menu-container');
  const data = MENU[category];
  if (!data || !container) return;

  data.sections.forEach(section => {
    const sectionEl = document.createElement('section');
    sectionEl.className = 'menu-section';

    const titleEl = document.createElement('h2');
    titleEl.className = 'section-title';
    titleEl.textContent = section.title !== null && typeof section.title === 'object'
      ? (section.title[currentLang] || section.title.it)
      : section.title;
    sectionEl.appendChild(titleEl);

    const listEl = document.createElement('ul');
    listEl.className = 'item-list';

    section.items.forEach(item => {
      const itemEl = document.createElement('li');
      itemEl.className = 'menu-item';

      const headerEl = document.createElement('div');
      headerEl.className = 'item-header';

      const nameEl = document.createElement('span');
      nameEl.className = 'item-name';
      nameEl.textContent = item.name !== null && typeof item.name === 'object'
        ? (item.name[currentLang] || item.name.it)
        : item.name;

      const priceEl = document.createElement('span');
      priceEl.className = 'item-price';
      priceEl.textContent = item.price + ' €';

      headerEl.appendChild(nameEl);
      headerEl.appendChild(priceEl);
      itemEl.appendChild(headerEl);

      const desc = item.description !== null && typeof item.description === 'object'
        ? (item.description[currentLang] || item.description.it)
        : item.description;
      if (desc) {
        const descEl = document.createElement('p');
        descEl.className = 'item-desc';
        descEl.textContent = desc;
        itemEl.appendChild(descEl);
      }

      listEl.appendChild(itemEl);
    });

    sectionEl.appendChild(listEl);
    container.appendChild(sectionEl);
  });
}

function rerenderMenu() {
  if (!currentCategory) return;
  const container = document.getElementById('menu-container');
  if (!container) return;
  container.textContent = '';
  renderMenu(currentCategory);
}
