const animais = document.getElementById('animais');
// console.log(animais);

const gridSection = document.getElementsByClassName('grid-section');

// console.log(gridSection[2]);

const primeiraUl = document.querySelector('ul');
// console.log(primeiraUl)

const primeiraLi = primeiraUl.querySelector('li');
// console.log(primeiraLi);

const linksInternos = document.querySelector('[href^="#"]');
// console.log(linksInternos);

const animaisImg = document.querySelectorAll('.animais img');
// console.log(animaisImg);

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section')


// console.log(gridSectionHTML[0]);
// console.log(gridSectionNode[0]);

gridSectionNode.forEach(function (item, index) {
  console.log(item, index);
})

const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach(item => {
  console.log(item)
})