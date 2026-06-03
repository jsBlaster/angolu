# i18n Language Switching — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Italian/English language switching to the Angolu menu website — browser language as default, `localStorage` persistence, flag+text pill toggle in the header of every page, live re-render with no page reload.

**Architecture:** A lang module at the top of `app.js` owns `currentLang`, `setLang()`, `renderUI()`, and `initLangToggle()`. `menu-data.js` is restructured so every translatable string is `{ it: "...", en: "..." }`. A `UI_STRINGS` object in `app.js` covers the handful of static HTML strings (back link, legend, allergy notice). The toggle button is injected by JS into the DOM on load, so HTML changes are minimal.

**Tech Stack:** Vanilla JS, HTML, CSS — no build system, no framework, no test runner. Verification is done in the browser console and by visual inspection.

---

## File Map

| File | Change |
|---|---|
| `app.js` | Add lang module (`currentLang`, `setLang`, `renderUI`, `initLangToggle`, `UI_STRINGS`); update `renderMenu` to read `[currentLang]`; add `rerenderMenu` |
| `menu-data.js` | All translatable strings → `{ it, en }` objects |
| `style.css` | Add `#lang-toggle` and `.lang-toggle-wrapper` styles |
| `index.html` | Add `.lang-toggle-wrapper` div; fix broken script refs; load `app.js` |
| `cibo.html` | Add `data-i18n` on back link, legend spans, allergy notice |
| `drink.html` | Add `data-i18n` on back link |
| `cantina.html` | Add `data-i18n` on back link |
| `caffetteria.html` | Add `data-i18n` on back link |

---

## Task 1: Add lang module to app.js

**Files:**
- Modify: `app.js` (prepend to existing file)

- [ ] **Step 1: Prepend the lang module to `app.js`**

Replace the entire contents of `app.js` with the following (the existing `renderMenu` function is preserved at the bottom):

```js
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
    titleEl.textContent = section.title;
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
      nameEl.textContent = item.name;

      const priceEl = document.createElement('span');
      priceEl.className = 'item-price';
      priceEl.textContent = item.price + ' €';

      headerEl.appendChild(nameEl);
      headerEl.appendChild(priceEl);
      itemEl.appendChild(headerEl);

      if (item.description) {
        const descEl = document.createElement('p');
        descEl.className = 'item-desc';
        descEl.textContent = item.description;
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
```

- [ ] **Step 2: Verify the site still works**

Open `cibo.html` in a browser. The food menu should render exactly as before (still in Italian). Open the browser console — no errors should appear. Check:
```
> currentLang
"it"   // or "en" if your browser is set to English
> typeof setLang
"function"
```

- [ ] **Step 3: Commit**

```bash
git add app.js
git commit -m "feat: add lang module and bilingual rendering scaffold to app.js"
```

---

## Task 2: Update renderMenu() to read bilingual data

**Files:**
- Modify: `app.js` — the `renderMenu` function inside the file from Task 1

The current `renderMenu` reads `item.name` (a plain string). After Task 3 converts `menu-data.js`, those become `{ it, en }` objects. Update `renderMenu` now to read `[currentLang]` with a plain-string fallback so the transition is safe.

- [ ] **Step 1: Replace the renderMenu function body**

Find the `renderMenu` function in `app.js` and update only these three lines inside it:

```js
// BEFORE:
titleEl.textContent = section.title;
nameEl.textContent = item.name;
descEl.textContent = item.description;

// AFTER:
titleEl.textContent = typeof section.title === 'object' ? (section.title[currentLang] || section.title.it) : section.title;
nameEl.textContent  = typeof item.name === 'object'     ? (item.name[currentLang]        || item.name.it)        : item.name;
// (description is handled in the if-block below)
```

And inside the `if (item.description)` block:

```js
// BEFORE:
descEl.textContent = item.description;

// AFTER (replace the entire if-block):
const desc = typeof item.description === 'object' ? (item.description[currentLang] || item.description.it) : item.description;
if (desc) {
  const descEl = document.createElement('p');
  descEl.className = 'item-desc';
  descEl.textContent = desc;
  itemEl.appendChild(descEl);
}
```

The full updated `renderMenu` function looks like this:

```js
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
    titleEl.textContent = typeof section.title === 'object'
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
      nameEl.textContent = typeof item.name === 'object'
        ? (item.name[currentLang] || item.name.it)
        : item.name;

      const priceEl = document.createElement('span');
      priceEl.className = 'item-price';
      priceEl.textContent = item.price + ' €';

      headerEl.appendChild(nameEl);
      headerEl.appendChild(priceEl);
      itemEl.appendChild(headerEl);

      const desc = typeof item.description === 'object'
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
```

- [ ] **Step 2: Verify — menu still renders in Italian**

Open `cibo.html`. Menu renders exactly as before. No console errors.

- [ ] **Step 3: Verify — manual lang switch works with old data**

