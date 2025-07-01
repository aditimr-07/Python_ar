// Array_Methods
let newarray = [];
console.log(newarray);
console.log(newarray.pop());
console.log(newarray);

const charArr = ["A", "M", "A", "N"];
const res = charArr.toString().replaceAll(",", "");
console.log(res);

const num = [1, 2, 3, 4, 5, 6, 7];

const res1 = num.slice(2);
const res2 = num.slice(0, 4);

console.log(res1);
console.log(res2);

console.log(num);
num.splice(3, 0, "Abc");
num.splice(3, 2, "krk");
console.log(num);

const charArr1 = ["A", "M", "A", "N"];
const res3 = charArr1.toString().replaceAll(",", "/");
console.log(res3);
// replacement of above scenario using join
let charStr = charArr1.join("/");
console.log(charStr, typeof charStr);

let newArray = ["N", 1, 3, 4, 5, "A", 87];
console.log(newArray.includes("A"));
console.log(newArray.includes(2));
console.log(newArray.indexOf(2));
console.log(newArray.indexOf("N"));
console.log(newArray.lastIndexOf("N"));

newArray.forEach((e, index) => {
  console.log(e, index);
});

const newArray1 = newArray.map((e, index) => {
  return e * 3;
});

console.log(newArray1);

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenArray = number.filter((value, idx) => {
  console.log(value, idx);
  return value % 2 == 0;
});
console.log(evenArray);

let newArray2 = ["N", 1, 3, 4, 5, "A", 87, { name: "Newton" }];
newArray2.forEach((e, index) => {
  if (typeof e === "object") {
    console.log(e, index);
  }
});

const checkObject = newArray.find((e) => e.name === "Newton");
const checkObjectIndex = newArray.findIndex((e) => e.name === "Newton");
console.log(checkObject);
console.log(checkObjectIndex);

const check = newArray.some((e) => e === "N");
console.log(check);

let StudentsMarks = [45, 64, 77, 45, 54];

const check2 = StudentsMarks.every((e) => {
  return e > 35;
});

console.log(check2);

let array = [4, 2, 3, 4, 5, 6, 7];

const newArray3 = array.reduce((accumulator, currentValue) => {
  console.log("acc :  ", accumulator);
  console.log("curr :  ", currentValue);
  return accumulator + currentValue;
}, 10);
console.log(newArray3);

let x = 10.7;
console.log(parseInt(x));
let y = 10.525;
console.log(Math.floor(y));
console.log(Math.abs(y));
console.log(Math.ceil(y));

let str = "newTono";
let str1 = "school";
console.log(str.length);
console.log(str.slice(0, 2));
console.log(str.charAt(4));
console.log(str.charCodeAt(4)); //ASCII
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.substring(2, 5));
console.log(str.replace("n", "M"));
console.log(str.replaceAll("o", ""));
console.log(str.concat(str1));
str = " new  ton ";
console.log(str.trim("//s"));
console.log(str.trimEnd());
console.log(str.trimStart());
str = "newton school";
console.log(str.split(" "));
str = "4";
console.log(str.padStart(5, "0"));
console.log(str.padEnd(5, "0"));

// every_method
const numbers = [2,4,6,8,10];

const ans = numbers.every((number)=>{
    return number % 2 ===0;
})

console.log(ans);

const userCart = [
    {product_Id : 1,product_Name : "mobile", price : 12000},
    {product_Id : 2,product_Name : "TV", price : 22000},
    {product_Id : 3,product_Name : "Laptop", price : 35000},
    {product_Id : 4,product_Name : "charger", price : 1000},

]

const giveDiscount = userCart.every((product)=>{
    return product.price<=35000;
})

console.log(giveDiscount);

// fill_method
const myArray =  new Array(10).fill(0);
console.log(myArray);
const numbers1 = [1,2,3,4,5,76,6,78,9,9,8];

numbers.fill(0,3,7);
console.log(numbers1);

// filter_method
const numbers2 = [1,3,2,6,4,8];

const isEven= function(number){
    return number % 2 === 0;
}

const Even_numbers = numbers2.filter(isEven);
console.log(Even_numbers2);

// find_methods
const myArray1 = ["hello","catt" ,"dog","lion"];

 function islength3(string){
           return string.length===3;
 }

 const ans1 = myArray1.find(islength3);
// Returns First occurrence of condition
// which call back function gave if it satisfy 
// element is returned

 console.log(ans1);

 const users = [
    {userId :1 ,firstName:"Yatin",age : 22},
    {userId :2,firstName:"mohit",age : 20},
    {userId :3,firstName:"rajesh",age : 23},
    {userId :4,firstName:"ramesh",age : 27},
    {userId :5,firstName:"siddhi",age : 24},
]

const userfound = users.find((user)=>{

    return user.userId===4;
    
});
console.log(userfound);

// forEach
const numbers3 = [4,2,5,8];

