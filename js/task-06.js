let inputEl = document.querySelector(`#validation-input`);

// inputEl.addEventListener("blur", onInputBlur);

// function onInputBlur (event) {
//   if(event.currentTarget.value.length === Number(event.currentTarget.dataset.length)){
//     inputEl.classList.add(`valid`);
//     inputEl.classList.remove(`invalid`);
//   }
//   else {
//     inputEl.classList.add(`invalid`);
//     inputEl.classList.remove(`valid`);
//   }
// }

inputEl.addEventListener("blur", (event) => {

  if(event.currentTarget.value.length === Number(event.currentTarget.dataset.length)){
    inputEl.classList.add(`valid`);
    inputEl.classList.remove(`invalid`);
  }
  else {
    inputEl.classList.add(`invalid`);
    inputEl.classList.remove(`valid`);
  }
});