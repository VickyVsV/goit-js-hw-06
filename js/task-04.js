let counterValue = document.querySelector('#value');
//let countEl = 0;
let countEl = Number(counterValue.textContent);


//const dekrBtn = document.querySelector('#counter').firstElementChild;
const dekrBtn = document.querySelector('button[data-action="decrement"]');
//const inkrBtn = document.querySelector('#counter').lastElementChild;
const inkrBtn = document.querySelector('button[data-action="increment"]');

dekrBtn.addEventListener('click', event => {
  // Свойство innerText позволяет считывать или задавать текстовое содержимое элемента
  countEl--;
  counterValue.innerText = countEl;
});

inkrBtn.addEventListener('click', event => {
  // Свойство innerText позволяет считывать или задавать текстовое содержимое элемента
  countEl++;
  counterValue.innerText = countEl;
});