// informações
let estudante = 'Davi Marques'
let nacionalidade = 'Brasileira'
let idade = '16'
let peso = 78
let altura = 1.79

document.write(` <h2>Informações</h2>
Estudante ${estudante} <br>
Nacionalidade: ${nacionalidade} <br>
Idade: ${idade} anos <br>
Peso: ${peso} Kg <br>
Altura: ${altura}  m <br>`)

// Frase
const dia = 14
const mes = 6
const ano = 1888
const frase = "Não nego que, ao aconchegar ao meu corpo aquele corpo flexível e magnífico, tive uma singular sensação, uma sensação de homem roubado."
const autor = "Machado de Assis"

document.write(`<h2>Citação</h2>
${dia}/${mes}/${ano} <br>
    ${frase} <br>
    Autoria: ${autor}`)

// Array meses
mesesdoano = ['Janeiro', 'Fevereiro', 'Março', 'Abril', '...']
document.write(`<h2>Meses do ano em array</h2>
${mesesdoano}`)

//Objeto jogo
let jogo1 = {
    jogo: 'Minecraft',
    desenvolvido: 'Mojang',
    ano: 2011
}

document.write(`<br><h2>Objeto jogo</h2>
Jogo ${jogo1.jogo} <br>
Desenvolvido por: ${jogo1.desenvolvido} <br>
Ano de lançamento: ${jogo1.ano}`)