// Template Literals

let pName = "Joana"
let sName = "Maria"
let idade = "24"

console.log(
  `Meu nome é ${pName} meu sobrenome ${sName} e minha idade é ${idade}`
)

// String Methods
let texto = "Estou muito feliz pelo meu aprendizado em JavaScript "
console.log(texto.charAt(0)) // CharAt retonara o valor index da posiçao
console.log(texto.includes("JavaScript")) //includes retorna a palavra que foi pesquisada
console.log(texto.indexOf("feliz")) // indexOf retorna o index do valor que foi passado
console.log(texto.slice(0, 5)) // slice  retorna o valor do primeiro index ate ultimo que foi solicitado
console.log(texto.toLocaleUpperCase()) // Letra maiusculas
console.log(texto.toLocaleLowerCase()) // Letra convertera todo o texto para minuscula
console.log(texto.trim()) // trim : remove espaco em branco no inicio e final
console.log(texto.repeat(2)) // repeat vai repetir o valor
console.log(texto.replace("Estou", "Eu estou")) // replace localiza a palavra e adiciona outra.

// Number Methods
let num1 = 10
num1.toString(num1)
console.log(num1)
console.log(num1.toFixed(2))
console.log(num1.toPrecision(2))
console.log(num1.toString(2))

// Metodos Matematicos
let num2 = 2.5
console.log(Math.round(num2)) // coloca o numero inteiro
console.log(Math.ceil(num2)) // coloca o numero como inteiro para cima
console.log(Math.floor(num2)) // coloca o numero inteiro para baixo
console.log(Math.sqrt(num2)) // raiz quadrada
console.log(Math.pow(num2, 3)) // potencia
console.log(Math.abs(num2)) // valor absoluto
console.log(Math.round(Math.random() * 10 + 1))

// Objetos (Multiplos valores) - tesla

let carName = "Cybertruck"
let carRange = 340
let carMaxSpeed = 112
let carHorsePower = 600

let car = {
  carName: "Cybertruck",
  carRange: 340,
  carMaxSpeed: 112,
  carHorsePower: 600,
}
console.log(car)
