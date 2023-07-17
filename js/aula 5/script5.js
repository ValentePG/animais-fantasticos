// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links


const internos = document.querySelectorAll('a[href^="#"')
console.log(internos)

internos.forEach((interno) => {
  interno.addEventListener('click', clickInterno)
})

function clickInterno(event) {
  event.preventDefault()
  internos.forEach((interno) => {
    interno.classList.remove('ativo');
  })
  event.target.classList.add('ativo')
}

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll('body *');

function handleElemento(event) {
  event.currentTarget.remove();
}

// todosElementos.forEach((elemento) => {
//   elemento.addEventListener('click', handleElemento)
// })


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function handleKeyboard(event) {
  console.log(event.key)
  if(event.key === 't') {
    document.documentElement.classList.toggle('textomaior');
  }  
}

window.addEventListener('keydown', handleKeyboard)
