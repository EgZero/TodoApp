(() =>{
    
const createBtn = document.querySelector("[data-createBtn]");
const createInput = document.querySelector("[data-createInput]");
const taskCard = document.querySelector("[data-taskContainer]");

const createTask = (event) => {
    event.preventDefault();

    const textTask = createInput.value;
    const cardList = document.querySelector("[data-cardList]")
    const cardItem = document.createElement("li");
    cardItem.classList.add("card")

    const cardContent= document.createElement("div");
    cardContent.appendChild(checkoutTask());

    const cardTitle = document.createElement("span");
    cardTitle.classList.add("task");
    cardTitle.innerHTML = textTask;
    cardContent.appendChild(cardTitle);
    cardItem.appendChild(cardContent);

    createInput.value = "";
    const cardTextContent = `
                    <i class="fas fa-trash-alt trashIcon icon"></i>`;
    cardItem.appendChild(cardContent);

    cardList.appendChild(cardItem);
}

createBtn.addEventListener("click", createTask);

const checkoutTask = ()=>{
    const i = document.createElement("i");
    i.classList.add("far" , "fa-check-square" , "icon")
    i.addEventListener("click" , checkTask)
    return i
}

const checkTask = (event)=>{
    const element = event.target;
            element.classList.toggle("far")
            element.classList.toggle("fas")
            element.classList.toggle("completeIcon")
}
})()