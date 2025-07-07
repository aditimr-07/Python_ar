// callbacks_toFlatcode
// const heading1 =document.querySelector(".heading"); // for else part
const heading1 = document.querySelector('.heading1')
const heading2 = document.querySelector('.heading2')
const heading3 = document.querySelector('.heading3')
const heading4 = document.querySelector('.heading4')
const heading5 = document.querySelector('.heading5')
const heading6 = document.querySelector('.heading6')
const heading7 = document.querySelector('.heading7')
const heading8 = document.querySelector('.heading8')
const heading9 = document.querySelector('.heading9')
const heading10 = document.querySelector('.heading10')

function changeText(element, text, color, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element) {
        element.textContent = text
        element.style.color = color
        resolve()
      } else {
        // console.log("your element doesnt exists")
        reject('Element Not Found!')
      }
    }, time)
  })
}

/* One way till heading 5th */
/*

const returnPromise = changeText(heading1, 'one', 'violet', 1000)
returnPromise
  .then(() => {
    return changeText(heading2, 'two', 'purple', 1000)
  })
  .then(() => {
    return changeText(heading3, 'three', 'red', 1000)
  })
  .then(() => {
    return changeText(heading4, 'four', 'pink', 1000)
  })
  .then(() => {
    return changeText(heading5, 'five', 'green', 1000)
  })
  .then(() => changeText(heading6, 'six', 'cyan', 2000))
  .then(() => changeText(heading7, 'seven', 'cyan', 2000))
  .then(() => changeText(heading8, 'eight', '#cda562', 2000))
  .then(() => changeText(heading9, 'nine', '#dca652', 2000))
  .then(() => changeText(heading10, 'ten', 'brown', 1000))
*/

/* other way */
// as we known we can remove curry braces and right arrow function without returning
// return type its present there .

changeText(heading1, 'one', 'violet', 1000)
  .then(() => changeText(heading2, 'two', 'purple', 1000))
  .then(() => changeText(heading3, 'three', 'red', 1000))
  .then(() => changeText(heading4, 'four', 'pink', 1000))
  .then(() => changeText(heading5, 'five', 'green', 1000))
  .then(() => changeText(heading6, 'six', 'cyan', 2000))
  .then(() => changeText(heading7, 'seven', 'cyan', 2000))
  .then(() => changeText(heading8, 'eight', '#cda562', 2000))
  .then(() => changeText(heading9, 'nine', '#dca652', 2000))
  .then(() => changeText(heading10, 'ten', 'brown', 1000))
  .catch((error) => {
    alert(error);
  })

// function_returns_promise
const bucket = ['coffee','chips','vegetables','salt','rice'];


function friedRicePromise(){


  return new Promise((resolve,reject)=>{
    if(bucket.includes('vegetables') && bucket.includes('rice') && bucket.includes('salt')){

       resolve({value:"Fried Rice"}); // can take any value string , array,object

    }else{
       reject(new Error ("something missing in bucket")); // Error Object
    }
  });

}

friedRicePromise().then(
    (myfriedrice)=>{
    console.log(`lets Eat my `,myfriedrice);
    }
    ).catch((error)=>{
    console.log(error);
  })

//   Intro_to_promise
// const bucket = ['coffee','chips','vegetables','salt','rice'];

/**
  Promise 
  task :  future value --> fried rice -> made from [vegetables,salt,rice]
  status : pending
  value : undefined


  task :  future value done -> [vegetables,salt,rice] --> fried rice
  status : fullfilled
  value : returned future value --> fried rice

 */


// Promise :
// future

const bucket1 = ['coffee','chips','vegetables',,'rice'];
// salt not present

/**
  Promise 

  task : future value --> fried rice -> made from [vegetables,salt,rice].
  status : pending 
  value : undefined


  task :  future value --> fried rice -> made from [vegetables,,rice]
  // salt not found.

  status : rejected
  value : ` couldnt do the task ` --> we can send any message or error.

 */

// Promise ----> Represents Future Value . 


// promise_&_setTimeout
function myPromise(){

    return new Promise((resolve,reject)=>{
        
        const value = true;

        setTimeout(()=>{
             if(value){
                resolve();
             }else{
                reject();
             }
        },2000);
    })
}


