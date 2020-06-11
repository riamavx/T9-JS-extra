// const alunas = ["Od", "Nayla", "Sindi",
//   "Maria", "Liana", "Viviane",
//   "Lorena", "Nathalia",
//   "Raquel", "Raquel", "Marisa",
//   "Nathy", "Patricia",
//   "Jordana", "Ilza",
//   "Talisia", "Débora", "Tabita", "Gabrielli",
//   "Claudia", "Sara", "Jemima", "Suzelen", "Giulia", "Vanessa",
//   "Carol", "Ariane", "Millena", "Adela",
//   "Gabi Fernandes"];


//   const lista = document.getElementById('lista-alunas');

//   alunas.forEach((alunas)=>{

//     let item = document.createElement('li');
//     item.textContent = alunas
//     lista.appendChild(item)
//   })





//1. Crie uma função utilizando arrow function com dois parâmetros que retorne a soma deles.

const soma = (num1,num2)=>{
    return num1 + num2
}

console.log(soma(20,30))


// 2. Crie uma função chamada retornarBiografia que retorne o objeto abaixo:
// {nome: "Mulheres, raça e classe",
// descrição:"Da mesma forma que gênero é a maneira como a raça é vivida."
// }

// const retornarBiografia = ()=>{
//    nome:  "Mulheres, raça e classe",
//    descricao: "Da mesma forma que gênero é a maneira como a raça é vivida."

//    return `${nome} ${descricao}`
// }

const retornarBiografia = () =>({
    nome:  "Mulheres, raça e classe",
    descricao: "Da mesma forma que gênero é a maneira como a raça é vivida." 
    
 })

 console.log(retornarBiografia())
 

//  3. Reescreva a função abaixo utilizando
// Arrow Function 

const objetoUsuario = function (id, nome) => ({id: id, nome: nome})
console.log(objetoUsuario(123, 'Maria'))
const alunas = ["Od", "Nayla", "Sindi",
  "Maria", "Liana", "Viviane",
  "Lorena", "Nathalia",
  "Raquel", "Raquel", "Marisa",
  "Nathy", "Patricia",
  "Jordana", "Ilza",
  "Talisia", "Débora", "Tabita", "Gabrielli",
  "Claudia", "Sara", "Jemima", "Suzelen", "Giulia", "Vanessa",
  "Carol", "Ariane", "Millena", "Adela",
  "Gabi Fernandes"];

const lista = document.getElementById("lista-alunas");

alunas.forEach((aluna) => {
  let item = document.createElement("li");
  item.textContent = aluna;

  lista.appendChild(item)


})

