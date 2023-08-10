
import checkoutIcon from "./CheckoutIcon.js";
import removeIcon from "./removeIcon.js";

(() => {
    const createBtn = document.querySelector("[data-createBtn]");
    const createInput = document.querySelector("[data-createInput]");
    const cardList = document.querySelector("[data-cardList]");

    const createTask = (event) => {
        event.preventDefault();

        const textTask = createInput.value;
        if (textTask != "" && textTask != " "  ) {

            const cardItem = document.createElement("li");
            cardItem.classList.add("card");

            const cardContent = document.createElement("div");
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
    }

    createBtn.addEventListener("click", createTask);
})()