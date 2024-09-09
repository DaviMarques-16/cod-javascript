//WHILE = ENQUANTO

let frutas = ['Pera', 'Uva', 'Maça', 'Banana', 'Melancia']

//variavel contadora fora do laço
let contador = 0 
while(contador < frutas.length) {
    console.log(frutas[contador])
    contador++
}

//DO WHILE (realiza a ação pelo menos uma vez, mesmo que a condição não seja verdadeira)
let carros = ['Fusca', 'Brasília', 'Gurgel']

let iterador = 0

do {
    console.log(carros[iterador])
    iterador++
} while (iterador < carros.length)