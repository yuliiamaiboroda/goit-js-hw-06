function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const btnChangeColorEl = document.querySelector('.change-color');
const nameOfColorTextEl =document.querySelector('.color');

btnChangeColorEl.addEventListener('click', changeColorHandler);

function changeColorHandler (){
  bodyEl.style.backgroundColor = getRandomHexColor();
  nameOfColorTextEl.textContent = getRandomHexColor();
}