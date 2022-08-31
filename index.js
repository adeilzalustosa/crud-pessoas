let people = [];

var currentPerson = null;

const inputName = document.querySelector("#name");
const inputAge = document.querySelector("#age");

const btnSave = document.querySelector("#btn-save");
const btnClear = document.querySelector("#btn-clear");

const getPersonIndex = (person) =>
  people.findIndex((item) => item.id === person.id);

const generateId = () => rando(1, 9999).toString().padStart(4, "0");

const fillTable = () => {
  const rows = people.map((person) => {
    const tdId = document.createElement("td");
    tdId.classList.add("text-end");
    tdId.innerHTML = person.id;

    const tdName = document.createElement("td");
    tdName.innerHTML = person.name;

    const tdAge = document.createElement("td");
    tdAge.classList.add("text-end");
    tdAge.innerHTML = person.age;

    const tdEdit = document.createElement("td");

    const btnEdit = document.createElement("button");
    btnEdit.classList.add("btn");
    btnEdit.classList.add("btn-primary");
    btnEdit.type = "button";
    btnEdit.innerText = "Editar";
    btnEdit.addEventListener("click", () => {
      currentPerson = person;
      inputName.value = person.name;
      inputAge.value = person.age;
    });
    clearAll();
    tdEdit.appendChild(btnEdit);

    const btnDelete = document.createElement("button");
    btnDelete.classList.add("btn");
    btnDelete.classList.add("btn-danger");
    btnDelete.type = "button";
    btnDelete.innerText = "Excluir";
    btnDelete.addEventListener("click", () => {
      const index = getPersonIndex(person);
      if (index > -1) {
        people.splice(index, 1);
      }
      fillTable();
      clearAll();
    });
    tdEdit.appendChild(btnDelete);

    const tr = document.createElement("tr");
    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdAge);
    tr.appendChild(tdEdit);

    return tr;
  });

  const table = document.getElementById("person-list");
  table.innerHTML = "";
  rows.forEach((row) => table.appendChild(row));
};

const clearAll = () => {
  currentPerson = null;
  document.querySelectorAll("input")?.forEach((input) => (input.value = ""));
};

btnClear.addEventListener("click", clearAll);

const updateBtns = () => {
  const isValid = inputName.value !== "" && inputAge.value !== "";
  btnSave.disabled = !isValid;
  btnClear.disabled = !isValid;
};

inputName.addEventListener("input", updateBtns);
inputAge.addEventListener("input", updateBtns);

btnSave.addEventListener("click", () => {
  if (!currentPerson) {
    people.push({
      id: generateId(),
      name: inputName.value,
      age: inputAge.value,
    });
  } else {
    const index = getPersonIndex(currentPerson);
    if (index > -1) {
      currentPerson.name = inputName.value;
      currentPerson.age = inputAge.value;
      people.splice(index, 1, currentPerson);
    }
  }
  fillTable();
  clearAll();
});
