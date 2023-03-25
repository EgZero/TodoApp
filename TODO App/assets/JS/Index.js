const createBtn = document.querySelector("[data-createBtn]");
const createInput = document.querySelector("[data-createInput]");

const createTask = (event) => {
    event.preventDefault();
    console.log(createInput.value);
}

createBtn.addEventListener("click", createTask);