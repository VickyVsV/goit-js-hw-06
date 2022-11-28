const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listEl = document.querySelector(".gallery");


//--------- 1-st method --------
const imgEl = images.reduce((str, img) => 
  str + `<li class = "gallery__item">
  <img src = "${img.url}" alt = "${img.alt}" width = "350px"></li>`, ``);

listEl.insertAdjacentHTML("afterbegin", imgEl);

document.querySelector('.gallery')
  .setAttribute('style', 'list-style: none; display: grid; justify-content: space-evenly; gap: 15px');

//-------- 2-nd method --------
// const imgEl = images.map((img) => 
//   `<li class = "gallery__item"><img src=${img.url} alt="${img.alt}"></li>`);
//
//listEl.insertAdjacentHTML("afterbegin", imgEl);

//------- 3-rd nethod ------------
// const makeGalleryItemEl = ({ url, alt }) => {
//   return `<li class = "gallery__item"><img width="400px"
//   src = "${url}" alt = "${alt}"></li>`;
// };
// const makeGalleryNew = images.map(makeGalleryItemEl).join("");
// listEl.insertAdjacentHTML("afterbegin", makeGalleryNew);
