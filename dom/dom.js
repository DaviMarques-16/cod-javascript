//DOM = document object model
//Árvore com elementos desde o navegador, o documento e cada elemento html que formam os conteúdos.

/* Para manipular:
indica qual objeto usar
chama um método (função) para selecionar ele, seus dados,
trazer infs etc. */

//.querysselector
//por tag, id ou .classe
let titulo = document.querySelector('#titulo')

/*.textContent
propriedade ou atributo que serve para acessar ou alterar
conteúdo de um elemento que foi selecionado.*/
titulo.textContent = 'DOM'

/*.queryselectorAll()
selecionar todos elementos com base na tag, id ou .class
*/ 
let testando = document.querySelectorAll('.box')
document.write(testando[0].textContent)
document.write(testando[1].textContent)
document.write(testando[2].textContent)

//Existem:
//.getElementByTagName()
//.getElementById()
//.getElementByClassName()
