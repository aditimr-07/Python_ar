// do_while
let total = 0; //1+2
let num = 2;

let i=1;
do{
  total= total + i;
  i++; 
}
while(i<=num)

console.log(total);

// for_loop
for(let i=0;i<=9;i++){
    console.log(i);
}

let total1 = 0; //1+2
let num1 = 100;
let i1=0;
for(i1=0;i1<=num1;i1++){

 total1= total1 + i1;
 i1++;
}
console.log(total1);

for(let j=0;j<=9;j++){
    if(j==5){
        break; 
    }
    console.log(j);
}

for(let j=0;j<=9;j++){
    if(j==5){
        continue; 
    }
    console.log(j);
}

// while_loop
// dry don't repeat yourself
 let i2 = 0; // 1 2 3 4

while(i2<=9) {  
    // console.log(i2);
    console.log(`current value of i is ${i2}`);
    i2++;
}
 console.log("hello");

// let num= 10; 

let total2 = 0; //1+2

let i3=0;
while(i3<=10){

 total2= total2 + i3;
 i3++;
}
console.log(total2);