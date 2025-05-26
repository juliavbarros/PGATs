/**
 && - E /And
 || - OU /Or
 ! - não/ not

 */

 // && - e/and
 const nomeDog = "Pipoca"
 const nomePossuiApenasUmaPalavra = nomeDog.split("").length ===1
 const nomePossuiAteDezCaracteres = nomeDog.length <= 10

 console.log(nomePossuiApenasUmaPalavra && nomePossuiAteDezCaracteres)

// || - OU / OR (Uma das condições precisa ser verdadeira) muito utilizado em condicionais
const dog = {
    adotado: true,
    peso: 5.3
    
} 

console.log(!dog.adotado || dog.peso < 10) //verdadeiro
console.log(true || true) // verdadeiro
console.log(true || false) // verdadeiro
console.log(false || true) // verdadeiro
console.log(false || false) //falso

// ! - Não /Not
console.log(true) //verdadeiro
console.log(!true)

