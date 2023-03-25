const createBtn = document.querySelector("[data-createBtn]");
const createInput = document.querySelector("[data-createInput]");
const taskCard = document.querySelector("[data-taskContainer]");

const createTask = (event) => {
    event.preventDefault();
    
    const textTask = createInput.value;
    const cardList = document.querySelector("[data-cardList]")
    const cardItem = document.createElement("li");

    createInput.value = "";
    const cardContent = `<div>
                    <i class="far fa-check-square icon"></i>
                    <span class="task">${textTask}</span>
                    </div>
                    <i class="fas fa-trash-alt trashIcon icon"></i>`;
    cardItem.classList.add("card")
    cardItem.innerHTML = cardContent;

    cardList.appendChild(cardItem);
}

createBtn.addEventListener("click", createTask);