// callback
function myfunc(callback){
    console.log("function is doing  task 1");
    callback();
}

function myfunc2(){
    console.log("function is doing  task 2");

}

myfunc(myfunc2);
// myfunc2();

function myfunc(callback){
    console.log("function is doing  task 1");
    callback();
}

myfunc(function(){
    console.log("function is doing  task 2");
});


myfunc(()=>{
    console.log("function is doing  task 3");
});

function getTwonumbersandAdd(num1,num2,callback){
    console.log(num1,num2);
    callback(num1,num2);
}

function addTwonumbers(number1,number2){
    console.log(number1 + number2);
}

getTwonumbersandAdd(4,5,addTwonumbers);

function getTwonumbersandAdd(num1,num2,callback){
    if(typeof num1 ==="number" && typeof num2 ==="number"){
       callback(num1,num2);
    }else{
        alert("Invalid Input!");
    }
}

function addTwonumbers(number1,number2){
    console.log(number1 + number2);
}

// getTwonumbersandAdd(4,"5",addTwonumbers);

function getTwonumbersandAdd(num1,num2,callback){
    if(typeof num1 ==="number" && typeof num2 ==="number"){
       callback(num1,num2);
    }else{
        alert("Invalid Input!");
    }
}
getTwonumbersandAdd(4,5,(number1,number2)=>{
    console.log(number1 + number2);

});

function getTwonumbersandAdd(num1,num2,onSuccess,onFailure){
    if(typeof num1 ==="number" && typeof num2 ==="number"){
        onSuccess(num1,num2);
    }else{
        onFailure();
    }
}


getTwonumbersandAdd(4,"5",(number1,number2)=>{
    console.log(number1 + number2);
},()=>{
    alert("Invalid Output!!");
    console.log("Enter Valid Number");
}
);

// callbacks_hell_doom
// const heading1 =document.querySelector(".heading1");
// const heading2 =document.querySelector(".heading2");
// const heading3 =document.querySelector(".heading3");
// const heading4 =document.querySelector(".heading4");
// const heading5 =document.querySelector(".heading5");
// const heading6 =document.querySelector(".heading6");
// const heading7 =document.querySelector(".heading7");


setTimeout(()=>{

    heading1.textContent = `Heading 1`;
    heading1.style.color = "violet";
   
},1000);


setTimeout(()=>{ 
    heading2.textContent = `Heading 2`;
    heading2.style.color = "purple";
},3000);

// call back hell
setTimeout(()=>{
    heading1.textContent = `Heading 1`;
    heading1.style.color = "violet";
    setTimeout(()=>{ 
    heading2.textContent = `Heading 2`;
    heading2.style.color = "purple";
    setTimeout(()=>{ 
        heading3.textContent = `Heading 3`;
        heading3.style.color = "red";
        setTimeout(()=>{ 
            heading4.textContent = `Heading 4`;
            heading4.style.color = "pink";
            setTimeout(()=>{ 
                heading5.textContent = `Heading 5`;
                heading5.style.color = "green";
                setTimeout(()=>{ 
                    heading6.textContent = `Heading 6`;
                    heading6.style.color = "blue";
                    setTimeout(()=>{ 
                        heading7.textContent = `Heading 7`;
                        heading7.style.color = "brown";
                        },1000);
                    },3000);
                
                },2000);
            
            },1000);
        
        },2000);
    
    },2000);

},1000)


// const heading1 =document.querySelector(".heading"); // for else part 
const heading1 =document.querySelector(".heading1");
const heading2 =document.querySelector(".heading2");
const heading3 =document.querySelector(".heading3");
const heading4 =document.querySelector(".heading4");
const heading5 =document.querySelector(".heading5");
const heading6 =document.querySelector(".heading6");
const heading7 =document.querySelector(".heading7");
const heading8 =document.querySelector(".heading8");
const heading9 =document.querySelector(".heading9");
const heading10 =document.querySelector(".heading10");


function changeText(element,text,color,time,onSucess,onFailure){
    setTimeout(()=>{
        if(element){
          element.textContent = text;
          element.style.color = color;
           if(onSucess){
              onSucess();
            }
           
        }else{
            // console.log("your element doesnt exists")
            if(onFailure){
                onFailure();
            }
        }
    },time)
}

