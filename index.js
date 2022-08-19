let cadastros = [];

const fillTable = () => {
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
  tabela.innerHTML = "";
  linhas.forEach((linha) => tabela.appendChild(linha));
};

const clearInputs = () => inputs.forEach((input) => (input.value = ""));

let btnDanger = document.querySelector("#btn-clear");
let inputs = document.querySelectorAll("input");
btnDanger.addEventListener("click", clearInputs);

const inputNome = document.querySelector("#nome");
const inputIdade = document.querySelector("#idade");

const updateButtons = () => {
  const isValid = inputNome.value !== "" && inputIdade.value !== "";

  const saveButton = document.querySelector("#btn-save");
  const clearButton = document.querySelector("#btn-clear");
  saveButton.disabled = !isValid;
  clearButton.disabled = !isValid;
};

inputNome.addEventListener("change", updateButtons);
inputIdade.addEventListener("change", updateButtons);

const saveButton = document.querySelector("#btn-save");
saveButton.addEventListener("click", () => {
  cadastros.push({
    id: cadastros.length + 1,
    nome: inputNome.value,
    idade: inputIdade.value,
  });
  clearInputs();
  fillTable();
});
