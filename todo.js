// //Event Bubbling

// let div=document.querySelector("div");

// let ul=document.querySelector("ul");

// let lis=document.querySelectorAll("li");

// div.addEventListener("click",function(){
//     console.log("div was clicked");
// })

// ul.addEventListener("click",function(){
//     console.log("ul was clicked");
// })

// for(li of lis){
//     li.addEventListener("click",function(){
//         console.log("li was clicked");
//     })
// }

// //This is known as Event Bubbling if any one of the event will be triggered then it will trigger other event also like on clickin "li" both "div" and "ul" were


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
//EVENT DELEGATION
// if we want any child element to perform any action we will give its parent element an event listener
//we can not add for buttons because it is not applied on new buttons