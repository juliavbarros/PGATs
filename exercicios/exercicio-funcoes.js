import {DOGS, CATS}from './exercicio-dados.js'

function entregarPetiscos(listaDeDogs){
    listaDeDogs.forEach( dog => {
        console.log(`Entregando petisco para ${dog}`)
    }
        
    );
}

export {
    entregarPetiscos
}

//entregarPetiscos(DOGS)
//entregarPetiscos(CATS)