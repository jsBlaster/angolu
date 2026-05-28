function renderMenu(category) {
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