Open the browser console and run:
```js
setLang('en'); // sections still show in Italian (data not yet converted) — that's expected
setLang('it'); // back to Italian
```
No errors. The function runs cleanly.

- [ ] **Step 4: Commit**

```bash
git add app.js
git commit -m "feat: update renderMenu to read bilingual { it, en } data"
```

---

## Task 3: Convert menu-data.js to bilingual format

**Files:**
- Modify: `menu-data.js` — full replacement

Replace the entire contents of `menu-data.js` with the following:

- [ ] **Step 1: Replace menu-data.js**

```js
const MENU = {
  FOOD: {
    label: "Food",
    sections: [
      {
        title: { it: "Piatti estivi", en: "Summer dishes" },
        items: [
          {
            name:        { it: "Tagliere misto",           en: "Mixed charcuterie board" },
            description: { it: "Selezione di salumi e formaggi bergamaschi",
                           en: "Selection of Bergamo cured meats and cheeses" },
            price: "20.00",
          },
          {
            name:        { it: "Crudo di Parma e melone",  en: "Parma ham & melon" },
            description: { it: "", en: "" },
            price: "15.00",
          },
          {
            name:        { it: "Tartare manzo",             en: "Beef tartare" },
            description: { it: "Tuorlo e senape al miele", en: "Egg yolk and honey mustard" },
            price: "15.00",
          },
          {
            name:        { it: "Tartare tonno 🐟",          en: "Tuna tartare 🐟" },
            description: { it: "Porri e olio al limone",   en: "Leeks and lemon oil" },
            price: "16.00",
          },
          {
            name:        { it: "Vitello tonnato",           en: "Vitello tonnato" },
            description: { it: "", en: "" },
            price: "14.00",
          },
          {
            name:        { it: "Roast-beef",                en: "Roast beef" },
            description: { it: "Rucola e grana padano",    en: "Rocket and Grana Padano" },
            price: "14.00",
          },
          {
            name:        { it: "Bruschetta pomodori e stracciatella 🍃",
                           en: "Bruschetta with tomatoes and stracciatella 🍃" },
            description: { it: "", en: "" },
            price: "12.00",
          },
          {
            name:        { it: "Provola e verdure alla brace 🍃",
                           en: "Grilled provola and vegetables 🍃" },
            description: { it: "", en: "" },
            price: "10.00",
          },
          {
            name:        { it: "Caesar salad",              en: "Caesar salad" },
            description: { it: "Pollo alla piastra, pomodori, grana, crostini di pane e salsa yogurt",
                           en: "Grilled chicken, tomatoes, Grana Padano, croutons and yogurt dressing" },
            price: "12.00",
          },
        ],
      },

      {
        title: { it: "Primi piatti di pasta fresca", en: "Fresh pasta" },
        items: [
          {
            name:        { it: "Casoncelli",                en: "Casoncelli" },
            description: { it: "", en: "" },
            price: "13.00",
          },
          {
            name:        { it: "Scarpinocc 🍃",              en: "Scarpinocc 🍃" },
            description: { it: "", en: "" },
            price: "12.00",
          },
          {
            name:        { it: "Gnocchi al ragù di polpo 🐟", en: "Gnocchi with octopus ragù 🐟" },
            description: { it: "", en: "" },
            price: "13.00",
          },
        ],
      },

      {
        title: { it: "Secondi piatti + patatine*", en: "Main courses + fries*" },
        items: [
          {
            name:        { it: "Spiedini di carne (2)",       en: "Meat skewers (2)" },
            description: { it: "", en: "" },
            price: "12.00",
          },
          {
            name:        { it: "Salamella",                   en: "Salamella" },
            description: { it: "", en: "" },
            price: "10.00",
          },
          {
            name:        { it: "Tagliata di bovino adulto",   en: "Beef tagliata" },
            description: { it: "", en: "" },
            price: "22.00",
          },
          {
            name:        { it: "Grigliata mista",             en: "Mixed grill" },
            description: { it: "Spiedini, salamella e tagliata",
                           en: "Skewers, salamella and tagliata" },
            price: "24.00",
          },
        ],
      },

      {
        title: { it: "Contorni", en: "Sides" },
        items: [
          {
            name:        { it: "Patatine fritte* 🍃",         en: "French fries* 🍃" },
            description: { it: "", en: "" },
            price: "6.00",
          },
          {
            name:        { it: "Verdure grigliate 🍃",         en: "Grilled vegetables 🍃" },
            description: { it: "", en: "" },
            price: "6.00",
          },
          {
            name:        { it: "Insalata mista 🍃",            en: "Mixed salad 🍃" },
            description: { it: "", en: "" },
            price: "5.00",
          },
        ],
      },

      {
        title: { it: "Polenta", en: "Polenta" },
        items: [
          {
            name:        { it: "Polenta liscia 🍃",            en: "Plain polenta 🍃" },
            description: { it: "", en: "" },
            price: "6.00",
          },
          {
            name:        { it: "Polenta e formaggi 🍃",        en: "Polenta with cheese 🍃" },
            description: { it: "", en: "" },
            price: "10.00",
          },
          {
            name:        { it: "Polenta e porcini 🍃",         en: "Polenta with porcini mushrooms 🍃" },
            description: { it: "", en: "" },
            price: "12.00",
          },
        ],
      },

      {
        title: { it: "Burger Gourmet + patatine*", en: "Gourmet burgers + fries*" },
        items: [
          {
            name:        { it: "Panino con polpo 🐟",          en: "Octopus sandwich 🐟" },
            description: { it: "Polpo, stracciatella, pesto di basilico",
                           en: "Octopus, stracciatella, basil pesto" },
            price: "14.00",
          },
          {
            name:        { it: "Pulled Chicken",               en: "Pulled Chicken" },
            description: { it: "Straccetti di pollo, insalata coleslaw e maionese al limone",
                           en: "Shredded chicken, coleslaw and lemon mayo" },
            price: "12.00",
          },
          {
            name:        { it: "Hamburger",                    en: "Hamburger" },
            description: { it: "Hamburger di manzo, cheddar, pomodoro, bacon croccante, insalata",
                           en: "Beef patty, cheddar, tomato, crispy bacon, lettuce" },
            price: "13.00",
          },
          {
            name:        { it: "Pulled Pork",                  en: "Pulled Pork" },
            description: { it: "Carne sfilacciata di maiale, jalapeno, cipolla caramellata, salsa BBQ",
                           en: "Pulled pork, jalapeño, caramelised onion, BBQ sauce" },
            price: "13.00",
          },
          {
            name:        { it: "Dell'Angolù",                  en: "Dell'Angolù" },
            description: { it: "Salamella, peperoni, cipolle grigliate e maionese",
                           en: "Salamella, peppers, grilled onions and mayo" },
            price: "12.00",
          },
          {
            name:        { it: "L'Ortolano 🍃",                en: "L'Ortolano 🍃" },
            description: { it: "Mozzarella, verdure grigliate, pomodoro e origano",
                           en: "Mozzarella, grilled vegetables, tomato and oregano" },
            price: "10.00",
          },
        ],
      },

      {
        title: { it: "Dolci", en: "Desserts" },
        items: [
          {
            name:        { it: "Cheesecake frutti di bosco",                    en: "Mixed berry cheesecake" },
            description: { it: "", en: "" },
            price: "6.00",
          },
          {
            name:        { it: "Cheesecake cioccolato bianco e pistacchio",
                           en: "White chocolate and pistachio cheesecake" },
            description: { it: "", en: "" },
            price: "6.00",
          },
          {
            name:        { it: "Dolce del giorno",             en: "Dessert of the day" },
            description: { it: "", en: "" },
            price: "6.00",
          },
        ],
      },
    ],
  },

  DRINK: {
    label: "Drink",
    sections: [
      {
        title: { it: "Birra", en: "Beer" },
        items: [
          {
            name:        { it: "Theresianer Lager",             en: "Theresianer Lager" },
            description: { it: "Alla spina — 4,8% - 40cl",     en: "On tap — 4.8% - 40cl" },
            price: "5.00",
          },
          {
            name:        { it: "Concarena - Barbabianca",       en: "Concarena - Barbabianca" },
            description: { it: "Birra artigianale weiss locale - 5,2% - 40cl",
                           en: "Local craft weiss beer - 5.2% - 40cl" },
            price: "6.00",
          },
          {
            name:        { it: "Via Priula - Bacio",            en: "Via Priula - Bacio" },
            description: { it: "Birra artigianale blanche, fresca e agrumata - IPA gluten free 4,9% - 40cl",
                           en: "Craft blanche beer, fresh and citrusy - gluten free IPA 4.9% - 40cl" },
            price: "6.00",
          },
          {
            name:        { it: "Via Priula - Dubek",            en: "Via Priula - Dubek" },
            description: { it: "Birra artigianale rossa, con note di malto e caramello - 7,5% - 40cl",
                           en: "Craft red beer, with malt and caramel notes - 7.5% - 40cl" },
            price: "6.00",
          },
          {
            name:        { it: "Concarena - Roccia",            en: "Concarena - Roccia" },
            description: { it: "Strong Lager - 7,5% - 40cl",   en: "Strong Lager - 7.5% - 40cl" },
            price: "6.00",
          },
          {
            name:        { it: "Ichnusa non filtrata",          en: "Ichnusa unfiltered" },
            description: { it: "In bottiglia - 33cl",          en: "Bottled - 33cl" },
            price: "4.50",
          },
        ],
      },

      {
        title: { it: "Drink", en: "Cocktails" },
        items: [
          {
            name:        { it: "Spritz",                        en: "Spritz" },
            description: { it: "Aperol, Campari o Select, prosecco, soda, fetta d'arancia",
                           en: "Aperol, Campari or Select, prosecco, soda, orange slice" },
            price: "7.00",
          },
          {
            name:        { it: "Hugo St-Germain Spritz",        en: "Hugo St-Germain Spritz" },
            description: { it: "St-Germain, prosecco, soda, menta fresca e lime",
                           en: "St-Germain, prosecco, soda, fresh mint and lime" },
            price: "8.00",
          },
          {
            name:        { it: "Paloma",                        en: "Paloma" },
            description: { it: "Tequila Cazadores Blanco, succo di lime e soda al pompelmo rosa",
                           en: "Cazadores Blanco Tequila, lime juice and pink grapefruit soda" },
            price: "8.00",
          },
          {
            name:        { it: "Moscow Mule",                   en: "Moscow Mule" },
            description: { it: "Eristoff Vodka, succo di lime e Ginger Beer",
                           en: "Eristoff Vodka, lime juice and Ginger Beer" },
            price: "8.00",
          },
          {
            name:        { it: "Gin Fizz",                      en: "Gin Fizz" },
            description: { it: "Bombay Dry Gin, succo di limone, sciroppo di zucchero e soda",
                           en: "Bombay Dry Gin, lemon juice, sugar syrup and soda" },
            price: "8.00",
          },
          {
            name:        { it: "Mojito",                        en: "Mojito" },
            description: { it: "Bacardi Carta Blanca, lime fresco, zucchero bianco, menta e soda",
                           en: "Bacardi Carta Blanca, fresh lime, white sugar, mint and soda" },
            price: "8.00",
          },
          {
            name:        { it: "Fernandito",                    en: "Fernandito" },
            description: { it: "Fernet Branca e Coca-Cola",    en: "Fernet Branca and Coca-Cola" },
            price: "8.00",
          },
          {
            name:        { it: "Cuba Libre",                    en: "Cuba Libre" },
            description: { it: "Bacardi Carta Oro, Coca-Cola e lime",
                           en: "Bacardi Carta Oro, Coca-Cola and lime" },
            price: "8.00",
          },
          {
            name:        { it: "Caipirinha",                    en: "Caipirinha" },
            description: { it: "Leblon Cachaça, lime e zucchero bianco",
                           en: "Leblon Cachaça, lime and white sugar" },
            price: "8.00",
          },
          {
            name:        { it: "Il Camparino",                  en: "Il Camparino" },
            description: { it: "", en: "" },
            price: "4.00",
          },
        ],
      },

      {
        title: { it: "Aperitivo Martini", en: "Martini Aperitivo" },
        items: [
          {
            name:        { it: "Americano Martini",             en: "Americano Martini" },
            description: { it: "Martini Rosso Vermouth, Martini Riserva Bitter e soda",
                           en: "Martini Rosso Vermouth, Martini Riserva Bitter and soda" },
            price: "8.00",
          },
          {
            name:        { it: "Negroni Martini",               en: "Negroni Martini" },
            description: { it: "Martini Rosso Vermouth, Martini Riserva Bitter e Bombay Dry Gin",
                           en: "Martini Rosso Vermouth, Martini Riserva Bitter and Bombay Dry Gin" },
            price: "8.00",
          },
          {
            name:        { it: "Milano-Torino Martini",         en: "Milano-Torino Martini" },
            description: { it: "Martini Rosso Vermouth e Martini Riserva Bitter",
                           en: "Martini Rosso Vermouth and Martini Riserva Bitter" },
            price: "8.00",
          },
        ],
      },

      {
        title: { it: "Gin Tonic", en: "Gin & Tonic" },
        items: [
          {
            name:        { it: "Gin Tonic",                     en: "Gin Tonic" },
            description: { it: "Bombay Dry Gin e tonica",       en: "Bombay Dry Gin and tonic" },
            price: "8.00",
          },
          {
            name:        { it: "Bombay Sapphire & Tonic",       en: "Bombay Sapphire & Tonic" },
            description: { it: "Bombay Sapphire Gin e tonica premium",
                           en: "Bombay Sapphire Gin and premium tonic" },
            price: "10.00",
          },
          {
            name:        { it: "Hendrick's & Tonic",            en: "Hendrick's & Tonic" },
            description: { it: "Hendrick's Gin, tonica premium e cetriolo",
                           en: "Hendrick's Gin, premium tonic and cucumber" },
            price: "12.00",
          },
          {
            name:        { it: "Mare & Tonic",                  en: "Mare & Tonic" },
            description: { it: "Gin Mare, tonica premium e rosmarino",
                           en: "Gin Mare, premium tonic and rosemary" },
            price: "12.00",
          },
          {
            name:        { it: "Brockmans & Tonic",             en: "Brockmans & Tonic" },
            description: { it: "Brockmans Gin e tonica premium",
                           en: "Brockmans Gin and premium tonic" },
            price: "12.00",
          },
        ],
      },

      {
        title: { it: "Soft Drinks", en: "Soft Drinks" },
        items: [
          {
            name:        { it: "Martini Floreale",              en: "Martini Floreale" },
            description: { it: "Martini Floreale, Ginger Beer e lime",
                           en: "Martini Floreale, Ginger Beer and lime" },
            price: "6.00",
          },
          {
            name:        { it: "Virgin Mojito",                 en: "Virgin Mojito" },
            description: { it: "Lime pestato, menta fresca, zucchero di canna e soda",
                           en: "Crushed lime, fresh mint, cane sugar and soda" },
            price: "6.00",
          },
          {
            name:        { it: "Aperitivi Analcolici",          en: "Non-alcoholic aperitifs" },
            description: { it: "San Bitter · Crodino",         en: "San Bitter · Crodino" },
            price: "4.00",
          },
          {
            name:        { it: "Succhi di frutta",              en: "Fruit juices" },
            description: { it: "Ananas, Albicocca, Pesca, Pera, ACE",
                           en: "Pineapple, Apricot, Peach, Pear, ACE" },
            price: "3.50",
          },
          {
            name:        { it: "Succo BIO",                     en: "Organic juice" },
            description: { it: "Mirtillo 100% Bio",            en: "Blueberry 100% Organic" },
            price: "4.00",
          },
          {
            name:        { it: "Bibite in vetro",               en: "Glass bottles" },
            description: { it: "Coca-Cola, Coca-Cola Zero",    en: "Coca-Cola, Coca-Cola Zero" },
            price: "4.00",
          },
          {
            name:        { it: "Bibite in lattina",             en: "Canned drinks" },
            description: { it: "Coca-Cola, Coca-Cola Zero, Thè Pesca, Thè Limone, Lemonsoda, Fanta, Schweppes Tonica",
                           en: "Coca-Cola, Coca-Cola Zero, Peach Tea, Lemon Tea, Lemonsoda, Fanta, Schweppes Tonic" },
            price: "3.50",
          },
          {
            name:        { it: "Acqua 50 cl",                   en: "Water 50 cl" },
            description: { it: "Naturale o frizzante",         en: "Still or sparkling" },
            price: "1.50",
          },
          {
            name:        { it: "Acqua 1 l",                     en: "Water 1 l" },
            description: { it: "Naturale o frizzante",         en: "Still or sparkling" },
            price: "3.00",
          },
          {
            name:        { it: "Red Bull",                      en: "Red Bull" },
            description: { it: "", en: "" },
            price: "4.00",
          },
        ],
      },

      {
        title: { it: "Amari e Liquori", en: "Digestifs & Spirits" },
        items: [
          {
            name:        { it: "Amari & Liquori",               en: "Amari & Liqueurs" },
            description: { it: "Amaro Montenegro · Amaro del Capo · Braulio · Anima Nera · Limoncello della Casa · Sambuca · Baileys - 5 cl",
                           en: "Amaro Montenegro · Amaro del Capo · Braulio · Anima Nera · House Limoncello · Sambuca · Baileys — 5 cl" },
            price: "4.00",
          },
          {
            name:        { it: "Grappa Secca",                  en: "Dry Grappa" },
            description: { it: "4 cl", en: "4 cl" },
            price: "5.00",
          },
          {
            name:        { it: "Grappa Morbida",                en: "Smooth Grappa" },
            description: { it: "4 cl", en: "4 cl" },
            price: "5.00",
          },
          {
            name:        { it: "Grappa Barricata",              en: "Barrel-aged Grappa" },
            description: { it: "4 cl", en: "4 cl" },
            price: "6.00",
          },
          {
            name:        { it: "Vecchia Romagna",               en: "Vecchia Romagna" },
            description: { it: "Distillati & Whisky - 4 cl",   en: "Spirits & Whisky — 4 cl" },
            price: "5.00",
          },
          {
            name:        { it: "Jack Daniel's",                 en: "Jack Daniel's" },
            description: { it: "Distillati & Whisky - 4 cl",   en: "Spirits & Whisky — 4 cl" },
            price: "5.00",
          },
          {
            name:        { it: "Laphroaig 10 Years",            en: "Laphroaig 10 Years" },
            description: { it: "Distillati & Whisky - 4 cl",   en: "Spirits & Whisky — 4 cl" },
            price: "9.00",
          },
          {
            name:        { it: "Santa Teresa 1796",             en: "Santa Teresa 1796" },
            description: { it: "Rum - 4 cl",                   en: "Rum — 4 cl" },
            price: "8.00",
          },
          {
            name:        { it: "Shot Base",                     en: "Shot Base" },
            description: { it: "3 cl", en: "3 cl" },
            price: "3.00",
          },
          {
            name:        { it: "Shot Premium",                  en: "Shot Premium" },
            description: { it: "Patrón Silver · Patrón Reposado · Grey Goose Original - 3 cl",
                           en: "Patrón Silver · Patrón Reposado · Grey Goose Original — 3 cl" },
            price: "7.00",
          },
        ],
      },
    ],
  },

  CANTINA: {
    label: "Cantina",
    sections: [
      {
        title: { it: "Bollicine & Champagne", en: "Sparkling & Champagne" },
        items: [
          {
            name:        { it: "Prosecco Brut Valdobbiadene DOCG - Bortoluz",
                           en: "Prosecco Brut Valdobbiadene DOCG - Bortoluz" },
            description: { it: "Calice € 5,00 · Bottiglia € 22,00",
                           en: "Glass € 5.00 · Bottle € 22.00" },
            price: "5.00 / 22.00",
          },
          {
            name:        { it: "Franciacorta Brut - Lancini",
                           en: "Franciacorta Brut - Lancini" },
            description: { it: "Calice € 7,00 · Bottiglia € 40,00",
                           en: "Glass € 7.00 · Bottle € 40.00" },
            price: "7.00 / 40.00",
          },
          {
            name:        { it: "Franciacorta Animante Non Dosato - Barone Pizzini",
                           en: "Franciacorta Animante Non Dosato - Barone Pizzini" },
            description: { it: "Bottiglia € 45,00", en: "Bottle € 45.00" },
            price: "45.00",
          },
          {
            name:        { it: "Franciacorta Cuvée Prestige - Ca' del Bosco",
                           en: "Franciacorta Cuvée Prestige - Ca' del Bosco" },
            description: { it: "Bottiglia € 50,00", en: "Bottle € 50.00" },
            price: "50.00",
          },
          {
            name:        { it: "Champagne Gaucher-Jacquot Réserve Brut",
                           en: "Champagne Gaucher-Jacquot Réserve Brut" },
            description: { it: "Bottiglia € 42,00", en: "Bottle € 42.00" },
            price: "42.00",
          },
          {
            name:        { it: "Champagne Special Cuvée - Bollinger",
                           en: "Champagne Special Cuvée - Bollinger" },
            description: { it: "Bottiglia € 100,00", en: "Bottle € 100.00" },
            price: "100.00",
          },
          {
            name:        { it: "Champagne - Philipponnat",
                           en: "Champagne - Philipponnat" },
            description: { it: "Bottiglia € 80,00", en: "Bottle € 80.00" },
            price: "80.00",
          },
        ],
      },
      {
        title: { it: "Vini Bianchi", en: "White Wines" },
        items: [
          {
            name:        { it: "Lugana DOC - Ca' dei Frati",   en: "Lugana DOC - Ca' dei Frati" },
            description: { it: "Calice € 6,00 · Bottiglia € 23,00",
                           en: "Glass € 6.00 · Bottle € 23.00" },
            price: "6.00 / 23.00",
          },
          {
            name:        { it: "Verde Luna IGT - Caminella",   en: "Verde Luna IGT - Caminella" },
            description: { it: "Calice € 6,00 · Bottiglia € 25,00",
                           en: "Glass € 6.00 · Bottle € 25.00" },
            price: "6.00 / 25.00",
          },
          {
            name:        { it: "Gewürztraminer - Kurtatsch",   en: "Gewürztraminer - Kurtatsch" },
            description: { it: "Bottiglia € 30,00", en: "Bottle € 30.00" },
            price: "30.00",
          },
          {
            name:        { it: "Pinot Grigio - Sturm",         en: "Pinot Grigio - Sturm" },
            description: { it: "Bottiglia € 40,00", en: "Bottle € 40.00" },
            price: "40.00",
          },
        ],
      },
      {
        title: { it: "Vini Rosati", en: "Rosé Wines" },
        items: [
          {
            name:        { it: "Rosa dei Frati (Chiaretto) - Ca' dei Frati",
                           en: "Rosa dei Frati (Chiaretto) - Ca' dei Frati" },
            description: { it: "Calice € 6,00 · Bottiglia € 35,00",
                           en: "Glass € 6.00 · Bottle € 35.00" },
            price: "6.00 / 35.00",
          },
          {
            name:        { it: "Rosé Extra Brut Bio - Barone Pizzini",
                           en: "Rosé Extra Brut Bio - Barone Pizzini" },
            description: { it: "Bottiglia € 45,00", en: "Bottle € 45.00" },
            price: "45.00",
          },
        ],
      },
      {
        title: { it: "Vini Rossi", en: "Red Wines" },
        items: [
          {
            name:        { it: "Valcalepio DOC Rosso - Il Calepino",
                           en: "Valcalepio DOC Rosso - Il Calepino" },
            description: { it: "Calice € 5,00 · Bottiglia € 19,00",
                           en: "Glass € 5.00 · Bottle € 19.00" },
            price: "5.00 / 19.00",
          },
          {
            name:        { it: "Ripasso Valpolicella - Monte del Frà",
                           en: "Ripasso Valpolicella - Monte del Frà" },
            description: { it: "Calice € 6,00 · Bottiglia € 30,00",
                           en: "Glass € 6.00 · Bottle € 30.00" },
            price: "6.00 / 30.00",
          },
          {
            name:        { it: "Luna Rossa IGP Riserva - Caminella",
                           en: "Luna Rossa IGP Riserva - Caminella" },
            description: { it: "Bottiglia € 50,00", en: "Bottle € 50.00" },
            price: "50.00",
          },
          {
            name:        { it: "Il Bruciato Bolgheri DOC - Antinori",
                           en: "Il Bruciato Bolgheri DOC - Antinori" },
            description: { it: "Bottiglia € 60,00", en: "Bottle € 60.00" },
            price: "60.00",
          },
        ],
      },
    ],
  },

  CAFFETTERIA: {
    label: "Caffetteria",
    sections: [
      {
        title: { it: "Caffetteria", en: "Coffee" },
        items: [
          {
            name:        { it: "Espresso / Espresso decaffeinato",
                           en: "Espresso / Decaf espresso" },
            description: { it: "", en: "" },
            price: "1.50",
          },
          {
            name:        { it: "Espresso macchiato",            en: "Espresso macchiato" },
            description: { it: "", en: "" },
            price: "1.50",
          },
          {
            name:        { it: "Cappuccino",                    en: "Cappuccino" },
            description: { it: "", en: "" },
            price: "2.50",
          },
          {
            name:        { it: "Caffè d'orzo",                  en: "Barley coffee" },
            description: { it: "Tazza piccola/grande",         en: "Small/large cup" },
            price: "1.60/2.00",
          },
          {
            name:        { it: "Caffè al ginseng",              en: "Ginseng coffee" },
            description: { it: "Tazza piccola/grande",         en: "Small/large cup" },
            price: "1.80/2.20",
          },
          {
            name:        { it: "Caffè shakerato",               en: "Shaken espresso" },
            description: { it: "Classico o vaniglia",          en: "Classic or vanilla" },
            price: "4.50",
          },
          {
            name:        { it: "Cold brew coffee",              en: "Cold brew coffee" },
            description: { it: "Caffè freddo estratto a freddo",
                           en: "Cold-extracted cold coffee" },
            price: "4.00",
          },
          {
            name:        { it: "Iced cappuccino",               en: "Iced cappuccino" },
            description: { it: "Cappuccino freddo",            en: "Cold cappuccino" },
            price: "3.50",
          },
        ],
      },

      {
        title: { it: "Dolci", en: "Desserts" },
        items: [
          {
            name:        { it: "Cheesecake frutti di bosco",    en: "Mixed berry cheesecake" },
            description: { it: "", en: "" },
            price: "6.00",
          },
          {
            name:        { it: "Cheesecake cioccolato bianco e pistacchio",
                           en: "White chocolate and pistachio cheesecake" },
            description: { it: "", en: "" },
            price: "6.00",
          },
          {
            name:        { it: "Dolce del giorno",              en: "Dessert of the day" },
            description: { it: "", en: "" },
            price: "6.00",
          },
        ],
      },
    ],
  },
};
```

