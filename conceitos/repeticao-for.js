/**
 *  sabe a quantidade de repeticoes que irá fazer
 * para faca 
 * contador, condicao; manipulaco do contador (incremento/decremento)
 */
const quantidadeCalculada = 3
for(let quantidadeDePetiscos = 1; quantidadeDePetiscos <= quantidadeCalculada; quantidadeDePetiscos++){
    console.log(`Dando o petisco de nº ${quantidadeDePetiscos}`)
}

const gatos = ['Lessie', 'Pony', 'Fumaca']

for(let indice = 0; indice < gatos.length; indice++){
    console.log(`Dando o petisco para ${gatos[indice]}`)

}


for(let quantidadeDePetiscos = 1; quantidadeDePetiscos <= quantidadeCalculada; quantidadeDePetiscos++){
    for(let indice = 0; indice < gatos.length; indice++){
        console.log(`Dando o petisco para ${gatos[indice]}`)
    
    }

    console.log(`Dando o petisco de nº ${quantidadeDePetiscos}`)
}

