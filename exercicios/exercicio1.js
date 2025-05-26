const nome = "Pituka", raca = "vira-lata"
let idade = 1, peso = 1.2, adotado = false

let nameUpperCase = nome.toUpperCase()
let racaFirstletter = raca.charAt(0).toUpperCase() + raca.slice(1).toLowerCase()

const animal = [{
    nome: nameUpperCase,
    peso: peso,
    raca: racaFirstletter
}]

console.log(animal)