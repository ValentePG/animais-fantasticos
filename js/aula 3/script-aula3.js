const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'teste');
menu.classList.remove('azul');

if(menu.classList.contains('azul')){
  menu.classList.add('possui-azul');
} else {
  menu.classList.add('não-possui-azul');
}


const animais = document.querySelector('.animais');
console.log(animais.attributes['data-texto']);

const img = document.querySelector('img');

img.setAttribute('alt', 'É uma raposa')

const possuiAlt = img.hasAttribute('alt');

const carro = {
  portas: 4,
  andar: (km) => {
    console.log(`Andou ${km}`)
  }
}