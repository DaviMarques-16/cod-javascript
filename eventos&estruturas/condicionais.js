//ESTRUTURAS CONDICIONAIS IF & ELSE.
let sit1 = document.querySelector('#sit1')
let sit2 = document.querySelector('#sit2')
let sit3 = document.querySelector('#sit3')
let escolha = document.querySelector('#escolha')


let notaFinal1 = 3
let notaFinal2 = 8
let notaFinal3 = 10

//IF
if (notaFinal1 >= 7) {
    sit1.textContent = 'APROVADO'
}

//IF ELSE
if (notaFinal1 >= 7) {
    sit1.textContent = 'APROVADO'
} else {
    sit1.textContent = 'REPROVADO'
}

//IF TERNARIO
notaFinal2 >= 7? sit2.textContent = 'PASSOU' : sit2.textContent = 'FICOU'

//IF ENCADEADO OU ANINHADO
if(notaFinal3 >= 7) {
    sit3.textContent = 'APROVADO'
} else if (notaFinal3 <= 3) {
    sit3.textContent = 'REPROVADO'
} else {
    sit1.textContent = 'RECUPERAÇÃO'
}

//SWITCH (caso)
//let situacao = ''
//let situacao = 'APROVADO'
//let situacao = 'REPROVADO'
let situacao = 'RECUPERAÇÃO'

switch(situacao) {

    case 'APROVADO': 
        escolha.textContent = 'Passou de ano'
        break

    case 'REPROVADO': 
        escolha.textContent = 'NÃO passou de ano.'
        break

    case 'RECUPERAÇÃO': 
        escolha.textContent = 'Ainda há chance, estude!!!'
        break

    default:
        escolha.textContent = 'Sem notas cadastradas'
        //default não tem break
}
