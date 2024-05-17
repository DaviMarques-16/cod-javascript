//Q1
function soma(n1,n2){
    var resultado = n1 + n2
    console.log(`O resultado de ${n1} + ${n2} é ${resultado}`)
}
    soma(10,12)

//Q2
function parOrimpar(n1){
    var pORi = false 
    if (n1 % 2 == 0){
        pORi = true
        console.log(pORi)
    } else {
        console.log(pORi)
    }
}
    parOrimpar(19)

//Q3
function Factorial(n1){
    for (fat=1; n1>1; n1--){
        fat = fat*n1
    }    
    console.log(fat)
}
Factorial(5)

//Q4
function ispalindromo(palavra){
    var palavravet = palavra.split('')
    var invert = palavravet.reverse()
    var juntar = invert.join('')
    if (palavra == juntar){
        console.log("É PALÍNDROMO!")
    } else {
        console.log("Não é palíndromo.")
    }
}
ispalindromo('reviver')

//Q5
function contwords(palavra){
    var numvogais = 0
    var palavravet = palavra.split('')
    for (n = 0; n <= palavravet.length-1; n++){
        if(palavravet[n] == "a" || palavravet[n] == "e" ||
        palavravet[n] == "i" || palavravet[n] == "o" || palavravet[n] == "u")
        numvogais++
    }
    console.log(numvogais + " VOGAIS nessa palavra.")
}
contwords('amoreco')

//Q6
function invertString(palavra){
    var stringinvet = palavra.split('')
    var contrario = stringinvet.reverse('')
    var juncao = contrario.join('')
    return juncao
    }
var palavra = 'alecrim'
console.log("caracteres inversos: " + invertString(palavra))

//Q7
function areatriangulo(base,altura){
    var area = (base*altura)/2
    return area   
}
console.log("A área do triâgulo é " + areatriangulo(10,16) + ' cm2')

//Q8
function isprimo(n1){
    if (n1 <= 0) return false
    let cont = 0
    for(var i = 1; i <= n1; i++){
        if (n1 % i == 0){
            cont++
        }
    }
    if (cont == 2){
        return true
    } else {
        return false
    }
}
var primo = isprimo(11);
console.log(primo);