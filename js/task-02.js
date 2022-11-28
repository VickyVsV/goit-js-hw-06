const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");


//-------- Спосов олдовский с помощью цикла -----------

// for (let i = 0; i < ingredients.length; i++) {
//   const liEl = document.createElement("li");
//   liEl.textContent = ingredients[i];
//   liEl.classList = "item";
//   ulEl.append(liEl);
// }

//--------- Современный способ с помощью MAP() -------

// const element = ingredients.map(ingredient => {
//   const liEl = document.createElement("li");
//   liEl.textContent = ingredient;
//   liEl.className = "item";
//   ulEl.append(liEl);
//   //return liEl;
// });

//--------- Способ 3 с помощью reduce() ---------

const listEl = ingredients.reduce((str, item) => str + `<li class = item>${item}</li>`, '');
console.log(listEl);
ulEl.innerHTML = listEl;