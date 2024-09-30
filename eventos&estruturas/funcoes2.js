//ARROW FUNCTION (funções lâmbidas)
//mecanismo para representar funções anônimas.

const soma = (v1,v2) => {
    return v1 + v2
}
console.log(soma(10,5))

//exemplo sem chaves (sem return)
const add = (n) => n + 10
console.log(add(10))

//-----------------------------------

//Funções aninhadas

const soma2 = (...valores) => {
    const somar = (val) => {
        let res = 0
        for (v of val) {
            res += v
        }
        return res
    }
    return somar(valores)
}

console.log(soma2(10,5,15))
//A função soma2 retorna o retorno da função somar

const multiplicação =  (...valores) => {
    const mult = (val) => {
        let res = 1
        for (v of val){
            res *= v
        }
        return res
    }
    return mult(valores)
}
console.log(multiplicação(5,10))

//---------------------------

//FUNÇÕES GERADORA
//retorno adiado até precisar dele.

function* cores() {
    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'
}

const itc = cores()

console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)

//---------------------------

function* perguntas() {
    const nome = yield 'Qual seu nome?'
    const esporte = yield 'Qual seu esporte fav?'
    return `Seu nome é ${nome} e seu esporte fav é ${esporte}`
}

const itp = perguntas()

console.log(itp.next().value)
console.log(itp.next('Davi').value)
console.log(itp.next('Judô').value)

//o retorno é dado somente ao final dos nexts
//---------------------------

function* contador() {
    let i = 0
    while(true){
        yield i++
    }
}

const itc2 = contador()

for(let i = 0; i<10; i++) {
    console.log(itc2.next().value)
}