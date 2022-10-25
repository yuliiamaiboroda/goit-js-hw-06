const inputRangeEl = document.querySelector('#font-size-control');
const textOfInputEl = document.querySelector('#text');
const minSizeOfText = inputRangeEl.getAttribute('min');
const maxSizeOfText = inputRangeEl.getAttribute('max');

// textOfInputEl.style.fontSize = minSizeOfText;


inputRangeEl.addEventListener('input', changeTextSizeHandle);
function changeTextSizeHandle (){
  textOfInputEl.style.fontSize = inputRangeEl.value + 'px';
}