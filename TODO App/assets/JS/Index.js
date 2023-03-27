(() =>{
    
const createBtn = document.querySelector("[data-createBtn]");
const createInput = document.querySelector("[data-createInput]");
const cardList = document.querySelector("[data-cardList]");

const createTask = (event) => {
    event.preventDefault();

    const textTask = createInput.value;
    const cardItem = document.createElement("li");
    cardItem.classList.add("card");

    const cardContent= document.createElement("div");
    cardContent.appendChild(checkoutIcon());

    const cardTitle = document.createElement("span");
    cardTitle.classList.add("task");
    cardTitle.textContent = textTask;
    cardContent.appendChild(cardTitle);
    cardItem.appendChild(cardContent);

    createInput.value = "";
    cardItem.appendChild(removeIcon());
    cardList.appendChild(cardItem);
}

createBtn.addEventListener("click", createTask);

const checkoutIcon = ()=>{
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

const removeIcon = () =>{
    const i = document.createElement("i");
    i.classList.add("fas" , "fa-trash-alt" , "trashIcon" , "icon")
    i.addEventListener("click" , removeTask)
    return i
}

const removeTask = (event) =>{
    const element = event.target.parentElement
    cardList.removeChild(element)
}
})()