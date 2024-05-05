//Q13a
function acessoaosite(){
    alert('Bem vindo ao site!')
}
acessoaosite()
//Q13b
var aplicação = "SiteInf"
function mostrarmsg(){
    console.log(`Acesso à aplicação: ${aplicação}`)
    alert(`Bem vindo ao ${aplicação}`)
}
mostrarmsg()
//Q13c
function mostrardobro(n1){
    alert(`O dobro de ${n1} é ${n1*2}`)
}
mostrardobro(20)

//Q13d
function calcmedia(n1,n2,n3,nome){
    var media = (n1+n2+n3)/3
    alert(`${nome}, sua média é ${media}`)
}
calcmedia(8,7,9,"Davi")

//Q14e
let Alunos = [
    {nome: "Leo", idade: 15, skills: ["JavaScript"]},
    {nome: "Marcos", idade: 14, skills: ['Python']},
    {nome: "Teteu", idade: 17, skills: ['Ruby']},
    {nome: "Tati", idade: 16, skills: ["C++"] },
    { nome: "lenlen", idade: 17, skills: ["Java"]}
    ];
    function achar(funcao, skill) {
     for (let Alunos of funcao) {
      if (Alunos.skills.includes(skill)) {
       console.log(Alunos);
            }
            else{
       console.log("não encontrado")
            }
        }
    }
    achar(Alunos, "Python");
//q1
const estudante = {
    escola: "Paulo Petrola",
    curso: "Informática",
    serie: "2 ano",
    nome: "Davi",
    idade: 16
}
console.log(estudante.escola, estudante.curso, estudante.serie, estudante.nome, estudante.idade)

//q2
const mensagem = `Estudante: ${estudante.nome}, Escola: ${estudante.escola},
Curso: ${estudante.curso}, série: ${estudante.serie}, idade: ${estudante.idade}`

//q3
var peso = 86
var altura = 1.84
var imc = peso/(altura)**2

//Q4a
const idadedomoto = 23
console.log(idadedomoto > 18? 'Pode Dirigir!' : 'Não pode Dirigir!')

//Q4b
var pontuação = 890
console.log(pontuação > 1000? 'Usuário VIP' : 'Usuário Normal')

//Q5 e Q6
var habilitacao = true
console.log(idadedomoto >= 18 && habilitacao == true? 'Pode dirigir' : 'Nõo pode dirigir')

//Q7
var imc = 31
if (imc < 18.5) {
    console.log('IMC no grau abaixo do normal')
}
else if (imc < 24.9) {
    console.log('IMC no grau Normal')
}
else if (imc < 29.9) {
    console.log('iMC no grau de Sobrepeso')
}
else if (imc < 35) {
    console.log('IMC no grau de Obesidade.')
}

//Q8
switch (imc < 18.5) {
    case imc < 18.5:
        console.log('IMC abaixo do normal.')
    break;
}
switch (imc < 24.9) {
    case imc < 24.9:
        console.log('IMC Normal.')
    break;
}
switch (imc < 29.9) {
    case imc < 29.9:
        console.log('IMC Sobrepeso.')
    break;
}
switch (imc < 35) {
    case imc < 35:
        console.log('IMC Obesidade.')
    break;
}

//Q9a
var valor = 5000
while (valor < 10000) {
    valor = valor + (valor * 0.3)
    console.log("O salário parcial é ", valor)
}

//Q9b
var numero = 0
while (numero < 60) {
    numero++
    if (numero % 2 != 0) {
        console.log(numero)
    }
}

//Q10a
for (var p = 0; p <= 10; p++) {
    if (p % 2 == 0) {
        console.log(p, "é par!")
    } 

//Q10b
for (var t = 1; t <=10; t++) {
    console.log(t, "x 5 = ", t*5)
}

//Q11
var anoatual = 2024
var nascimento = 1989
var idade = anoatual - nascimento

console.log(idade > 16? 'Pode votar' : 'Não pode votar!')

//Q11b
var n1 = 20
var n2 = 20
var n3 = 100

console.log(`A soma dos valores é ${n1+n2+n3}, a média ${(n1+n2+n3)/3} e o produto ${n1*n2*n3}`)
console.log(`${Math.max(n1,n2,n3)} é o max e ${Math.min(n1,n2,n3)} é o mínimo.`)

if (n1==n2 || n2==n3 || n3==n1 || n3==n2) {
    console.log("Você repetiu algum número na digitação!")
}

//Q11c
var Tc = 40
var Tf = (Tc * 9/5) + 32

console.log(`${Tc}C em Fahrenheit é ${Tf}`)

//Q11d
var preço = 275
var parcelas = 3

if (parcelas == 1) {
    preço = preço - (preço*0.025)
}
else if (parcelas <=5) {
    preço = preço
}
else if (parcelas < 10) {
    preço = preço + (preço * 0.06)
}
else if (parcelas <= 15) {
    preço = preço + (preço * 0.13)
}

console.log(`O valor de cada parcela é ${preço/parcelas} e custará ${preço}`)
}

//Q12a
for(n=100; n<=110; n++){
    console.log(n)
}

//Q12b
n = 10
for(c = 1; c <= n; c++){
    console.log(c)
}

//Q12c
var z = 18
if(z>0 && z <=10){
    for (tab = 1; tab <=10; tab++) {
        console.log(tab, "x", z, "=", tab*z)}
} else {console.log("num > 10")
}

//Q12d
for(ordem = 1; ordem <= 10; ordem++){
    console.log(ordem)
}
console.log("---------")
for(ordem = 10; ordem  >= 1; ordem--){
    console.log(ordem)
}