- [ ] **Step 2: Verify — menu renders in Italian by default**

Open `cibo.html`. You should see "Summer dishes", "Fresh pasta", etc. if your browser is English, or the Italian equivalents if your browser is Italian.

Open the browser console and test the switch:
```js
setLang('en');
// Page re-renders immediately: section titles in English, item names/descriptions in English
setLang('it');
// Page re-renders back to Italian
```

Check all four section pages: `cibo.html`, `drink.html`, `cantina.html`, `caffetteria.html`.

- [ ] **Step 3: Commit**

```bash
git add menu-data.js
git commit -m "feat: convert menu-data.js to bilingual { it, en } structure"
```

---

## Task 4: Add toggle button styles to style.css

**Files:**
- Modify: `style.css` (append to end of file)

- [ ] **Step 1: Append lang toggle styles**

Add the following at the end of `style.css`:

```css
/* ── LANGUAGE TOGGLE ─────────────────────────────────────────────────────── */

.lang-toggle-wrapper {
  display: flex;
  justify-content: flex-end;
  padding: 10px 16px 0;
}

#lang-toggle {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  padding: 5px 12px;
  color: #fff;
  font-family: inherit;
  font-size: 13px;
  letter-spacing: 0.03em;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: background 0.15s ease;
}

#lang-toggle:hover {
  background: rgba(255, 255, 255, 0.25);
}

#lang-toggle strong {
  font-weight: 600;
}

/* On menu pages the toggle sits inside .header-nav — push it to the far right */
.header-nav #lang-toggle {
  margin-left: auto;
}
```

