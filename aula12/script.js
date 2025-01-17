// Arrays (Concatenate)

let cart = ["Agua", "Carne", "Arroz", "Feijão"]
let numbers = [10, 20, 33, 40, 5, 13, true]
let y
//cart.push(numbers)
y = cart.concat(numbers)
console.log(y)

// Array methodos static Methods
let num1 = 10
let num2 = 20
let num3 = 30

let allNumbers = Array.of(num1, num2, num3)
console.log(allNumbers)

y = Array.from("122")
console.log(y)

// Arrays Nested Array

let numero = [10, 11, 12, [20, 21, 22], 30, 31, 32, [40, 41, 42]]
console.log(numero)

y = numero.flat()
console.log(y)

let list1 = [10, 20, 30, 40, 50]
let list2 = [90, 80, 70, 60, 50]
let listafinal

list2.pop()
let j = [list1, list2]
listafinal = j.flat()
listafinal.sort()

console.log(listafinal)
