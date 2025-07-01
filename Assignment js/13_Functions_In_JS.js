// arrow_functions
console.log("This is console text");
console.log("This is console text");
console.log("This is console text");
console.log("This is console text");
console.log("This is console text");

const printText = () =>{
    console.log("This is console text");
}

printText();
printText();
printText();

const addition = ()=>{
    return 2+4;
  }
  const result = addition();
  console.log(result);

  const addition1 =  (num1,num2) =>{
      return num1+num2;
    }
    const result1 = addition1(10,20);
    console.log(result1);

const additionofThree = (num1,num2,num3)=>{
        return num1 + num2+num3
    
    }
const sumofThree = additionofThree(10,20,30);
console.log(sumofThree);

const isEven=  (num) =>{
    if(num % 2 === 0){
         return true;
    }
    return false;
}

// const isEven = num=>  num % 2 === 0;
//  function isEven(num){
       
//     return num % 2 === 0;
//   }

console.log(isEven(2));
console.log(isEven(2));

// const firstChar = (str)=>{
  //       return str[0];
  //   }
    
  //   console.log(firstChar("abcdef"));

   //  const linearSearch = (arr,target)=>{     
  //       for(let i=0;i<arr.length; i++){
  //           if(arr[i]===target){
  //               return i;
  //           }
  //       }
  //       return -1;
  //   }
  //   const arr = [1,2,3,4,5,6,7,8,9,10];
  //   const res = linearSearch(arr,10);
  //   console.log(res);

// bolckscope_vs_function
{
    // here let is block scoped
    let firstChar = "afafafafa";
    // similar in case of const
    const  name_var = "adadad";
   
}
console.log(firstChar);
console.log(name_var);
// {   
//     // Blocked Scoped
//     const firstname = "yatin";
//     console.log(firstname);
// }
// // Outer Global body scope
// const firstname = "siddesh";
// console.log(firstname);

// {
//     var firstname = "Yatin";
// }

{
    console.log(firstname); 
}
console.log(firstname); 

function myApp(){
    if(true){
        let firstname = "yatin"; 
        console.log(firstname);
    }
    console.log(firstname);
}

myApp();

// callback_function
function myfunc(a){
    console.log(a);
    console.log('hello world');
}
myfunc();
myfunc("abc");
myfunc([1,2,3]);
myfunc({name:"abc",age:22});

function myfunc2(){
    console.log("inside my function 2.");
}

function myfunc(callback){
    // here we have passed function
    // console.log(a);
    // calling the passing parameter function;
    callback();
}
// Passing function as argument inside function
myfunc(myfunc2);

function myfunc2(name){
    
    console.log("inside my function 2.");
    console.log(`my name is ${name}`);

}

function myfunc(callback){
    // In Call back Function
    // Code execution is done first
    console.log("hello there code is been executed")

    // After execution of above function
    // call back function is executed
    // which is passed as an argument
    callback("Yatin");
}
// Passing function as argument inside function
myfunc(myfunc2);

// default_parameter
function addtwo(a,b){
    return a+b;
}

// const ans = addtwo(4,5);
// console.log(ans); //  9

const ans = addtwo(4);
console.log(ans); // NaN ---> 4+ undefined

function addtwo(a,b){
    if(typeof b === "undefined"){
        b=0;
    }
    return a+b;
}

// const ans = addtwo(4);
// console.log(ans); // 4

function addtwo(a,b=0){
    
    return a+b;
}
// const ans = addtwo(4);
// console.log(ans); // 4


const ans1 = addtwo(4,8);
console.log(ans1); // 12

// func_return_func
function myfunc(){
    // return "a";
    // return 54;
    // return [1,3,45,5,6,6];
    // return {name:"yatin"};
  //declaration of function
    function hello(){
        return "hello world";
    }


    // function returning function
    return hello;
}

const ans2 = myfunc();
// console.log(ans);

// calling the function returned function
// ans();
console.log(ans2());

// function_declaration
console.log("This is console text");
console.log("This is console text");
console.log("This is console text");
console.log("This is console text");
console.log("This is console text");

function printText(){
    console.log("This is console text");
}
// Calling Function / Invoked Function/ Run Function
// Code Reusability
printText();
printText();
printText();

function addition(){
  return 2+4;
}
const result2 = addition();
console.log(result2);

function addition(num1,num2){
    return num1+num2;
  }
  const result3 = addition(10,20);
  console.log(result3);
  
  // Undefined + Undefined = NAN
  
  function additionofThree(num1,num2,num3){
      return num1 + num2+num3
  
  }

// const sumofThree = additionofThree(10,20); // 10+20+undefined = NAN
  const sumofThree1 = additionofThree(10,20,30); // 10+20+30 = 60
  console.log(sumofThree1);

function isEven(num){
      if(num % 2 === 0){
          return true;
      }
      return false;
  }

  function isEven(num){
  
      return num % 2 === 0;
  }
  
  console.log(isEven(2));

  function firstChar(str){
      return str[0];
  }
  
  console.log(firstChar("abcdef"));

  function linearSearch(arr,target){
      
      for(let i=0;i<arr.length; i++){
          if(arr[i]===target){
              return i;
          }
      }
      return -1;
  }
  const arr = [1,2,3,4,5,6,7,8,9,10];
  const res = linearSearch(arr,10);
  console.log(res);
  
//   function_expression
console.log("This is console text");
console.log("This is console text");
console.log("This is console text");
console.log("This is console text");
console.log("This is console text");

const printText = function (){
    console.log("This is console text");
}

