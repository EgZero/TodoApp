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

export default checkoutIcon