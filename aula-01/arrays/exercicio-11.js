// 3. reduce() é um método incrivelmente poderoso que nos permite combinar todo o resultado de uma array em
//  um único resultado.

// Vamos utilizar um reducer pra extrair todos os livros do seguinte conjunto de dados:

const dados = [
{
       "nome":"Tawany",
        "livros":[
         "Harry Potter",
         "1984"]
},
{
         "nome":"Suzelen",
          "livros":[
         "Capitões da Areia",
          "Menina bonita do laço de fita"]

}]

const dadosReduzidos = dados.reduce((acumulador, elementoAtual)=>{
    acumulador.concat(elementoAtual.livros);
})

console.log(dadosReduzidos);


// var numeros = [0, 1, 2, 3, 4, 5, 6];
// var total = numeros.reduce((acumulador, numero, indice, original) => {
// console.info(`${acumulador} total até o momento`);
// console.log(`${numero} valor atual`);
// console.log(`${indice} indice atual`);
// console.log(`${original} array original`);
// return acumulador += numero;
// }, 0)
// console.warn('acaboooou');
// console.log(total)