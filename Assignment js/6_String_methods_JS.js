// boolean_datatype
let a= 10;
let b= 30;

console.log("a= "+a);
console.log("b= "+b);

console.log("a > b: " +a > b);
console.log("a < b: " +a < b);
console.log("a >= b: " +a >= b);
console.log("a <= b: " +a <= b);

console.log("a == b: " +a == b);
console.log("a === b: " +a === b);

console.log("a != b: " +a != b);
console.log("a !== b: " +a !== b);

// null_datatype
let var1= null;
console.log(var1);
console.log(typeof var1,var1);

var1 = "uadasfa";
console.log(typeof var1,var1);

let null1 = null;
console.log(typeof null1);

let mynum = 123;

console.log(mynum);
console.log(Number.MAX_SAFE_INTEGER);

let num = BigInt(315);
let num1 = 123n;
console.log(num);
console.log(num + num1);
let num3 = 1245;
// console.log(num + num3);

// slice_method
let str = "theworldisgreat";

let newstr = str.slice(0,5);

console.log(newstr);

let newstr2 = str.slice(4); 
console.log(newstr2);

// string_concatenation
let string1 = "Aditi";
let str2 = "Rajguru";

let full_name = string1 + " " + str2;
console.log(full_name); 

let str1 = "17";
let str3 = "10";

let output = str1 + str3;
console.log(output); 

let strr1 = "17";
let strr3 = "10";

let output1 = +strr1 + +strr3;
console.log(output1);

// template_string
let age = 22;
let first_name= "Aditi";

let about_me = "my name is "+first_name+ " and my age is " + age;
console.log(about_me);

let about =`my name is ${first_name} and my age is ${age}`;
console.log(about);

// toupperCase_method
let first_name1 = "yatinchaudhari";

first_name1=first_name1.toUpperCase();
console.log(first_name1);

first_name1=first_name1.toLowerCase();
console.log(first_name1);

// trim_method
let first_name2 = "Rajguru       ";

console.log(first_name2.length);
first_name2.trim();
console.log(first_name2.length);

let newString = first_name2.trim();
console.log(newString); 

console.log(newString.length);
console.log(first_name2.length);

first_name = first_name.trim();
console.log(newString); 

console.log(newString.length);
console.log(first_name.length);

// typeof_operator
let age1 = 22;
let name = "abcdef";

console.log(typeof age1);
console.log(typeof name);

console.log(typeof age1);
console.log(typeof(age1 + ""));

age1 = age1 + "";
console.log(typeof age1);

let num2 = 18;
num2 = String(num2);
console.log(typeof num2);

let myStr = +"3";
console.log(typeof myStr);

let age2 ="18";
age1 =Number(age2);
console.log(typeof age2);

var firstName;
console.log(typeof firstName);

firstName = "Yatin";
console.log( typeof firstName,firstName);

let first;
console.log(typeof first);

console.log(typeof first_Name);