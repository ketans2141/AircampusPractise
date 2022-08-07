let input= document.querySelector("#input");
let addBtn= document.querySelector("#add_btn");

addBtn.addEventListener("click",addList)

function addList(e){
    console.log(e);
    let currentBtn=e.currentTarget;
    let currentInput=currentBtn.previousElementSibling;
    console.log(currentInput.value);

    let newEle=document.createElement("li");
    newEle.classList.add("toDo_List");
    // newEle.textContent=currentInput.value;

    let parrentList=document.querySelector("#parrent_List");
    parrentList.appendChild(newEle)



    const newElm = document.createElement('li');
    newEle.setAttribute("class", "row");
    newEle.innerHTML = `
    <li class="toDo_List">${input.value}</li>
    <button class="edit"><i class="fa-solid fa-pen"></i></button>
    <button class="del"><i class="fa-solid fa-trash"></i></button>
                            `;
}


