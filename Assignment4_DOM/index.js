// let input= document.querySelector("#input");
// let addBtn= document.querySelector("#add_btn");
// let delBtn=document.querySelector(".del");
// addBtn.addEventListener("click",addList)

// function addList(e){
//     console.log(e);
//     let currentBtn=e.currentTarget;
//     let currentInput=currentBtn.previousElementSibling;
//     console.log(currentInput.value);

//     let newEle=document.createElement("li");
//     newEle.classList.add("toDo_List");
//     // newEle.textContent=currentInput.value;

//     let parrentList=document.querySelector("#parrent_List");
//     parrentList.appendChild(newEle)



//     const newElm = document.createElement('li');
//     newEle.setAttribute("class", "row");
//     newEle.innerHTML = `
//     <li class="toDo_List">${input.value}</li>
//     <button class="edit"><i class="fa-solid fa-pen"></i></button>
//     <button class="del" id="del_btn" onclick="removeContent(this)"><i class="fa-solid fa-trash"></i></button>
//                             `;
// }

// // const removeRow=(e)=>{
// //     if(e.target.id==='del_btn')
// //     e.target.parentElement.parentElement.remove();
// // }

// function removeContent(currElement){
//     console.log(currElement)
//     // currElement.previousElementSibling.remove();
//     // currElement.remove();

//     currElement.previousElementSibling.previousElementSibling.remove();
    
// }

// delBtn.addEventListener('click',removeContent);



let input= document.querySelector("#input");
let storeData=document.querySelector(".storeData");
let completed=document.querySelector(".completed")
let addBtn= document.querySelector("#add_btn");

addBtn.addEventListener("click",function(e){
    setTimeout(()=>{
        input.value="";
    },1)

    if(input.value.length>0){
    // e.preventDefault();
    // console.log(addBtn)

    let storeInput=input.value;
    console.log(storeInput)

    let toDoDiv=document.createElement("div");
    let check= document.createElement("input");
    check.type="checkbox";

    // ===================CHECKBOX================

    check.addEventListener("click",function(){

        let final=document.createElement("div");
        completed.append(final);
        this.parentElement.remove();
        final.append(toDoDiv)
        // storeValue.style.outline="none";
        storeValue.style.border="none";
        button1.remove();
        // storeValue.value.style.textDecoration="lineThrough";
    })

       

    let storeValue=document.createElement("input");
    // storeValue.type="text"
    storeValue.value=storeInput;
    storeValue.setAttribute("readonly","readonly");

    let button1=document.createElement("button");
    button1.innerText="Edit";


         // ===========EDIT====================
    button1.addEventListener("click",function(){
        // storeValue.
        if(button1.innerText=="Edit"){
            button1.innerText="Save";
            storeValue.removeAttribute("readonly");
        }else{
            button1.innerText="Edit";
            storeValue.setAttribute("readonly","readonly");
        }
    
    })

    let button2=document.createElement("button");
    button2.innerText="Delete";

        // ==================DELETE=================
        button2.addEventListener("click",function(){
            this.parentElement.remove();
        })
    

   
    toDoDiv.append(check,storeValue,button1,button2);
    storeData.append(toDoDiv);

    }

   


    

})
