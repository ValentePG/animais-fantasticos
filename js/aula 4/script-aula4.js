const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
const animaisTopo = listaAnimais.offsetTop;
const animaisEsquerda = listaAnimais.offsetLeft;
// console.log(animaisTopo);
// console.log(animaisEsquerda);

const primeiroh2 = document.querySelector('h2')

const rect = primeiroh2.getBoundingClientRect();

console.log(rect.top);

if(rect.top < 0) {
  console.log('Passou do elemento')
}

console.log(
  window.innerWidth,
  window.innerHeight,
  window.outerWidth,
  window.outerHeight
);

const small = window.matchMedia('(max-width: 600px)');

if(small.matches) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}