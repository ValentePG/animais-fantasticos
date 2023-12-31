// Adicione a classe ativo a todos os itens do menu

const itensMenu = document.querySelectorAll('.menu a')

itensMenu.forEach((item, index) => {
  item.setAttribute('class', 'ativo')
  console.log(item)
  // item.classList.add('ativo')
})
// itensMenu[0].classList.add('ativo')

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

itensMenu.forEach((item, index) => {
  if(index !== 0) {
    item.removeAttribute('class')
  }
  console.log(item);
})

// Verifique se as imagens possuem o atributo alt

const imgs = document.querySelectorAll('img')
imgs.forEach((img, index) => {
  if(img.hasAttribute('alt')) {
    console.log('contém alt')
  } else {
    console.log(`imagem ${index} não contém alt`)
  }
})

// Modifique o href do link externo no menu

const link = document.querySelector('a[href^="http"]')

link.setAttribute('href', 'http://www.google.com/')

console.log(link)