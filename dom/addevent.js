const c3 = document.querySelector('.c3')
const c4 = document.querySelector('.c4')


const msg= () => {
    alert("Clicou!!!")
}

c3.addEventListener('click', () => {
    alert('agora com arrow function')
})  //(evento, função)

c4.addEventListener('click', (evt) => {
    alert('agora com arrow function')
    console.log(evt.target)
})  

//pegar o vetor de divs e aplicar uma classe.
const cursos = [...document.querySelectorAll('div')]

cursos.map((el) => {
    el.addEventListener('click', (evt) => {
    const el = evt.target
    el.classList.add("destaque")
    })
})

//evt.target retorna o elemento com sua classe e id, etc.


