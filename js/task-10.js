function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let numberEl = document.querySelector("#controls > input");
let btnCreateEl = document.querySelector("button[data-create]");
let btnDestroyEl = document.querySelector("button[data-destroy]");
let boxesEl = document.querySelector("#boxes");

console.log(numberEl);

btnCreateEl.addEventListener("click", onCreateButtonClick);
btnDestroyEl.addEventListener("click", destroyBoxes);

function onCreateButtonClick() {
	createBoxes(numberEl.value);
}

function createBoxes(amount) {
  let boxArray = [];
  for (let i=0; i<amount; i += 1){
    const box = document.createElement("div");
		box.style.width = `${30 + 10 * i}px`;
		box.style.height = `${30 + 10 * i}px`;
		box.style.backgroundColor = getRandomHexColor();
		boxArray.push(box);
  }
  boxesEl.append(...boxArray);
  //помещения всех элементов из boxArray в boxesEl.
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
}