myPromise()
.then(()=>{console.log("resolved!")})
.catch(()=>{console.log("rejected!");})

// promise_chaining
/*
const myPromise = Promise.resolve(5);

myPromise
.then((value)=>{console.log(value);})

// then Method ---> always Consumes Promise --> and Returns the Promise .


*/


function myPromise(){
    
    return new Promise ((resolve,reject)=>{
        resolve("foo");
    })
}

myPromise()
.then((value)=>{
    console.log(value);
    value += "bar";
     return value;  // Returning ---> Promise and Not value
    // Internally working as in ---> return Promise.resolve(value);
    // return Promise.resolve(value);

    // In Case we didnt use return type here 
    // Lets comment return type
    // return undefined; //  will occur by default;
    // Internally working as in ---> return Promise.resolve(undefined);
    // return Promise.resolve(undefined);
})
.then((value)=>{
    console.log(value);
    value +="baaz";
    return value;

})
.then(value=>{
    console.log(value);
})

// promise_implementation
// const bucket = ['coffee','chips','vegetables','salt','rice'];

// const friedRicePromise  =new Promise((resolve,reject)=>{
//      if(bucket.includes('vegetables') && bucket.includes('rice') && bucket.includes('salt')){
//         // resolve("Fried Rice"); // can take any value string , array,object
//         resolve({value:"Fried Rice"}); // can take any value string , array,object

//      }else{
//         // reject("Couldnt Achieve Target!");
//         reject(new Error ("something missing in bucket")); // Error Object
//      }
// });

const friedRicePromise  =new Promise((resolve,reject)=>{
     if(bucket.includes('vegetables') && bucket.includes('rice') && bucket.includes('salt')){
        // resolve("Fried Rice"); // can take any value string , array,object
        resolve({value:"Fried Rice"}); // can take any value string , array,object

     }else{
        // reject("Couldnt Achieve Target!");
        reject(new Error ("something missing in bucket")); // Error Object
     }
});

friedRicePromise.then((myfriedrice)=>{
    console.log(`lets Eat my ${myfriedrice}`,);
    console.log(`lets Eat my `,myfriedrice);
},(error)=>{
    console.log(error);
}) // then method --> as input takes call back

 const bucket2 = ['coffee','chips','vegetables','salts','rice'];

 const friedRicePromise  =new Promise((resolve,reject)=>{
    if(bucket2.includes('vegetables') && bucket2.includes('rice') && bucket.includes('salt')){
       // resolve("Fried Rice"); // can take any value string , array,object
       resolve({value:"Fried Rice"}); // can take any value string , array,object

    }else{
       // reject("Couldnt Achieve Target!");
       reject(new Error ("something missing in bucket")); // Error Object
    }
});


friedRicePromise.then(
    (myfriedrice)=>{
    // console.log(`lets Eat my ${myfriedrice}`,);
    console.log(`lets Eat my `,myfriedrice);
    }
).catch((error)=>{
    console.log(error);
})

// 1. will run on console
console.log("Script Start");

// 2. will be stored in  memory 
const bucket4 = ['coffee','chips','vegetables','salt','rice'];

// 3. Promise is Object only will be stored in memory
const friedRicePromise  =new Promise((resolve,reject)=>{
    if(bucket4.includes('vegetables') && bucket4.includes('rice') && bucket4.includes('salt')){
       // resolve("Fried Rice"); // can take any value string , array,object
       resolve({value:"Fried Rice"}); // can take any value string , array,object

    }else{
       // reject("Couldnt Achieve Target!");
       reject(new Error ("something missing in bucket")); // Error Object
    }
});

// 4. consumption will be done by browser of this then
friedRicePromise.then(
    (myfriedrice)=>{
    // console.log(`lets Eat my ${myfriedrice}`,);
    console.log(`lets Eat my `,myfriedrice);
    }
).catch((error)=>{
    console.log(error);
})

// Then goes to Microtask Queue


setTimeout(()=>{
    console.log("execution of Set Timeout.");
},0);

// 5. js will come here to execute async manner
for(let i = 0;i<=100;i++){
    console.log(Math.random(),i);
}

// 6. last line of code
console.log("Script End");

/* 

https://www.geeksforgeeks.org/what-is-the-difference-between-microtask-queue-and-callback-queue-in-asynchronous-javascript/

*/