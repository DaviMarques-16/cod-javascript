const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const btn = document.querySelector('#btn_copiar')
const btn2 = document.querySelector('#btn_voltar')
const todosCursos = [...document.querySelectorAll('.curso')]

todosCursos.map((el)=>{
    el.addEventListener('click',(evt)=>{
        const curso = evt.target
        curso.classList.toggle("selecionado")
    })
})

//toggle =  elemento tem a classe selecionado?
// se n tem, adiciona.
// se tem, retira.

//ao clicar no botão, ele vai selecionar os que tem a classe.
btn.addEventListener('click', ()=>{
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    cursosSelecionados.map((el) => {
        caixa2.appendChild(el)
    })
})


//RETIRAR DA CAIXA2

btn2.addEventListener('click', ()=>{
    const cursosNaoSelecionados = [...document.querySelectorAll('.curso:not(.selecionado)')]
    cursosNaoSelecionados.map((el)=>{
        caixa1.appendChild(el)
    })
})

//appendChild = anexar o filho que estar vindo do el na caixa 2.
