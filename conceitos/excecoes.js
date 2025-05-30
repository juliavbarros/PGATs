/**
 * 
 * tentar {
 * //conexao com banco(exemplo)
 * } pegar (erro/excecao) {
 * //salvar a excecao em algum lugar ...
 *  // exibir
 *
 * }
 * 
 * 
 * lançar um erro = throw
 * 
 */

try {
  console.log(`Tentando alimentar o pet`)

  //tentar conectar no banco
  //executar query
  throw new Error()
} catch (excecao) {
    console.log(excecao)
    console.log(excecao.name)
    console.log(excecao.message)

    // capturar a excecao
} finally {
    console.log(`Sempre serei executado`)

    //fechar a conexao com o banco (ao menos garantir que foi fechada)
}