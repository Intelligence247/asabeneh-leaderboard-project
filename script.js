let p = document.querySelector('p')

const xx = new Date()
console.log(`${xx.toLocaleDateString('month', { month: 'long' })} ${xx.getDate()},${xx.getFullYear()}, ${xx.getHours()}:${xx.getMinutes()}:${xx.getSeconds()}`)

let add = document.querySelector('#add')
let firstname = document.querySelector('#firstname')
let lastname = document.querySelector('#lastname')
let country = document.querySelector('#country')
let score = document.querySelector('#score')




