//1. querySelectorAll
//#ordered-dinos - parent id//li - child tag
let dinoList1 = document.querySelectorAll("#ordered-dinos li");

function olStrike(){
    for(let i = 0; i < dinoList1.length; i++){
        dinoList1[i].addEventListener("click", function(){
            console.log(dinoList1[i].innerText);//just to show in inspect console
            dinoList1[i].style.textDecoration = "line-through";
        });
    }
}
olStrike();


//2. bubbling
//#unordered-dinos - parent id
let dinoList2 = document.querySelector("#unordered-dinos");

dinoList2.addEventListener("click", function(event){//passing an event through the function
    let listItem = event.target;
    console.log(listItem.innerText);
    listItem.style.opacity = "0";
});

//3. querySelectorAll
//#row - parent id//img - child tag
// Apply transition to images
let dinoImage = document.querySelectorAll("#row img");

function imgFade(){
    for(let i = 0; i < dinoImage.length; i++){
        dinoImage[i].addEventListener("click", function(){
            dinoImage[i].style.width = "0px";
        });
    }
}
imgFade();

//4. Extinct All
let array1 = document.querySelectorAll("#ordered-dinos li");//(p)ordered list (c)li array
let array2 = document.querySelectorAll("#unordered-dinos li");//(p)unordered list (c)li array
let array3 = document.querySelectorAll("#row img");//(p)row (c)image array
let button = document.querySelector("button");//meteor me button

button.addEventListener("click", function(){
    massExtinction(array1, array2, array3);//calling massExtinction function when "click" event occurs
})

function massExtinction(array1, array2, array3){
    for(let i = 0; i < array1.length; i++){
        array1[i].style.textDecoration = "line-through";
    }
    for(let i = 0; i < array2.length; i++){
        array2[i].style.opacity = "0";
    }
    for(let i = 0; i < array3.length; i++){
        array3[i].style.width = "0px";
    }
}

