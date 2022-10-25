const listEl = document.querySelector('#categories');
const countListEl = listEl.children.length;
console.log(`Number of categories : ${countListEl}`);


const secondListEl = document.querySelectorAll('.item');
const childrenSecondList = [...secondListEl].map(el => `\n Category: ${el.children[0].textContent} \n Elements: ${el.children[1].children.length}`).join('');
console.log(childrenSecondList);