function myfunct(number,index){

    // console.log("index is ",index);
    // console.log(`${number}*2 = ${number*2} `);

    console.log(`index is ${index} and number is ${number}`);
}

// multiplyby2(numbers3[0],0);
// multiplyby2(numbers3[1],1);
// multiplyby2(numbers3[2],2);


for(let i =0;i<numbers3.length;i++){

    myfunct(numbers3[i],i);
}

numbers3.forEach(myfunct);

const numbers4 = [4,2,5,8];

numbers4.forEach(function(number,index){
    console.log(`index is ${index} and number is ${number}`);

})
const numbers5 = [4,2,5,8];

numbers.forEach(function(number,index){
    console.log(`${number} x 2 = ${number*2} and at index ${index}`);
})

const users1 = [
   {firstName:"Yatin",age : 22},
   {firstName:"mohit",age : 20},
   {firstName:"rajesh",age : 23},
   {firstName:"ramesh",age : 27},
   {firstName:"siddhi",age : 24},
]

// More often seen
users1.forEach(function(user){
    console.log(user.firstName);
});

// recent in ES6
for(let user of users1){
    console.log(user.firstName);
}

users1.forEach((user,index)=>{
    console.log(user.firstName,index);
})

// map_method
const numbers6 = [4,3,5,6,5];

const sqr = function (number){
    return number * number;
}

const sqrnumber1 = numbers.map(sqr);
console.log(sqrnumber1);

const sqrnumber2 = numbers.map((number)=>{
     
    return number*number;

})
console.log(sqrnumber2);

const sqrnumber = numbers.map((number,index)=>{
     
    return `index : ${index},${number*number}`;

})
console.log(sqrnumber);

const users2 = [
    {firstName:"Yatin",age : 22},
    {firstName:"mohit",age : 20},
    {firstName:"rajesh",age : 23},
    {firstName:"ramesh",age : 27},
    {firstName:"siddhi",age : 24},
]

const user_names = users2.map((user)=>{
    return user.firstName;
})
console.log(user_names);

// reduce_method
const numbers7 = [1,2,3,4,5,10];

const total = numbers.reduce((accumulator,currentvalue)=>{
       return accumulator + currentvalue;
});

console.log(total);

const userCart1 = [
    {product_Id : 1,product_Name : "mobile", price : 12000},
    {product_Id : 2,product_Name : "TV", price : 22000},
    {product_Id : 3,product_Name : "Laptop", price : 35000},
    {product_Id : 4,product_Name : "charger", price : 1000},

]
// we can also pass initial value in reduce
const cartTotal = userCart1.reduce((totalPrice,currentProduct)=>{
     return totalPrice + currentProduct.price ;
},0);
// Initial value = 0;
// Set to 0 here intial value

console.log(cartTotal);

// some_method
const numbers8 = [3,5,8,9];

const ans2 = numbers8.some((number)=>{

    return number % 2==0;
});

console.log(ans2);

const userCart2 = [
    {product_Id : 1,product_Name : "mobile", price : 12000},
    {product_Id : 2,product_Name : "TV", price : 22000},
    {product_Id : 3,product_Name : "Laptop", price : 35000},
    {product_Id : 4,product_Name : "charger", price : 1000},

]

const giveDiscount1 = userCart2.some((product)=>{
    return product.price>30000;
})

console.log(giveDiscount1);

// sort_method
const numbers9 = [5,9,1200,400,3000];
numbers.sort();
console.log(numbers9);
const UserNames = ['harshit','abcd','mohit','nitish','aabc'];
UserNames.sort();
console.log(UserNames);

const numbers10 = [5,9,1200,400,3000];

numbers10.sort((a,b)=>{
    return a-b;
});

console.log(numbers10); 

const products = [
    {product_Id : 1,product_Name : "mobile", price : 12000},
    {product_Id : 2,product_Name : "TV", price : 22000},
    {product_Id : 3,product_Name : "Laptop", price : 35000},
    {product_Id : 4,product_Name : "charger", price : 1000},
    {product_Id : 5,product_Name : "ipad", price : 15000},

]

// Low to High Price

const lowToHigh = products.slice(0).sort((a,b)=>{
   return a.price - b.price;
})

console.log(lowToHigh);

// High to Low Price

const HightoLow = products.slice(0).sort((a,b)=>{
    return b.price - a.price;
 })
 
 console.log(HightoLow);

// splice_Method
const array1 = ['item1' , 'item2','item3','item4','item5'];
array.splice(1,2);
console.log(array1);

const deletedElement = array.splice(1,2);
// console.log(array);
// console.log(deletedElement);

array.splice(1,0,'newitem');
// console.log(array);

const array2 = ['item1' , 'item2','item3','item4','item5'];

const deletedElements = array2.splice(1,2,"insertitem1",'insertitem2');
console.log(array2);
console.log(deletedElements);