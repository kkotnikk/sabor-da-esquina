import { categories, money, filterMenu } from './menu.js?v=20261030-1806';

const $ = id => document.getElementById(id);
const escape = value => String(value ?? '').replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
let category = 'pratos';
let query = '';

const categoryPaths = {
  pratos: '<circle cx="12" cy="12" r="6"/><path d="M3 3v7m3-7v7M3 7h3M4.5 10v11M21 3v18m0-18c-3 2-4 8 0 9"/>',
  pizzas: '<path d="M4 4a21 21 0 0 1 16 16L3 21 4 4Z"/><path d="M4 8a16 16 0 0 1 12 12"/><circle cx="8" cy="15" r="1"/><circle cx="11" cy="18" r=".8"/>',
  porcoes: '<path d="m5 10 2 11h10l2-11H5ZM7 10V3h3v7m1 0V2h3v8m1 0V4h3v6m-10 4 1 4m7-4-1 4"/>',
  caldos: '<path d="M3 12h18a9 9 0 0 1-18 0Zm4 9h10M7 8c-2-2 2-3 0-5m5 5c-2-2 2-3 0-5m5 5c-2-2 2-3 0-5"/>',
  beirutes: '<path d="m3 10 9-6 9 6v7H3v-7Zm0 3h18M5 17v3h14v-3M7 10h1m4-2h1m3 3h1"/>',
  lanches: '<path d="M3 10a9 7 0 0 1 18 0H3Zm0 9h18v1H3v-1ZM3 14h18M4 17l4-2 4 2 4-2 4 2M8 6h.1M12 5h.1M16 6h.1"/>',
  doces: '<path d="M4 12h16v8H4v-8Zm0 4h16M4 12l11-8 5 8M13 10h.1M11 20v-4M15 4V2"/>',
  especiais: '<path d="m12 3 2.7 6.3L21 12l-6.3 2.7L12 21l-2.7-6.3L3 12l6.3-2.7L12 3Z"/>',
  bebidas: '<path d="m6 7 2 14h8l2-14H6ZM13 7l2-5h4M7 12h10M6 7h12"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
};
const categoryIcon = id => `<svg viewBox="0 0 24 24" aria-hidden="true">${categoryPaths[id] || categoryPaths.pratos}</svg>`;
$('categories').innerHTML = categories.map(item => `<button type="button" class="category-button" data-category="${item.id}" aria-pressed="false">${categoryIcon(item.id)}<span>${item.name}</span></button>`).join('');

function priceHTML(product) {
  return product.options.map(option => {
    const showLabel = product.options.length > 1 || option.label.includes('confirmar');
    return `<span class="item-price">${showLabel ? `<small>${escape(option.label)}</small>` : ''}<strong class="${option.price == null ? 'consult-price' : ''}">${option.price == null ? 'Sob consulta' : money(option.price)}</strong></span>`;
  }).join('');
}

function renderMenu() {
  const result = filterMenu(category, query);
  const current = categories.find(item => item.id === category);
  const groups = [...new Set(result.map(item => item.group))];
  const showGroupTitle = groups.length > 1 || category === 'pratos';
  const itemTag = showGroupTitle ? 'h4' : 'h3';
  $('category-title').textContent = query ? 'Resultados da busca' : current.name;
  $('category-symbol').innerHTML = categoryIcon(query ? 'search' : category);
  $('category-note').textContent = query ? `Resultados para “${query}”.` : current.note || '';
  $('category-note').hidden = !query && !current.note;
  $('clear-search').hidden = !query;
  $('no-results').hidden = result.length > 0;
  $('result-status').textContent = `${result.length} ${result.length === 1 ? 'item encontrado' : 'itens encontrados'}.`;
  $('categories').querySelectorAll('[data-category]').forEach(button => button.setAttribute('aria-pressed', String(!query && button.dataset.category === category)));
  $('menu-items').innerHTML = groups.map(group => `<section class="menu-group" aria-label="${escape(group)}">${showGroupTitle ? `<h3 class="group-title"><span>${escape(group)}</span></h3>` : ''}<div class="menu-grid">${result.filter(item => item.group === group).map(item => `<article class="menu-item" aria-labelledby="name-${item.id}"><div class="item-copy">${query ? `<p class="item-context">${escape(categories.find(entry => entry.id === item.category).name)} · ${escape(item.group)}</p>` : ''}<${itemTag} id="name-${item.id}" class="item-name">${escape(item.name)}</${itemTag}>${item.description ? `<p class="item-description${item.advanceOrder ? ' item-order-notice' : ''}">${escape(item.description)}</p>` : ''}</div><div class="item-prices">${priceHTML(item)}</div></article>`).join('')}</div></section>`).join('');
}

$('categories').addEventListener('click', event => {
  const button = event.target.closest('[data-category]');
  if(!button) return;
  category = button.dataset.category;
  query = '';
  $('menu-search').value = '';
  renderMenu();
  const nav = $('categories');
  const left = button.offsetLeft - nav.offsetLeft - nav.clientWidth / 2 + button.clientWidth / 2;
  const behavior = matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth';
  nav.scrollTo({ left, behavior });
  $('menu-body').scrollIntoView({ block: 'start', behavior });
});

$('menu-search').addEventListener('input', event => {
  query = event.target.value.trim();
  renderMenu();
});
function clearSearch() {
  query = '';
  $('menu-search').value = '';
  renderMenu();
  $('menu-search').focus();
}
$('clear-search').addEventListener('click', clearSearch);
$('reset-search').addEventListener('click', clearSearch);
renderMenu();
