// Retorne no console todas as imagens do site

const animaisImg = document.querySelectorAll('img');
console.log(animaisImg);

// Retorne no console apenas as imagens que começaram com a palavra imagem

const animais = document.querySelectorAll('[src^="img/imagem"]');
console.log(animais);

// Selecione todos os links internos (onde o href começa com #)

const href = document.querySelectorAll('[href^="#"]');
console.log(href);

// Selecione o primeiro h2 dentro de .animais-descricao

const classe = document.querySelector('.animais-descricao');

const h2 = classe.querySelector('h2');

console.log(classe);
console.log(h2);

// Selecione o último p do site

const p = document.querySelectorAll('p');
console.log(p[p.length - 1]);
