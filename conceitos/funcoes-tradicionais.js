//
// função nomeada, com parametro, sem retorno
function exibirNomeDoDog(nome){
    console.log(nome)
}

//função nomeada, com parametro + valor default, sem retorno
function exibirPorteDoDog(porte = 'ND'){
    console.log(porte)
}

//função nomeada, com parametro, com retorno
function obterNomeDoDogFormatado(nome){
    return nome.toUpperCase()
}

exibirNomeDoDog("Pipoca")
exibirPorteDoDog()
console.log(obterNomeDoDogFormatado("Bailey Maria"))