- [ ] **Step 2: Verify styles load without errors**

Open `cibo.html` in a browser. No CSS errors in the console. The page looks unchanged (no toggle visible yet — that comes in Task 5 when JS injects it).

- [ ] **Step 3: Commit**

```bash
git add style.css
git commit -m "feat: add lang toggle button styles"
```

---

## Task 5: Update HTML pages

**Files:**
- Modify: `index.html`, `cibo.html`, `drink.html`, `cantina.html`, `caffetteria.html`

- [ ] **Step 1: Update index.html**

The home page currently loads `menu.js` and `script.js` (which don't exist). Replace those script tags with `app.js`, and add the `.lang-toggle-wrapper` div at the top of `.home-main`. Make these changes:

1. Inside `<main class="home-main">`, add as the **first child**:
```html
<div class="lang-toggle-wrapper"></div>
```

2. Replace the two broken script tags at the bottom:
```html
<!-- REMOVE these two lines: -->
<script src="menu.js"></script>
<script src="script.js"></script>

<!-- REPLACE with: -->
<script src="menu-data.js"></script>
<script src="app.js"></script>
<script>
  initLangToggle();
</script>
```

- [ ] **Step 2: Update cibo.html**

`cibo.html` has a pre-existing bug: two `<main>` tags both containing `id="menu-container"`. The second one is never populated by `renderMenu` (duplicate ID — `getElementById` only returns the first). Fix this while adding the i18n attributes.

The corrected structure should be a single `<main>` with the menu container, followed by a single legend section. Replace both `<main>` blocks with:

```html
<main>
  <div class="menu-content" id="menu-container"></div>
  <div class="menu-legend">
    <span data-i18n="vegetarian">🍃 vegetariano</span>
    <span data-i18n="frozen">* prodotto congelato all'origine</span>
  </div>
  <div class="menu-legend">
    <span data-i18n="allergies">Per eventuali intolleranze alimentari, rivolgersi al personale.</span>
  </div>
</main>
```

Also make the following individual changes:

1. The back link — change:
```html
<!-- BEFORE: -->
<a href="index.html" class="back-link">
  <span class="back-arrow">←</span>
  homepage
</a>

<!-- AFTER: -->
<a href="index.html" class="back-link">
  <span class="back-arrow">←</span>
  <span data-i18n="backLink">homepage</span>
</a>
```

2. Add `initLangToggle()` to the inline script at the bottom:
```html
<!-- BEFORE: -->
<script>
  renderMenu("FOOD");
</script>

<!-- AFTER: -->
<script>
  initLangToggle();
  renderMenu("FOOD");
</script>
```

- [ ] **Step 3: Update drink.html**

1. Back link — same change as cibo.html step 2.1 above.

2. Add `initLangToggle()` to the inline script:
```html
<!-- BEFORE: -->
<script>
  renderMenu("DRINK");
</script>

<!-- AFTER: -->
<script>
  initLangToggle();
  renderMenu("DRINK");
</script>
```

- [ ] **Step 4: Update cantina.html**

1. Back link — same change as cibo.html step 2.1 above.

2. Add `initLangToggle()` to the inline script:
```html
<!-- BEFORE: -->
<script>
  renderMenu("CANTINA");
</script>

<!-- AFTER: -->
<script>
  initLangToggle();
  renderMenu("CANTINA");
</script>
```

- [ ] **Step 5: Update caffetteria.html**

1. Back link — same change as cibo.html step 2.1 above.

2. Add `initLangToggle()` to the inline script:
```html
<!-- BEFORE: -->
<script>
  renderMenu("CAFFETTERIA");
</script>

<!-- AFTER: -->
<script>
  initLangToggle();
  renderMenu("CAFFETTERIA");
</script>
```

- [ ] **Step 6: Commit**

```bash
git add index.html cibo.html drink.html cantina.html caffetteria.html
git commit -m "feat: add lang toggle placeholder and data-i18n attributes to all pages"
```

---

## Task 6: End-to-end verification

No code changes. Verify the full feature works correctly across all pages and scenarios.

- [ ] **Step 1: Verify default language detection**

Clear `localStorage` to simulate a fresh visit:
```js
localStorage.clear();
location.reload();
```
If your browser language is English (`en-*`): page should render in English.
If your browser language is Italian (`it-*`): page should render in Italian.
If your browser language is anything else (e.g. French): page should render in Italian (fallback).

- [ ] **Step 2: Verify toggle on every page**

Open each page and confirm:
- The `🇮🇹 IT` / `🇬🇧 EN` pill appears top-right in the header.
- Tapping it switches the language instantly — no page reload.
- Section titles, item names, and descriptions all update.
- The back link text changes (homepage ↔ home).
- On `cibo.html`: the legend and allergy notice update.

- [ ] **Step 3: Verify localStorage persistence**

1. Switch to English on `cibo.html`.
2. Navigate to `drink.html` via the back button and then the DRINK card.
3. The drink page should open in English.
4. Close and reopen the browser tab — the language should still be English.

- [ ] **Step 4: Verify browser console is clean**

On each page, open DevTools → Console. There should be zero errors and zero warnings about missing scripts.

- [ ] **Step 5: Commit (if any last fixes were made)**

```bash
git add -p   # stage only intentional fixes
git commit -m "fix: address issues found during e2e verification"
```

---

## .gitignore

Add `.superpowers/` to `.gitignore` so brainstorm mockups don't get committed:

- [ ] **Step 1: Add to .gitignore**

If `.gitignore` doesn't exist, create it. Add:
```
.superpowers/
```

- [ ] **Step 2: Commit**

```bash
git add .gitignore
git commit -m "chore: ignore .superpowers brainstorm directory"
```
