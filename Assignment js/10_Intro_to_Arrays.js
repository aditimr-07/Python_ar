// array_desctructing
// const myarr = ["value1","value2","value3","value4","value5"];

// const[var1,var2,var3]=myarr;
// const newarr=myarr.slice(3);

// // Array is Destructed and stored in variables
// // and variable act similar to normal var
// console.log(var1);
// console.log(var2);
// console.log(var3);

// console.log(newarr);

const myarr = ["value1","value2","value3","value4","value5"];
// with help of spread operator
const[var1,var2,var3,...newarr]=myarr;

// Array is Destructed and stored in variables
// and variable act similar to normal var
console.log(var1);
console.log(var2);
console.log(var3);
console.log(newarr);

// array_methods
let fruits = ["apple","mango","grapes"];

console.log(typeof fruits);
console.log(Array.isArray(fruits));

fruits.push("banana");
console.log(fruits);

let poppedelement=fruits.pop();
console.log(fruits);
console.log(poppedelement);

fruits.unshift("banana");
fruits.unshift("myfruit");
console.log(fruits);

let shiftedele = fruits.shift();
console.log(fruits);
console.log(shiftedele);

// arrays
let arr = [1,2,3,4,5];

console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

let names = ["yatin","dsda","fafa","aawfa"];

console.log(names);
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

let mixed = [1,2,3.23,"adafa",null,undefined];
console.log(mixed);

let fruits1 = ["apple","mango","grapes"];
console.log(fruits1);
fruits1[1]="banana";
console.log(fruits1);

// clone_array
let array_1=["item1","item2"];
// let array_2 = array_1;
let array_2=["item1","item2"];

array_1.push("item3");

console.log(array_1==array_2);
console.log(array_1);
console.log(array_2);

let array_3=["item1","item2"];
// let array_4 = array_3;
let array_4=array_3.slice(0)

array_3.push("item3");

console.log(array_3==array_4);
console.log(array_3);
console.log(array_4);

let array_5=["item1","item2"];
// let array_6 = array_5;
let array_6=[].concat([array_5]); 

// array_5.push("item3");
console.log(array_5==array_6);
console.log(array_5);
console.log(array_6);

let array_7=["item1","item2"];
let array_8=[...array_1];

array_7.push("item3");
console.log(array_7==array_8);
console.log(array_7);
console.log(array_8);

let array_9=["item1","item2"];
let array_10=array_9.slice(0).concat(["item3","item4"]);

array_9.push("item3");
console.log(array_9==array_10);
console.log(array_9);
console.log(array_10);

let array_11=["item1","item2"];
let array_12=[].concat(array_11,["item3","item4"]);

array_11.push("item3");
console.log(array_11==array_12);
console.log(array_11);
console.log(array_12);

let array_13=["item1","item2"];
let oneMore=["item3","item4"];
let array_14=[...array_13,...oneMore,"item5"];

array_13.push("item3");
console.log(array_13==array_14);
console.log(array_13);
console.log(array_14);

// for_loop
let fruits5=["apple","mango","orange"];
console.log(fruits5);

let fruitsUpper = [];
for(let i=0;i<fruits5.length;i++){
    console.log(fruits5[i].toUpperCase());
    fruitsUpper.push(fruits5[i].toUpperCase());
}

console.log(fruitsUpper);

const pi=3.14;
// pi=233; // assign to const var error
console.log(pi);

const num=[1,2,3,4];

num.push(5,6,7);
// num=[9,10,11];
console.log(num);

// while_loop
const fruits3=["apple","mango","orange"];
let i=0;
while(i<fruits3.length){
    console.log(fruits3[i].toUpperCase);
    i++;
}

console.log(fruits3);

for(let fruit of fruits3){
    console.log(fruit);
}

for(let index in fruits3){
    console.log(fruits3[index]);
}