function carregou() {
    console.log("A página carregou!")
}

function focou() {
    console.log('Foco no título')
}

function rolouPagina() {
    console.log('rolou página.')
}

function focoNoCampo() {
    console.log("foco no campo de texto")
}

function semFocoNoCampo() {
    console.log("saiu o foco do campo de texto")
}


let letras = document.querySelector('input[type=text]')
function avisarQueTeclou() {
    let numLetras = 1
    console.log('Está teclando' + (letras.value.length + numLetras))
}

let botao1 = document.querySelector('#btn1')
let botao2 = document.querySelector('#btn2')
let botaoEnviar = document.querySelector('#btn3')


//NO addeventlistener, não se usa o prefixo on.
botao1.addEventListener('mouseover', function() {
    console.log('Foco no botão 1')
})

//o blur é quando se perde o foco
botao2.addEventListener('blur', function() { 
    console.log('Foco no botão 2')
})

//event = evento disparado pelo submit
//prevenção do comportamento padrão
botaoEnviar.addEventListener('click', function (event) {
    event.preventDefault()
    console.log("Clicou no botão enviar!!!")
})
