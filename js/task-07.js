const inputRangeEl = document.querySelector('#font-size-control');
const textOfInputEl = document.querySelector('#text');
const minSizeOfText = inputRangeEl.getAttribute('min');
const maxSizeOfText = inputRangeEl.getAttribute('max');

// textOfInputEl.style.fontSize = minSizeOfText;


inputRangeEl.addEventListener('input', changeTextSizeHandle);
function changeTextSizeHandle (){
  if(inputRangeEl.value>= minSizeOfText && inputRangeEl.value<= maxSizeOfText)
  {textOfInputEl.style.fontSize = inputRangeEl.value + 'px';}
  else if ( inputRangeEl.value < minSizeOfText){
    textOfInputEl.style.fontSize =  minSizeOfText + 'px';
  }
  else {
    textOfInputEl.style.fontSize = maxSizeOfText + 'px';
  }
}