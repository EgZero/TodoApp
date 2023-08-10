
    
const removeIcon = () =>{
    const i = document.createElement("i");
    i.classList.add("fas" , "fa-trash-alt" , "trashIcon" , "icon")
    i.addEventListener("click" , removeTask)
    return i
}

const removeTask = (event) =>{
    const element = event.target.parentElement
    element.parentElement.removeChild(element)
}

export default removeIcon