function contarVogais(texto) {
    return texto.toLowerCase().split('').filter(letra => ['a','e','i','o','u'].includes(letra)).length;
}

const textoExemplo = "Júlia Valente Barros";
console.log(contarVogais(textoExemplo))