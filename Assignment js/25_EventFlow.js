const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

child.addEventListener("click",()=>{
    console.log("Capture !!!!!!  Child !!");
},true);

parent.addEventListener("click",()=>{
    console.log("Capture !!!!!!  parent !!");
},true);

grandparent.addEventListener("click",()=>{
    console.log("Capture !!!!!!  grandparent !!");
},true);

document.body.addEventListener("click",()=>{
    console.log("Capture !!!!!!  body !!");
},true);

child.addEventListener("click",()=>{
    console.log("Bubble Child !!");
})

parent.addEventListener("click",()=>{
    console.log("Bubble parent !!");
})

grandparent.addEventListener("click",()=>{
    console.log("Bubble grandparent !!");
})

document.body.addEventListener("click",()=>{
    console.log("Bubble body !!");
})

grandparent.addEventListener("click",(e)=>{
    console.log(e.target);
})