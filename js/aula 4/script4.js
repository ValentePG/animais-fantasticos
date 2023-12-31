// Verifique a distância da primeira imagem
// em relação ao topo da página

const primeiraImagem = document.querySelector('img')
const rect = primeiraImagem.getBoundingClientRect();

const topo = rect.top
console.log(topo)

// Retorne a soma da largura de todas as imagens

function somaImagens() {

  const todasImagens = document.querySelectorAll('img')
  let somaWidth = 0
  todasImagens.forEach((imgs) => {
    somaWidth += imgs.offsetWidth 
  })
  console.log(somaWidth)
}

window.onload = function() {
  somaImagens();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');

links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if(linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, 'Possui boa acessibilidade')
  } else {
    console.log(link, 'Não possui boa acessibilidade')
  }
})


// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const small = window.matchMedia('(max-width: 720px)').matches;

if(small) {
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
}
