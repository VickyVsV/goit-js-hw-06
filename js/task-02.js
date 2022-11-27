const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");


//console.log(ingredients.length);

for (let i = 0; i < ingredients.length; i++) {
  const liEl = document.createElement("li");
  liEl.textContent = ingredients[i];
  liEl.className = "item";
  ulEl.append(liEl);
  // const liContentEl = document.createTextNode(ingredients[i]);
  // liEl.appendChild(liContentEl);
}
