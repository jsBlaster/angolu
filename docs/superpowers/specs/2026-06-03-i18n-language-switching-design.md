# i18n Language Switching — Design Spec

**Date:** 2026-06-03  
**Status:** Approved

## Overview

Add Italian/English language switching to the Angolu restaurant menu website. The user's browser language is used as the default; an explicit choice is persisted in `localStorage`. All translatable content — section titles, item names, and item descriptions — is bilingual inline in `menu-data.js`. Language switches without a page reload.

---

## Scope of Translation

Everything translatable is translated:
- Menu section titles (e.g. "Piatti estivi" → "Summer dishes")
- Item names where a meaningful English equivalent exists (e.g. "Tagliere misto" → "Mixed charcuterie board")
- Item descriptions (e.g. "Tuorlo e senape al miele" → "Egg yolk and honey mustard")
- UI strings: back link, legend labels, allergy notice

Proper Italian names with no natural English equivalent (Casoncelli, Scarpinocc, Spritz, Polenta, etc.) carry the same value in both `it` and `en`.

---

## Data Layer — `menu-data.js`

Every translatable string becomes `{ it: "...", en: "..." }`. Prices remain plain strings.

```js
{
  title: { it: "Piatti estivi", en: "Summer dishes" },
  items: [
    {
      name:        { it: "Tagliere misto", en: "Mixed charcuterie board" },
      description: { it: "Selezione di salumi e formaggi bergamaschi",
                     en: "Selection of Bergamo cured meats and cheeses" },
      price: "20.00"
    },
    {
      name:        { it: "Casoncelli", en: "Casoncelli" },
      description: { it: "", en: "" },
      price: "13.00"
    }
  ]
}
```

The `MENU[category].label` field (e.g. `"Food"`, `"Drink"`) is already language-neutral and does not need to change.

---

## Language Management — `app.js`

A `lang` module is added at the top of `app.js`:

```js
const SUPPORTED_LANGS = ['it', 'en'];
const browserLang = navigator.language.slice(0, 2);
const DEFAULT_LANG = SUPPORTED_LANGS.includes(browserLang) ? browserLang : 'it';

let currentLang = localStorage.getItem('lang') || DEFAULT_LANG;

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  renderUI();
  rerenderMenu();
}
```

**Default language logic:**
- Read `navigator.language` (e.g. `"it-IT"`, `"en-US"`), take first two characters.
- If the result is in `SUPPORTED_LANGS`, use it; otherwise fall back to `'it'` (venue is Italian, most non-Italian visitors will switch manually).
- `localStorage` always overrides the browser default once the user has made an explicit choice.

---

## UI Strings

A `UI_STRINGS` object in `app.js` holds all static page text:

```js
const UI_STRINGS = {
  backLink:   { it: "homepage",                          en: "home" },
  vegetarian: { it: "🍃 vegetariano",                    en: "🍃 vegetarian" },
  frozen:     { it: "* prodotto congelato all'origine",  en: "* frozen at source" },
  allergies:  { it: "Per eventuali intolleranze alimentari, rivolgersi al personale.",
                en: "Please inform staff of any food allergies or intolerances." },
};
```

`renderUI()` updates all elements carrying a `data-i18n` attribute:

```js
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
```

---

## Menu Rendering — `app.js`

`renderMenu()` is updated to read from the bilingual structure:

```js
nameEl.textContent = item.name[currentLang] || item.name.it;
descEl.textContent = item.description[currentLang] || item.description.it;
titleEl.textContent = section.title[currentLang] || section.title.it;
```

A `rerenderMenu()` helper clears `#menu-container` and calls `renderMenu()` again with the current category — used by `setLang()` on menu pages. On the home page, `rerenderMenu()` is a no-op since there is no menu container.

`renderMenu(category)` stores the category in a module-level `currentCategory` variable when first called, so `rerenderMenu()` can look it up:

```js
let currentCategory = null;

function renderMenu(category) {
  currentCategory = category;
  // ... existing render logic, using [currentLang]
}

function rerenderMenu() {
  if (!currentCategory) return;
  const container = document.getElementById('menu-container');
  if (!container) return;
  container.textContent = '';
  renderMenu(currentCategory);
}
```

---

## Language Toggle Button

**Appearance:** A pill-shaped button showing the current language as `🇮🇹 IT` or `🇬🇧 EN`. Tapping switches to the other language instantly (live re-render, no page reload).

**Markup injected by JS** (via safe DOM methods, no `innerHTML`):
```js
const btn = document.createElement('button');
btn.id = 'lang-toggle';
btn.addEventListener('click', () => setLang(currentLang === 'it' ? 'en' : 'it'));
// label updated by renderUI()
```

**Placement:**
- **Home page (`index.html`):** injected into a new `<div class="lang-toggle-wrapper">` prepended inside `.home-main`, sitting in the top-right corner via CSS.
- **Menu pages:** appended into `.header-nav`, right side, balanced against the back link on the left.

**Styling:** Semi-transparent white background (`rgba(255,255,255,0.15)`) with a subtle border, so it works on both the dark home header and the coloured menu headers.

---

## HTML Changes (all 5 pages)

| Page | Changes |
|---|---|
| `index.html` | Add `<div class="lang-toggle-wrapper">` inside `.home-main` |
| `cibo.html` | Add `data-i18n="backLink"` to back link; `data-i18n` on legend and allergy notice spans |
| `drink.html` | Add `data-i18n="backLink"` to back link |
| `cantina.html` | Add `data-i18n="backLink"` to back link |
| `caffetteria.html` | Add `data-i18n="backLink"` to back link |

The toggle button itself is injected by JS on page load, so no `<button>` needs to be hand-written in each HTML file.

---

## Files Changed

| File | Nature of change |
|---|---|
| `menu-data.js` | All translatable strings → `{ it, en }` objects |
| `app.js` | Add lang module, `UI_STRINGS`, `setLang()`, `renderUI()`, `rerenderMenu()`; update `renderMenu()` |
| `index.html` | Add `.lang-toggle-wrapper` placeholder |
| `cibo.html` | Add `data-i18n` attributes |
| `drink.html` | Add `data-i18n` on back link |
| `cantina.html` | Add `data-i18n` on back link |
| `caffetteria.html` | Add `data-i18n` on back link |
| `style.css` | Add `.lang-toggle-wrapper` and `#lang-toggle` styles |
