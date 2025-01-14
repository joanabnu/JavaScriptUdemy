// Date e hora (Date)
let agora = new Date()

console.log(agora)

let dataEspecifica = new Date(2000, 10, 26, 23, 35, 0)
console.log(dataEspecifica)

let dataString = new Date("2000/11/26 23:35")
console.log(dataString)

let data = new Date()
// O dia do Mes
// data.setDate(10) alterar o dia
console.log(data.getDate())
// O dia da Semana (0-6) onde 0 é dmingo
console.log(data.getDay())
// O mes (0-11) onde 0 é janeiro
//data.setMonth(0) alterar mes
console.log(data.getMonth())
// O ano
console.log(data.getFullYear())

// Data e Hora
// Criar um contador de dia para uma data especifica. Inicio, Fim, a diferença de dias entre essas datas

let inicio = new Date("2000/11/26")
let fim = new Date("2025/01/14")
let totalDias = (fim - inicio) / (1000 * 3600 * 24)
console.log(totalDias)

data = Intl.DateTimeFormat("de-DE").format(data)
console.log(data)

//data = Intl.DateTimeFormat("fr-FR").format(data)
//console.log(data)
