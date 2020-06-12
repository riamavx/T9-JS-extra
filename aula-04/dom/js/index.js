const formulario = document.querySelector(".lista__form");
const item = document.getElementById('item');
const valor = document.getElementById('valor');
const data = document.getElementById('data');
const table = document.querySelector('table');
const tBody = document.createElement('tbody');
table.appendChild(tBody);

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  if (!item.value.trim() && !valor.value.trim() && !data.value.trim()) {

    return alert("Preencha todos os campos");
  };

  if (!item.value.trim()) {
    item.focus()
    return alert("Informe o item");
  };
  if (!valor.value.trim()) {
    valor.focus()
    return alert("Informe o valor");

  };

  if (!data.value.trim()) {
    data.focus()
    return alert("Informe a data");
  };



  const linha = document.createElement('tr');
  const coluna1 = document.createElement('td');
  const coluna2 = document.createElement('td');
  const coluna3 = document.createElement('td');
  const btnExcluir = document.createElement('button')

  coluna1.textContent = item.value;
  coluna2.textContent = valor.value;
  coluna3.textContent = data.value;
  btnExcluir.textContent = "X"

  tBody.appendChild(linha);
  linha.appendChild(coluna1);
  linha.appendChild(coluna2);
  linha.appendChild(coluna3);
  linha.appendChild(btnExcluir);

  btnExcluir.addEventListener('click', ()=>{
    linha.remove();
  })

  formulario.reset() // <3
































  //   if(item.value && valor.value && data.value ){
  //     const linha = document.createElement('tr');
  //   const coluna1 = document.createElement('td');
  //   const coluna2 = document.createElement('td');
  //   const coluna3 = document.createElement('td');

  //   coluna1.textContent = item.value;
  //   coluna2.textContent = valor.value;
  //   coluna3.textContent = data.value;

  //   tBody.appendChild(linha);
  //   linha.appendChild(coluna1);
  //   linha.appendChild(coluna2);
  //   linha.appendChild(coluna3);

  //   formulario.reset() // <3

  //   }
  //   alert("Preencha todos os campos, princesa :D")


});