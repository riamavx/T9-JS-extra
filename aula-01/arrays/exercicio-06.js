/*Separe a seguinte frase onde cada palavra será um item de um array. */

let frase = "Na programação, muitas vezes é errando que se aprende. Permita-se"

/*A forma que terá que ficar:*/

// let modificarFrase = ["Na", "programação,",
//   "muitas", "vezes", "é", "errando", "que",
//   "se", "aprende.", "Permita-se"]

/* Em seguida, verifique o lenght do array, a saída terá que ser 10*/


const splits = frase.split(' ', 10);

console.log(splits);