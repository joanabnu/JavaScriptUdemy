// Operadores Comparação

// Igualdade Solta(dado)
console.log(3 == "3")

// Igualdade Estrita (dado e tipo)
console.log(3 === 3)

// Desigualdade solta (dado)
console.log(3 != 3)

// Desigualdade Estrita (dado e tipo)
console.log(3 !== "3")

console.log(8 > 5) // maior que
console.log(8 < 5) // menor que
console.log(5 >= 5) // Maior ou igual
console.log(5 <= 5) // menor ou igual

// coerção de tipo é um atribuição forcado a coerçao converte automaticamente para string
let coercao
coercao = 3 + "5"
// Para ser corrigido deve passar para number
coercao = 3 + Number("5") // ocorre somente com sinal +
// Qualquer forma (EX; Subtração - Multiplicaçao * Divisao / Resto da divisao : %) que NÃO TENHA O SINAL DE SOMA + ele converte para numero
coercao = "5" - "4" // Converte automaticamente para Number
coercao = "5" * "4" // Converte automaticamente para Number
coercao = "5" / "4" // Converte automaticamente para Number
console.log(coercao, typeof coercao)

let firstName = "Joana"
let lastName = "Maria"
console.log(firstName, lastName)
console.log(firstName + " " + lastName) // concatenação com sinal de +
console.log(`${firstName} ${lastName}`) // templetes litorel atualização desde 2015
