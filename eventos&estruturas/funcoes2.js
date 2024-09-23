//ARROW FUNCTION (funções lâmbidas)
//mecanismo para representar funções anônimas.

const soma = (v1,v2) => {
    return v1 + v2
}
console.log(soma(10,5))

//exemplo sem chaves (sem return)
const add = (n) => n + 10
console.log(add(10))