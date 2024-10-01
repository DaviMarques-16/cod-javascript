// const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React']

// //MÉTODO MAP (percorre TODA a coleção[indicado nesses casos])

// cursos.map((elemento, indice) => {
//     console.log('Curso: ' + elemento + '. Posição: ' + indice)
// })

// //-----------------

// let c = cursos.map((el, i) => {
//     return el
// })

// console.log(c)

// //-----------------

/*let el = document.getElementsByTagName('div')
el = [...el]
console.log(el)

el.map((e, i) => {
    e.innerHTML = "folklore"
    console.log(e.innerHTML)
})
console.log(el)*/

// //-----------------

// const el2 = document.getElementsByTagName('div')
// const val = Array.prototype.map.call(el2, ({innerHTML}) => innerHTML)
// console.log(val)

// //-----------------

const convertInt = (e) => parseInt(e)

let num = ['1', '2', '3', '4', '5'].map(convertInt)
console.log(num)



