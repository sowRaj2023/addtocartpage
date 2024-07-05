let unorderedListContainerEl = document.getElementById("unorderedListContainer");
let inputValEl = document.getElementById("inputVal");

function addButton(){
    let listVal = inputValEl.value;
    let listEl = document.createElement("li");
    listEl.textContent = listVal;
    listEl.classList.add("list");
    inputValEl.value = "";
    unorderedListContainerEl.appendChild(listEl);


}