const imgs = document.querySelectorAll('img');
// console.log(imgs)
// let i = 0;
// imgs.forEach(function(item, index, array) {
//    console.log(item, index, array);
// });

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

// console.log(titulos)
// console.log(titulosArray)

// titulosArray.forEach((item) =>{
//   console.log(item)
// })

// imgs.forEach((item, index) => {
//   console.log(item, index);
// });

// imgs.forEach((item, index) => {
//   console.log(item, index);
// });

imgs.forEach(function(item) {
  console.log(item)
});

imgs.forEach((item) => console.log(item));