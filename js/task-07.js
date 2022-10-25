const inputRangeEl = document.querySelector('#font-size-control');
const textOfInputEl = document.querySelector('#text');

inputRangeEl.addEventListener('input', changeTextSizeHandle);
function changeTextSizeHandle (){
  textOfInputEl.style.fontSize = inputRangeEl.value + 'px';
}