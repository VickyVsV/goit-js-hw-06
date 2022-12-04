let inputEl = document.querySelector('#name-input');
let outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);
//Событие input срабатывает при изменении 
//value элемента <input>, <select>, или <textarea>.


function onInputChange(event) {
  inputEl = event.currentTarget.value;
  // if (inputEl !== ' '){
  //   outputEl.innerText = inputEl.trim();
  // }
  // else outputEl.innerText = 'Anonymous'
  inputEl !== ' ' ? (outputEl.innerText = inputEl.trim()) : 'Anonymous';
}