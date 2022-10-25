const valueEl = document.querySelector('#value');
const btnDecrementEl = document.querySelector('button[data-action="decrement"]');
const btnIncrementEl = document.querySelector('button[data-action="increment"]');

let counterValue = 0;
    
btnDecrementEl.addEventListener('click', valueDecremetnHandler);
btnIncrementEl.addEventListener('click', valueIncrementHandler)

function valueDecremetnHandler  ()  {
     counterValue -= 1;
    valueEl.textContent = counterValue;
}

function valueIncrementHandler (){
    counterValue += 1;
    valueEl.textContent = counterValue;
}