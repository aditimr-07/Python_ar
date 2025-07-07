// _click_on_Multiple
console.log("hello world");

const firstbtn = document.querySelector("#one");

firstbtn.addEventListener("click",function(){
    console.log("you Click me!!");
});

const allbtns = document.querySelectorAll("button");
console.log(allbtns);

for(let btn of allbtns){
    btn.addEventListener("click",function(){
        console.log("you Click me!!");

    });
}

const allbtns1 = document.querySelectorAll("button");
console.log(allbtns1);

for(let btn of allbtns1){
    btn.addEventListener("click",function(){
        console.log(this);
        console.dir(this);
        console.log(this.textContent);

    });
}

const allbtns2 = document.querySelectorAll("button");


for(let i = 0;i<allbtns2.length;i++){
    allbtns2[i].addEventListener("click",function(){
        console.log(this);
        console.dir(this);
        console.log(this.textContent);
    });
}

const allbtns3 = document.querySelectorAll("button");

allbtns3.forEach(function(btn){

    btn.addEventListener("click",function(){
        console.log(this);
        console.dir(this);
        console.log(this.textContent);
    });

});

// calculator
// let valueA=0;
// let valueB=0;
// const inputboxA=document.getElementById("valueA");
// const inputboxB=document.querySelector("#valueB");
// console.log(inputboxA);
// console.log(inputboxB);
// inputboxA.addEventListener("keyup",(event)=>{
//     valueA=Number(event.target.value);
//     console.log(event.target.value)})
// inputboxB.addEventListener("keyup",(event)=>{
//     valueB=Number(event.target.value);
//     console.log(event.target.value)})
// const button=document.getElementById("add");

// button.addEventListener("click",()=>{
//     alert(valueA+valueB)
// })

// Event_Object
const firstbtn1 = document.querySelector("#one");

firstbtn1.addEventListener("click",function(){
    console.log(this);
})

const firstbtn2 = document.querySelector("#one");
const secbtn = document.querySelector("#two");

firstbtn2.addEventListener("click",function(e){
    console.log(this,e);
});

secbtn.addEventListener("click",(e)=>{
    console.log(this,e);
});

firstbtn2.addEventListener("click",function(e){
    console.log(e.target);
});

secbtn.addEventListener("click",(e)=>{
    console.log(e.target);
});

// Event_BTS
console.log("~!!!!!! Script Start")
const allBtns = document.querySelectorAll(".my-buttons button");
console.log(allBtns);

for(let btn of allBtns){

    btn.addEventListener("click",(e)=>{
        console.log(e.target);
    });
};

allBtns.forEach((btn)=>{

    btn.addEventListener("click",(e)=>{
        console.log(e.target);
    });

});

allBtns.forEach((btn)=>{

    btn.addEventListener("click",(e)=>{
        let num = 0;
        for(let i = 0; i<=1000000000;i++){
            num+=i;
        }
        console.log(e.currentTarget.textContent,num);
    });

});

let outerVar = 0;
for(let i = 0; i<=1000000000;i++){
    outerVar+=i;
}
console.log("Value of Outer variable :",outerVar);

console.log("~!!!!!! Script End")

// intro_event
// 1) Selecting Button:
const btn = document.querySelector(".btn-headline");
console.log(btn); // html representation.
console.dir(btn); // Object Representation .

// 2) using Onclick property.
 
 btn.onclick = function(){
    console.log("You Clicked Me!!");
 }

document.addEventListener("click", myFunction1);
document.addEventListener("click", myFunction2);
document.addEventListener("mouseover", myFunction);
document.addEventListener("click", someOtherFunction);
document.addEventListener("mouseout", someOtherFunction);

// addEventListener --> Method
 const btn = document.querySelector(".btn-headline");
 function clickMe(){
    console.log("You Clicked Me!!");
 }

 // btn.addEventlistener("Takes Event",
 // function which will occur on click)
 btn.addEventListener("click",clickMe);

 const btn = document.querySelector(".btn-headline");

  btn.addEventListener("click",function(){
    console.log("You Clicked Me!!");
 });

 btn.addEventListener("click",()=>{
    console.log("You Clicked Me!!");
 });

// keypress_mouseover
const body = document.body;

body.addEventListener("keypress",(e)=>{
    console.log(e.key);
})

const mainButton = document.querySelector("#click-btn");
// console.log(mainButton);
mainButton.addEventListener("mouseover",(e)=>{

    console.log("mouseover event Occurred !! ");
})


mainButton.addEventListener("mouseleave",(e)=>{

    console.log("mouseleave event Occurred !! ");
})

// little-demo
// Events Little Demo practice

console.log("hello");

const mainButton1 = document.querySelector(".container button");
// console.log(mainButton1);
const body1 = document.body1;
const currentColor = document.querySelector(".currentColor");

function randomColorGenerator(){
    const red = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);

    const randomColor = `rgb(${red},${green},${blue})`;
    return randomColor;
}

mainButton1.addEventListener("click",(e)=>{
    //    console.log("you clicked Me!!!");
       const randomColor = randomColorGenerator();
       console.log(randomColor);
       body.style.backgroundColor = randomColor;
       currentColor.textContent = randomColor;
})

// practice_click_Event
const allButtons = document.querySelectorAll(".my-buttons button");
console.log(allButtons);

const body2 = document.querySelector("body");
console.log(body2);

allButtons.forEach((button)=>{

    button.addEventListener("click",(e)=>{
        e.target.style.backgroundColor='pink';
        e.target.style.color='gray';
        console.log(e);
        console.log(e.target)
    })
})

const inputBox = document.getElementById("first-name")
console.log(inputBox);
inputBox.addEventListener("keyup",(e)=> {
    console.log(e);
    console.log(e.target);
})

allButtons.forEach((button)=>{

    button.addEventListener("click",(e)=>{
        body.style.backgroundColor = 'yellow';
        button.style.backgroundColor = 'gray';
    })
})

// s
const a=document.getElementById("valueA");
        const b=document.querySelector("#valueB");
        console.log("A=", a);
        console.log("B=", b);
    
        var valueA=0;
        var valueB=0;
    a.addEventListener("keyup",(e)=>{
        console.log(e.target.value);
        valueA=Number(e.target.value);
    })
    b.addEventListener("keyup",(e)=>{
        console.log(e.target.value);
        valueB=Number(e.target.value);
    })
    console.log(valueA);
    console.log(valueB);
    const buttonS = document.getElementById("addition");

    buttonS.addEventListener("click",()=>{
       console.log(valueA + valueB);
    })

// this_in_Events
const btn = document.querySelector(".btn-headline");
function clickMe(){
    console.log("You clicked me!!!");
    console.log("value of this");
    console.log(this);

 }

btn.addEventListener("click",clickMe);

const btn = document.querySelector(".btn-headline");

btn.addEventListener("click",function(){
    console.log("You clicked me!!!");
    console.log("value of this");
    console.log(this);

 });

btn.addEventListener("click",()=>{
    console.log("You clicked me!!!");
    console.log("value of this");
    console.log(this);

 });