printText();
printText();
printText();

const addition = function (){
  return 2+4;
}
const result4 = addition();
console.log(result4);

function addition(num1,num2){
    return num1+num2;
  }
  const result5 = addition(10,20);
  console.log(result5);
  
//   Undefined + Undefined = NAN
  
  function additionofThree(num1,num2,num3){
      return num1 + num2+num3
  
  }
  
  // const sumofThree = additionofThree(10,20); // 10+20+undefined = NAN
  const sumofThree2 = additionofThree(10,20,30); // 10+20+30 = 60
  console.log(sumofThree2);

  const isEven= function (num){
    if(num % 2 === 0){
          return true;
      }
      return false;
  }

  const isEven= function (num){
  
      return num % 2 === 0;
  }
  
  console.log(isEven(2));

  const firstChar =  function (str){
      return str[0];
  }
  
  console.log(firstChar("abcdef"));
  
  const linearSearch = function (arr,target){
      
      for(let i=0;i<arr.length; i++){
          if(arr[i]===target){
              return i;
          }
      }
      return -1;
  }
  const arr1 = [1,2,3,4,5,6,7,8,9,10];
  const res1 = linearSearch(arr1,10);
  console.log(res1);

//   function_inside_function
const app = () => {

    // declaring function inside function
     const myfunction = () =>{
        console.log("Inside myFunction");
     }
         
     // declaring function inside function
     const addition = (num1,num2) =>{
        return num1+num2;
     }

     // declaring function inside function
     const multiply = (num1,num2) => num1*num2; 
    
     // actions of Main Function:
    console.log("inside app");
    // Calling Inside Function
    myfunction();
    // Calling Inside Function
    console.log(addition(5,3));
    // Calling Inside Function
    console.log(multiply(5,3));

}

app(); // Main function is called

// hoisting_Intro
hello();
function hello(){
    console.log("hello world");
}
const hello = function(){
    console.log("hello world");
}

console.log(hello); // undefined
var hello = "hello world";
console.log(hello); // hello world

console.log(hello); // error: access before initialization
let hello = "hello world";
console.log(hello);

console.log(hello); // error: access before initialization
const hello = "hello world";
console.log(hello);

// Intro_function
console.log("This is console text");
console.log("This is console text");
console.log("This is console text");
console.log("This is console text");
console.log("This is console text");

function printText(){
    console.log("This is console text");
}
printText();
printText();
printText();

function addition(){
  return 2+4;
}
const result6 = addition();
console.log(result6);

function addition(num1,num2){
  return num1+num2;
}
const result7 = addition(10,20);
console.log(result7);

// Undefined + Undefined = NAN

function additionofThree(num1,num2,num3){
    return num1 + num2+num3

}

// const sumofThree = additionofThree(10,20); // 10+20+undefined = NAN
const sumofThree3 = additionofThree(10,20,30); // 10+20+30 = 60
console.log(sumofThree3);

function isEven(num){
    if(num % 2 === 0){
        return true;
    }
    return false;
}

function isEven(num){

    return num % 2 === 0;
}

console.log(isEven(2));

function firstChar(str){
    return str[0];
}

console.log(firstChar("abcdef"));

function linearSearch(arr,target){
    
    for(let i=0;i<arr.length; i++){
        if(arr[i]===target){
            return i;
        }
    }
    return -1;
}
const arr2 = [1,2,3,4,5,6,7,8,9,10];
const res2 = linearSearch(arr2,10);
console.log(res2);

// lexical_Scope
const myvar = "value1";

function myApp(){
     
    function myfunc(){
        // const myvar= "value59";
        console.log("inside myFunc",myvar);
    }
    
    console.log(myvar);
    myfunc();
}

myApp();

function myApp(){
     
    const myvar = "value1";
    function myfunc(){
        const myvar= "value59";
        console.log("inside myFunc",myvar);
    }
    const myfunc2 = function(){}
    const myfunc3 = () =>{}
    console.log(myvar);
    myfunc();
}

// param_destructing
const person = {
    firstname :"Yatin",
    gender : "male",
}

function printpersonDetails(obj){

    console.log(obj.firstname); // Yatin
    console.log(obj.gender);  // male
    console.log(obj.age);  // undefined
}

printpersonDetails(person);

const person1 = {
    firstname :"Yatin",
    gender : "male",
    age : 500,
}
function printpersonDetails({firstname,gender,age}){

    console.log(firstname); // Yatin
    console.log(gender);  // male
    console.log(age);  // undefined
}
printpersonDetails(person1);

const person2 = {
    firstname :"Yatin",
    gender : "male",
    age : 500,
}
function printpersonDetails(person2){
  
    for(let data of person2){

        console.log(data); // Yatin
    }
}
printpersonDetails(...person2);

// rest_paremeters
function myfunction(a,b,c){
    console.log(`a  is ${a}`);
    console.log(`b  is ${b}`);
    console.log(`c  is ${c}`);
}

myfunction(1,3,4);
// printed avaiable parameters
myfunction(1,3,4,4,56,346,34,3,3);

function myfunction(a,b,...c){
    console.log(`a  is ${a}`);
    console.log(`b  is ${b}`);
    console.log(`c  is ${c}`);
}

myfunction(1,3,4);
myfunction(1,3,4,4,56,346,34,3,3);

const addAll = (...numbers) =>{
    
    let total = 0;
   
    for(let num of numbers){

        total = total + num;
    }

    return total;
    
}
const ans3 = addAll(1,2,3,4,5,6,7,8,9,10);
console.log(ans3);