//ESTRUTURA/LAÇO DE REPETIÇAO (FOR)
let carros = ['Fusca', 'Brasília', 'Gurgel']

// FOR = para faça
// i = iterador

for (let i = 1; i <= 5; i++) {
    document.write(i + ' ')
}

for (let i = 5; i >= 1; i--) {
    document.write('<br>' + i + '')
}

for (let i = 0; i < carros.length; i++) {
    document.write(`<li>${carros[i]}</li>`)
}

//FOREACH = para cada
let frutas = ['Pera', 'Uva', 'Maça', 'Banana', 'Melancia']

frutas.forEach(function(fruta, i) {
    document.write(`${i} ${fruta} <br>`)
})

carros.forEach(function(carro){
    document.write(`${carro} <br>`)
})