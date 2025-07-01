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
let array_8=[...array_7];

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

// datatype
let num1 = 6;
let num2 = num1;
console.log("value of num1 is",num1);
console.log("value of num2 is",num2);

num1++;

console.log("after incrementing");

console.log("value of num1 is",num1);
console.log("value of num2 is",num2);

let  arr1 = ["item1","item2"];
let arr2 = arr1;

console.log("array1",arr1);
console.log("array2",arr2);
arr1.push("item3");

console.log("after pushing new element");

console.log("array1",arr1);
console.log("array2",arr2);