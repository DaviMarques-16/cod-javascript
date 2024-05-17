//Q9
function isfrasepalindromo(frase){
    var frasemin = frase.toLowerCase()
    var frasesemesp = frasemin.replace(/\s/g, '')
    var frasevet = frasesemesp.split('')
    var invertfrasevet = frasevet.reverse()
    var juntarfrase = invertfrasevet.join('')

    if(frasesemesp === juntarfrase){
        console.log('A frase é um palíndromo!')
    } else {
        console.log("A frase não é um palíndromo!")
    }
}
var frase1 = 'a base do teto desaba'
isfrasepalindromo(frase1)

//Q10
function contarpalavras(frase2){
    frase2 = frase2.trim()
    if (frase2 === ""){
        return 0
    }
    return frase2.split(/\s+/).length
}
var frase2ex = 'Essa demorou! Caramba.'
console.log('Número de palaras na frase é ' + contarpalavras(frase2ex))

//Q11
function mdc(n1, n2) {
    while (n2 !== 0) {
        var temporaria = n2;
        n2 = n1 % n2;
        n1 = temporaria;
    }
    return n1;
}
var n1 = 40
var n2 = 16
console.log(`O MDC entre ${n1} e ${n2} é ${mdc(n1,n2)}`)

//Q12
function encontrarmmc(n1, n2) {
    var maior = Math.max(n1, n2);
    var menor = Math.min(n1, n2);

   
    for (var w = maior; ; w += maior) {
        if (w % menor === 0) {
            return w;
        }
    }
}
var num1 = 15
var num2 = 10
console.log(`O MMC entre ${num1} e ${num2} é ${encontrarmmc(num1,num2)}`)

//Q13
function n1isarmstrong(n1){
    const digitos = n1.toString()
    const digito2 = digitos.length
    let soma = 0

    for (let y = 0; y < digito2; y++){
        const verificar = parseInt(digitos[y])
        soma += Math.pow(verificar, digito2)
    }
    
    return soma===n1
}

let numisarm = 153
console.log(n1isarmstrong(numisarm))

//Q14
function enesimofibonacci(ene){    
    var t1 = 0, t2 = 1
    if(ene == 0) return t1
    if(ene == 1) return t2

    for(var z = 2; z <= ene; z++){
        var temporaria2 = t2
        t2 = t1 + t2
        t1 = temporaria2
    }
    return t2
} 
var termo = 8
console.log(`O ${termo} termo da sequência é ${enesimofibonacci(termo)}`)

//Q15
function validarpangrama(frase3){
    frasemin = frase3.toLowerCase() 
    var letrasalfab = new Set()

    for (var i = 0; i < frase3.length; i++){
        var letter = frase3[i]
        if (letter >= 'a' && letter <= 'z'){
            letrasalfab.add(letter)
        }
    }
    return letrasalfab.size === 26
}
var frase3 = 'Screaming But daddy i love him'
console.log('A frase é um pangrama? ' + validarpangrama(frase3))

//Q16
function calcularCosseno(angrad) {
    return Math.cos(angrad);
}

var angulo = Math.PI / 6;
var cossenoAngulo = calcularCosseno(angulo);
console.log("O cosseno do angulo é " + cossenoAngulo);