let titulo = document.querySelector('h1')
titulo.textContent = 'Funções no Java Script'
let box = document.querySelectorAll('box')

//FUNÇÕES SEM PARÂMETROS E SEM RETORNOS. (procedimento)

function olaFunctions() {
    document.write('Função sem retorno. <br>')
}

//FUNÇÕES SEM PARÂMETROS E COM RETORNO. (função)

function olaFunctions2() {
    return 'Funções com retorno utilizadas assim! <br>'
}

//Executá-las:

olaFunctions()
document.write(olaFunctions2()) //o return obriga o comando de saída.

let x = 10
let y = 15
let mensagem = 'Jesus é o caminho'

//FUNÇÕES COM PARÂMETROS E SEM RETORNO. (procedimento)
function somar(a, b) {
    document.write(a + b + '<br>')
}

//FUNÇÕES COM PARÂMETROS E COM RETORNO. (função)
function somar2(c, d) {
    return c + d
}

//executálas:
somar(x, y)
somar(10, 5)

document.write(`<p>${somar2(x, y)} </p><br>`)
document.write(`<p>${somar2(5, 2)} </p><br>`)

//FUNÇÃO ANÔNIMA
//PODE OU NÃO TER PARÂMETROS OU RETORNOS
//passar uma função como parâmetro dentro de outra (ex: addeventlistener)
titulo.addEventListener('click', function () {
    console.log('Clicou no título!')
})

//ARROW FUNCTION!
//nome da função é o nome da constante
//1 acão = chave opcional
//2 ações = chaves obrigatórias
//não precisa de nome, nem de retorno
const olaArrowFunction = () => '<p>Funções Arrows são interessantes pra caramba. </p>'

document.write(olaArrowFunction())
