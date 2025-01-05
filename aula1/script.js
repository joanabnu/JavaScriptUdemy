alert("cheguei")

console.log("joana")
console.warn("ERRO 300")
console.error("ERRO 550") // mensagem de erro vermelho

console.group("App") // inicio do grupo
console.log("Joana")
console.warn("Erro 300") // Mensagem de erro em amarelo
console.groupEnd() // final do grupo

// Variaveis
// var(antigo) let(novo) const
// camelCase

let firstName = "Joana"
let lastName = "Maria"
let age = 24
console.log(firstName, lastName, age)

const calcTax = 0.7
console.log(calcTax)

// Data Types
// primitive - reference
// string
firstName = "Joana"
console.log(firstName, typeof firstName)
// Number

// Boolean
let isadult = false
// null
let address = null
console.log(address, typeof address)
// undefined
let color
console.log(color, typeof color)

// symbol
let id = Symbol("id")
let meuObjeto = {
  [id]: 123456,
}

console.log(meuObjeto[id])

let num1 = "10"
let num2 = "2"
console.log(num1 + num2)

// reference Data Types
let number = [10, 20, 30, 35, 50]
console.log(number, typeof number)

function myName() {
  console.log("Andre")
}
console.log(myName, typeof myName)

//Date
let agora = new Date()
console.log(agora)
