// and_or_operator
let firstname = "Hiral";
let age = 22;

if(firstname[0]=== "H")
{
    console.log("Name starts with H");
}

if(age>18){
    console.log("you are above 18");
}

if(firstname[0]=== "H" && age>18){
     console.log("Name starts with H and above 18");
}else{
    console.log("not qualified");
}

if(firstname[0]=== "H" || age>18){
    console.log("Name starts with H and above 18");
}else{
   console.log("not qualified");
}

// nested_if_else
let winningNumber=19;
let userGuess = +prompt("Guess A Number?");
console.log(typeof userGuess,userGuess);
if(userGuess===winningNumber){
    console.log("Winner");
}else{
    console.log("Loser");
    if(userGuess>winningNumber){
        console.log("Too high!!");
    }else{
        console.log("Too low!!");
    }
}

let tempInDegree = 15;
if(tempInDegree < 0){
 console.log("extremely cold outside");
}
else if(tempInDegree < 16){
console.log("It is cold outside");
}else if(tempInDegree < 25){
console.log("wheather is okay ");
}else if(tempInDegree < 35){
console.log("Lets go for swim");
}else if(tempInDegree< 45){
console.log("turn on AC");
}else{
console.log("too hot!!");
}

// switch_statement
let day =2;
switch(day){
    case 0:
    console.log("Sunday");
    break;

    case 1:
    console.log("Monday");
    break;

    case 2:
    console.log("Tuesday");
    break;
   
    case 3:   
    console.log("Wednesday");
    break;
   
    case 4:  
    console.log("Thrusday");
    break;

    case 5:   
    console.log("Friday");
    break;

    case 6:
    console.log("Saturday");
    break;
   
    default:
    
  
    
    console.log("Invalid Day");
}

// ternary_operator
let age2 = 15;
let drink ;

if(age2>=5){
    drink="coffee";
}else{
    drink="milk";

}

console.log(drink);

let age1= 22;
let drinkit = age2 >= 20 ? "Coffee" : "Milk";

console.log(drinkit);
