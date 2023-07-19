// Check th working..


// let check=document.getElementById("submitting");
// check.addEventListener("click",(event)=>{
//     event.preventDefault();
//     alert("ajithganapathy");        // working perfectly...
// });

// Getting the accesss...

let title=document.getElementById("title-box");    // ajith
let content=document.getElementById("content-text");
let check=document.getElementById("submitting");
let list_element=document.getElementById("list");


check.addEventListener("click",(event)=>{
    event.preventDefault();
    let res=title.value;
    let res_a=content.value;
    let creating_elements=document.createElement("list_of_elements");
    creating_elements.innerText=res;
    let creating_elements_1=document.createElement("lists_of_elements");
    creating_elements_1.innerText=res_a;
    list_element.append(creating_elements);
    list_element.append(creating_elements_1);
    // document.getElementById("title-box").value=" ";
    // document.getElementById("content-text").value=" ";
    title.focus()
    // content.focus();
    
    console.log(list_element);


});


// Editing the content........

let editting_the_value=document.getElementById("edit-button");
editting_the_value.addEventListener("click",(event)=>{
    event.preventDefault();
    let clicking=event.target;
    clicking.contentEditable= clicking.content===true?false:true;
});


// Deleting_the_content....

let delete_button=document.getElementById("delete-button");
delete_button.addEventListener("click",(event)=>{
    event.preventDefault();


    
});