const nome = `Ada`
const peso = 11

const porte = peso <= 10 ? 'pequeno': 'medio'

console.log(`-------`)
console.log(`Nome: ${ nome }`)
console.log(`Peso: ${ peso }`)
console.log(`Porte: ${ porte }`)
console.log(`--------`)

//alternativa com a função (extra)

function classificarPortePorPeso(nome, peso){
    const porte = peso <= 10 ? 'pequeno': 'medio'

    console.log(`-------`)
    console.log(`Nome: ${ nome }`)
    console.log(`Peso: ${ peso }`)
    console.log(`Porte: ${ porte }`)
    console.log(`--------`)
}

classificarPortePorPeso('Pantera', 14.5)
classificarPortePorPeso('Bandite', 35)
classificarPortePorPeso('Rex', 8)