//  FUncoes de seta/flecha


// função nomeada, com parametro, sem retorno

const exibirNomeDoDog = (nome) => {
    console.log(nome)
}
 
//função nomeada, com parametro + valor default, sem retorno
const exibirPorteDoDog = (porte = 'ND') => {
    console.log(porte)
}

//função nomeada, com parametro, com retorno
const obterNomeDoDogFormatado = (nome) => {
    return nome.toUpperCase()
}

exibirNomeDoDog("Pipoca")
exibirPorteDoDog()
console.log(obterNomeDoDogFormatado("Bailey Maria"))
