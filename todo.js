

let btn=document.querySelector("button");

let ul=document.querySelector("ul");

let inp=document.querySelector("input");

btn.addEventListener("click",function(){

    let item=document.createElement("li");
     item.innerText=inp.value;

    let del=document.createElement("button");
    del.innerText="Delete";
    del.classList.add("delete");

    item.appendChild(del);

    ul.appendChild(item);
    inp.value=""; //this is done to empty the form after submiting its value
    
    
    
});

ul.addEventListener("click",function(event){
if(event.target.nodeName=="BUTTON"){ //it means delete only if button is clicked not on clicking the task 
    let par=event.target.parentElement;
    par.remove();
    alert("task Deleted");
}
else{
   console.log("Can Not Delete")
}
});
