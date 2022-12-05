function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let bodyEl = document.querySelector("body");
let colorEl = document.querySelector(".color");
const btnEl = document.querySelector(".change-color");

let randomColor = getRandomHexColor();

btnEl.addEventListener("click", (event) => {
  bodyEl.style.backgroundColor = randomColor;
  colorEl.textContent = randomColor;
});

