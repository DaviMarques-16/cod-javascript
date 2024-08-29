// Criar objeto
let pessoa= {
    nome :  'Davi',
    idade : 16,
    peso : 78,
    altura : 1.79
}

let produtos = {
    descricao : [],
    preco : []
}

const carros = {
    marca : ['Ford', 'Fiat', 'GM'],
    modelo: ['Ka', 'Uno', 'Corsa'],
    ano : [1999, 2005, 2010]
}

/*Acessar propriedade usando .
pessoa.nome 
pessoa.idade
pessoa.peso  */

//também dá ['chave']

let numquebrado = 27.8372623839

//  .toFixed(x)
// Limita casas decimais

console.log(numquebrado.toFixed(2))

//Alteração
pessoa.nome = "Davi Marques"
produtos.descricao = ['Arroz']
produtos.preco = [4.99] 

//Usando spreed para adicionar além do primeiro. (mesmo que seja const)
produtos.descricao = [...produtos.descricao, 'Feijão', 'Trigo']
produtos.preco = [...produtos.preco, 9.99 , 4.79]

carros.marca = [...carros.marca, 'WV']
carros.modelo = [...carros.modelo, 'Fusca']
carros.ano = [...carros.ano, '1979']