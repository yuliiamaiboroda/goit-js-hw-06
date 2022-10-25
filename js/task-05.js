const inputEl = document.querySelector('#name-input');
const nameGreetingEl = document.querySelector('#name-output');

inputEl.addEventListener('input', changeNameByInputHadler);
function changeNameByInputHadler () {
if(inputEl.value){
    nameGreetingEl.textContent = inputEl.value;
} else{
    nameGreetingEl.textContent = 'Anonymous';
}
}