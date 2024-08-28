let produtos = ['Arroz', 'Feijão', 'Macarrão']
var codigos = Array(10, 20, 30)
let meses = ['Jan', 'Fev', 'Mar' , 'Abr']
var test = Array(10)
test[0] = 'oi'
test[9] = 'beeem?'

//Adicionar no final (push)
produtos.push("Açúcar", "Trigo")
codigos.push(40,50,60,70)
meses.push('Mai', 'Jun', '07')

//Remover do final (pop) [estourar]
produtos.pop()
codigos.pop()
meses.pop()

//Adicionar no início (unshift)
produtos.unshift('Uva', 'Maçã')

//Remover do inicio (shift)
produtos.shift()

//Remover em posição específica (splice)
//splice = emendar
//posição inicial, quantos remover
codigos.splice(1, 3)

//Copiar array slice = fatiar porção
//Posição inicial, quantos copiar
let meses1 = meses.slice() //cópia
let meses2 = meses.slice(0, 3)

//Tamanho de Array (a partir de 1)
//meses.length
//meses1.length

// spreed operator (copiar o conteúdo e adicionar)
let teste = [...produtos, 'Ovo', 'Pera']