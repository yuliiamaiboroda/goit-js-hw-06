const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

ingredients.forEach((el) => {
  const itemEl = document.createElement('li'); 
  itemEl.textContent = el;
  itemEl.classList.add('item');
  listEl.append(itemEl)
})
  
