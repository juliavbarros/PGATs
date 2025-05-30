/**
 * describe -> agrupador de testes 
 * it       -> implementacao de testes 
 * 
 * assertion/assercao
 * verificar se um comportamento está de acordo com o esperado
 * 
 */
import {exibirNomeDogFormatado} from '../conceitos/testes-de-unidade.js'
import assert from 'node:assert'

describe('Testes do Projeto', () => {
    it('deve exibir o nome do dog com letras maiusculas', () => {
        assert.strictEqual(exibirNomeDogFormatado('Mimosa'), 'MIMOSA')
        // verifique se o valor atual é igual é igual ao valor esperado

    })

    it('primeiro teste', () => {
        
    })

    it('segundo teste', () => {
        throw new Error()
    })
})