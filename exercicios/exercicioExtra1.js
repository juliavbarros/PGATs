const listaMista = [1,2,"j","u",0,9,8,"l","i",6,"a"]
const listaDeInteiros = filtrarInteiros(listaMista)

function filtrarInteiros(lista){
    return lista.filter(itemDaLista => typeof itemDaLista === 'number');
}
console.log(listaDeInteiros)