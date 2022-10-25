function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputsEl = document.querySelector('#controls');
const boxesEl = document.querySelector('#boxes');
const btnCreateBoxesEl = document.querySelector('button[data-create]');
const btnDestroyBoxesEl = document.querySelector('button[data-destroy]')

btnCreateBoxesEl.addEventListener('click', getValueofInputs)
btnDestroyBoxesEl.addEventListener('click', destroyBoxes)

function getValueofInputs (){
let amount = inputsEl.firstElementChild.value;
if (amount >= 1 && amount <= 100)
{createBoxes(amount);}
}

function createBoxes(amount) {
  let startSize = 30;
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    let size = startSize + i * 10;
    let div = document.createElement("div");
    let bgColor = getRandomHexColor();
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color :${bgColor};`; 
    fragment.appendChild(div);
  }
  boxesEl.appendChild(fragment);
}


function destroyBoxes() {
  boxesEl.innerHTML = "";
}
