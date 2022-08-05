let inputs=document.getElementById("input");
let buttons= Array.from(document.querySelectorAll("button"));
// console.log(buttons, typeof buttons)

buttons.map((button)=>{
    button.addEventListener("click",(event)=>{
        // console.log(button)
        let key=event.target.innerText;
        // input.value+=key;
        console.log(key);


        if(key=="C"){
            inputs.value=""
        }
        else if(key=="DEL"){
            if(inputs.value="Infinity"){
                inputs.value=""
            }else{
                inputs.innerText = inputs.innerText.substr(0, inputs.value.length-1);

            }
        }
        else if(key=="="){
            // if(inputs.value){
                inputs.value=eval(inputs.value)
            // }
        }
        else{
                inputs.value+=key;
            }


        

    })
})

function sin(){
    inputs.value=Math.sin(inputs.value);
}

function cos(){
    inputs.value=Math.cos(inputs.value);
}


function tan(){
    inputs.value=Math.tan(inputs.value);
}


function log(){
    inputs.value=Math.log(inputs.value);
}

function sqrt(){
    inputs.value=Math.sqrt(inputs.value);
}

function pi(){
    inputs.value=Math.PI(inputs.value);
}


function e(){
    inputs.value*= 2.71828182846;
    
}

function pow(){
    inputs.value=Math.pow(inputs.value,2);
}

function fact(){
    let fact=1;
    for(let i=1;i<=inputs.value;i++){
        fact=fact*i;
    }
    inputs.value=fact;
}
















