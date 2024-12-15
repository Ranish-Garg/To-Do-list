let a=document.getElementById("todo-input");
let total=0;
let count=0;

document.getElementById("add-button").addEventListener("click",()=>{
    let input = a.value;
    if(input!=""){

        total++;
    let element=document.createElement("li");
    element.innerHTML=(`${input}
            <div class="buttons">
            <button class="del">Delete</button>
            </div>`);
    document.getElementById("todo-list").appendChild(element)
    bar();
    }
    
})

document.getElementById('todo-list').addEventListener('click', (event)=> {
    const target = event.target;

    if(target.classList.contains("del"))
    {
        count++;
       let list_element= target.closest("li").remove();
       bar();
    
    }
   

})
function bar(){
        if(total>0)
        {
            let a=(count/total)*55;
            document.querySelector(".bar").style.width=`${a}vw`
        }

}