// Pyramid of DOOM :
changeText(heading1,"one","violet",3000,()=>{
    changeText(heading2,"two","purple",2000,()=>{
        changeText(heading3,"three","red",1000,()=>{
            changeText(heading4,"four","pink",1000,()=>{
                changeText(heading5,"five","green",2000,()=>{
                    changeText(heading6,"six","blue",2000,()=>{
                        changeText(heading7,"seven","cyan",2000,()=>{
                            changeText(heading8,"eight","#cda562",1000,()=>{
                                changeText(heading9,"nine","#dca652",1000,()=>{
                                    changeText(heading10,"ten","brown",1000,()=>{

                                    },()=>{console.log("There is Some Error in Code.heading10");});
                                },()=>{console.log("There is Some Error in Code.heading9");});
                            },()=>{console.log("There is Some Error in Code.heading8");});
                        },()=>{console.log("There is Some Error in Code.heading7");});
                    },()=>{console.log("There is Some Error in Code.heading6");});
                },()=>{console.log("There is Some Error in Code.heading5");}); 
            },()=>{console.log("There is Some Error in Code.heading4");}); 
        },()=>{console.log("There is Some Error in Code.heading3");});   
    },()=>{console.log("There is Some Error in Code.heading2");});   
},()=>{console.log("There is Some Error in Code.heading1");});

// set_interval_prac
const body = document.body;
const intervalID = setInterval(()=>{
     const red = Math.floor(Math.random()*256);
     const blue = Math.floor(Math.random()*256);
     const green = Math.floor(Math.random()*256);
     const rgb = `rgb(${red},${green},${blue})`;
     console.log(rgb);
     body.style.backgroundColor = rgb;

 },1000);

 console.log(intervalID);

 const stopButton = document.querySelector("button");

 stopButton.addEventListener("click",(e)=>{
    e.preventDefault();
    clearTimeout(intervalID);
    stopButton.textContent = body.style.backgroundColor;
     
 });

// set_Interval
console.log("start Script");

setInterval(()=>{
    console.log(Math.random());
},1000);

console.log("Script Ends");

console.log("start Script");

setInterval(()=>{
    let total = 0;
for(let i = 1; i< 100000000; i++){
    total += i;
}
console.log(total);
    console.log(Math.random());
},1000);

console.log("Script Ends");

// set_Timeout
console.log("script Start");

function hello(){
    console.log("hello world ! ");

}

setTimeout(hello,5000);

console.log("script End");


// Other Syntax:

/*
console.log("start Script");

setTimeout(()=>{
    console.log("inside Timeout Function");
},3000);

console.log("Script Ends");

*/

/*
console.log("start Script");

setTimeout(()=>{
    console.log("inside Timeout Function");
},0);


for(let i = 1; i< 10000; i++){
    console.log("....");
}

console.log("Script Ends");
*/


// Use the clearTimeout() method to prevent the function from starting.

console.log("start Script");

const id = setTimeout(()=>{
    console.log("inside Timeout Function");
},0);


for(let i = 1; i< 10000; i++){
    console.log("....");
}

console.log("settime out id is ",id);
console.log("clearing time out ");
clearTimeout(id);
console.log("Script Ends");

// sync_vs_async
console.log("script Start");

for(let i = 1; i< 10000; i++){
    console.log("inside for Loop");
}

console.log("script end");


// setTimeout function

/*
console.log("script Start");

function hello(){
    console.log("hello world ! ");

}
// setTimeout function takes(function call,time(in milisecond));
setTimeout(hello,5000);

console.log("script End");

*/

// Other Syntax:

/*
console.log("start Script");

setTimeout(()=>{
    console.log("inside Timeout Function");
},3000);

console.log("Script Ends");

*/

/*
console.log("start Script");

setTimeout(()=>{
    console.log("inside Timeout Function");
},0);


for(let i = 1; i< 10000; i++){
    console.log("....");
}

console.log("Script Ends");
*/

// Use the clearTimeout() method to prevent the function from starting.

console.log('start Script')

const id1 = setTimeout(() => {
  console.log('inside Timeout Function')
}, 0)

for (let i = 1; i < 10000; i++) {
  console.log('....')
}

console.log('settime out id is ', id1)
console.log('clearing time out ')
clearTimeout(id1)
console.log('Script Ends')
