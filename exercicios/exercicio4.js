const nome = 'Mel'
const peso = 10
const estoque = 30

const gramaPorDia = peso * 30
const duracaoEstoque = estoque / gramaPorDia

console.log(`Nome do Dog: ${nome}`)
console.log(`Peso: ${peso}`)
console.log(`Gramas por dia: ${gramaPorDia}`)
console.log(`O estoque vai durar: ${duracaoEstoque}`)

// alternativa com função 

function calcularConsumoDeRacao(nome, peso, estoque){
    console.log(`Nome do Dog: ${nome}`)
    console.log(`Peso: ${peso}`)
    console.log(`Gramas por dia: ${gramaPorDia}`)
    console.log(`O estoque vai durar: ${duracaoEstoque}`)

}

calcularConsumoDeRacao('Mel', 1, 2000)