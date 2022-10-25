const inputEl = document.querySelector('#validation-input');
const lengthOfInput = inputEl.getAttribute('data-length');

inputEl.addEventListener('change', inputIsValidHandler);

function inputIsValidHandler (){
    if (inputEl.value.length < lengthOfInput){
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    } else {
        inputEl.classList.add('valid')
        inputEl.classList.remove('invalid');
    }
}