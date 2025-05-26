/**
 * Hands-on
Validador de idade mínima para adoção
Crie um script que verifique se um dog pode ser adotado com base na idade mínima definida,
 por exemplo, 2 anos.
Use os operadores adequados e exiba:
Nome do dog
Idade
Se está apto ou não para adoção
Extra: aplique uma regra com operador lógico para permitir que se o cão for de 
pequeno porte, pode ser adotado independente da idade.

exemplos: 
minimo = 2

idade 1 + porte M = nao
idade 2 + porte M = sim, pela idade
idade 2 + porte P = sim, pela idade
idade 1 + porte P = sim, pelo porte

 */

const nome = 'Pituka'
const idade = 4

const adocao = idade < 2 ? 'nao' : 'sim'

