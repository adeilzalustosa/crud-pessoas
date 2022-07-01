let cadastros = [
  { id: "001", nome: "Fulano de Tal", idade: "25" },
  { id: "002", nome: "Cumade Zé", idade: "75" },
  { id: "003", nome: "Genoveva", idade: "102" },
];
cadastros.push({ id: "004", nome: "Junior", idade: "1" });

const linhas = cadastros.map((cadastro) => {
  const tdId = document.createElement("td");
  tdId.classList.add("text-end");
  tdId.innerHTML = cadastro.id;

  const tdNome = document.createElement("td");
  tdNome.innerHTML = cadastro.nome;

  const tdIdade = document.createElement("td");
  tdIdade.classList.add("text-end");
  tdIdade.innerHTML = cadastro.idade;

  const tdEdicao = document.createElement("td");

  const editButton = document.createElement("button");
  editButton.classList.add("btn");
  editButton.classList.add("btn-primary");
  editButton.type = "button";
  editButton.innerText = "Editar";
  tdEdicao.appendChild(editButton);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("btn");
  deleteButton.classList.add("btn-danger");
  deleteButton.type = "button";
  deleteButton.innerText = "Excluir";
  tdEdicao.appendChild(deleteButton);

  const tr = document.createElement("tr");

  tr.appendChild(tdId);
  tr.appendChild(tdNome);
  tr.appendChild(tdIdade);
  tr.appendChild(tdEdicao);

  return tr;
});

const tabela = document.getElementById("person-list");
linhas.forEach((linha) => tabela.appendChild(linha));
