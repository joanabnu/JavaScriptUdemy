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
