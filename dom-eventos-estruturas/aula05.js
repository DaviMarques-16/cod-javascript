let titulo = document.querySelector('h1')
titulo.textContent = 'Manipulando CSS com js'
//ou .innerHTML

//mexer em atributos
let imagem = document.querySelector('#foto')
imagem.setAttribute('src', '../images/duck.jpg')
imagem.setAttribute('width', '300px')
imagem.setAttribute('height', '180px')

//MANIPULAR CSS
document.querySelector('h1').style.color = 'red'
titulo.style.color = 'blue'
titulo.style.backgroundColor = 'grey'
titulo.style.borderBottom = '2px solid aqua'
titulo.style.padding = '0.625rem'
titulo.style.borderRadius = '10px'

//definir classe de uma das box criadas.
let box = document.querySelectorAll('.box')
box[0].setAttribute('class', 'azul')
//box[0].removeAttribute('class')

//MODOS DE COR
let tela = document.querySelector('main')
let btnDark = document.querySelector('#dark')
let btnLight = document.querySelector('#light')

btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)

function modoDark() {
    console.log('modo dark')
    tela.classList.add('dark')
    tela.classList.remove('light')
}

function modoLight() {
    console.log('modo light')
    tela.classList.remove('dark')
    tela.classList.add('light')
}
