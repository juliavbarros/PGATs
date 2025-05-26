const porte = 'medio'
const nome = 'Pantera'
const tempo = 30

let mensagem

switch (porte){
    case 'pequeno':
        atividade = `brincar dentro de casa`
        console.log()
        break
    case 'medio':

        atividade = `caminhada no quarteirão`
        console.log()
        break
    case 'grande':
        atividade = `correr no parque`
        console.log()
        break
    default:
        atividade = `porte invalido`
        
}

if (tempo < 15) {
    mensagem = `atividade rápida`
} else if (tempo <= 30) {
    mensagem = `tempo ideal`
} else if (tempo > 30) {
    mensagem = `hora da diversão`
}

console.log(`${ mensagem }: [${ atividade }]`)