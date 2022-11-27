const categoriesEl = document.querySelector(`#categories`);
const numberCategoriesEl = categoriesEl.children.length;
console.log(`Number of categories: ${numberCategoriesEl}`);

const parentItemEl = document.querySelectorAll("li.item");
parentItemEl.forEach(element => {

  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.firstElementChild.nextElementSibling.childElementCount}`);


});

//  console.log(`Elements: ${element.lastElementChild.children.length}`);


