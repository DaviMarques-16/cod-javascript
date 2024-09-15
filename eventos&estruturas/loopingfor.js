/*//ESTRUTURA/LAÇO DE REPETIÇAO (FOR)
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
})*/

//FOR IN (percorre o vetor mais facilmente)
let num = [0,10,20,30,40,60,60]

for(n in num){
    console.log(num[n])
}

//FOR OF (pega diretamente os itens da coleção)
for(n of num){
    console.log(n)
}