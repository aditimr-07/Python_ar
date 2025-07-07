console.log("Script Start");

const URL ="https://jsonplaceholder.typicode.com/posts";

// Get Request :

// const promise = fetch(URL);


// Consuming promise with then
// promise.then(res=>res.json()).then(data=>console.log(data));


/*
async function getPosts(){
  const response = await fetch(URL);
  if(!response.ok){
    throw new Error("Something went Wrong!");
  }
  const data =  await response.json();
  return data;
}
*/

 const getPosts = async()=>{
    const response = await fetch(URL);
    if(!response.ok){
      throw new Error("Something went Wrong!");
    }
    const data =  await response.json();
    return data;
  }

getPosts()
.then(data =>{console.log(data)})
.catch(error=>{console.error(error);})

console.log("Script End");

// fetch_API
const URL2 ="https://jsonplaceholder.typicode.com/postss";


const promise = fetch(URL2); // --> returns PRomise

// console.log(promise);


// Promise ---> after Resolve --> giving response
promise.then(response=>{
    console.log(response);
     // Response here can be fetched using json method --> parsing the response
    const data = response.json();
    // gives Promise
    // console.log(data);

    return data;

}).then(data =>{
    // this promise gives data after resolve
    console.log(data);
})
.catch(error=>{
    console.log("inside catch block");
    console.log(error);
})

// here You can see when theres 404 error 
// fetch doesnt stop and catch block doesnt work
// response is still given inside then --> so we can handle Error in fetch like :
// below code :
//_------------------------------------------------------------------------------------
/*
const URL ="https://jsonplaceholder.typicode.com/posts";
// const URL ="https://jsonplaceholder.typicode.com/postss";

const promise = fetch(URL);

promise.then((response)=>{
    console.log("inside then")
    console.log(response);
   
    if(response.ok){
        return response.json();
    }else{
        throw new Error("Something Went Wrong!!");
    }
   
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("inside catch block");
    console.error(error);
})

*/

/* 
  more about it :
  https://jsonplaceholder.typicode.com/guide/

*/

// =========================================================================================

const URL1 ="https://jsonplaceholder.typicode.com/posts";
// const URL1 ="https://jsonplaceholder.typicode.com/postss";

const promise1 = fetch(URL1,{
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
});

promise1.then((response)=>{
    console.log("inside then")
    console.log(response);
   
    if(response.ok){
        return response.json();
    }else{
        throw new Error("Something Went Wrong!!");
    }
   
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("inside catch block");
    console.error(error);
})

// intro_XHR
const url = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();

//  console.log(xhr);
//  contains properties.

/*
 // step 1:
 console.log(xhr.readyState);
 xhr.open("GET",url);
 console.log(xhr.readyState);

 xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
 }

 xhr.send();    

*/

// onreadystatechange will run only when readystate will change ---> 3 and 4

//  xhr.onreadystatechange = function(){
//     if(xhr.readyState===3){

//          console.log(xhr);
//         //  console.log(xhr.response);
//          console.log(typeof xhr.response); // string
//          // We get response in json 
//          // we need to convert in js object

//     }
//     if(xhr.readyState===4){

//         console.log(xhr);
//         // console.log(xhr.response);
//         console.log(typeof xhr.response); // string
//         // We get response in json 
//         // we need to convert in js object
//         const response = xhr.response;
//         const  data = JSON.parse(response);
//         console.log(typeof data);
//         console.log(data);

//    }
//  }
/*
// onload will run only when readystate ---> 4
xhr.onload = function(){
    console.log(xhr.readyState);
    // converting xhr Response --> from JSON to JS object
    const response = xhr.response;
    const data = JSON.parse(response);
    console.log(data);
}
*/
// xhr.send();


 // XHR ready State --> phases.
 /* https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState */

 // HTTP response status code :
 /* https://developer.mozilla.org/en-US/docs/Web/HTTP/Status */

// XHR_errorhandling
/* https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState*/


// XHR --> XMLHttpRequest --> using Callback function --> error handling .

/*

// url --> to fetch and send
const URL ="https://jsonplaceholder.typicode.com/posts/2";

const xhr = new XMLHttpRequest();
// XHR Object 
// console.log(xhr); 

// console.log(xhr.readyState);
xhr.open("GET", URL);

// when ready state is 4 --> do inside function tasK
xhr.onload = () =>{

  if(xhr.status>=200 && xhr.status <300){
    const data = JSON.parse(xhr.response);
    console.log(data); 
  }else{
    console.log("something went wrong!!");
  }

}

// to handle network related error or we couldnt reach to server
// like network or server issue
xhr.onerror = () =>{
    console.log("network error!");
}
xhr.send();

*/
// ---------------------------------------------------------------------------------------------------

// Case 2:

// url --> to fetch and send
const URL3 ="https://jsonplaceholder.typicode.com/posts";

const xhr2 = new XMLHttpRequest();
// XHR Object 
// console.log(xhr); 

// console.log(xhr.readyState);
xhr2.open("GET", URL3);

// when ready state is 4 --> do inside function tasK
xhr2.onload = () =>{

  if(xhr2.status>=200 && xhr2.status <300){
    const data = JSON.parse(xhr2.response);
    console.log(data); 
    const id = data[3].id;
    // console.log(id);

    const xhr3 = new XMLHttpRequest();
    const URL4 = `${URL3}/${id}`;
    console.log(URL4);

    xhr3.open("GET", URL4);

    xhr3.onload = () =>{
        const data2 = JSON.parse(xhr3.response);
        console.log(data2);
    }

    xhr3.send();

  }else{
    console.log("something went wrong!!");
  }

}

// to handle network related error or we couldnt reach to server
// like network or server issue
xhr2.onerror = () =>{
    console.log("network error!");
}
xhr2.send();

// XHR_using_promises
const URL4 ="https://jsonplaceholder.typicode.com/posts";



function sendRequest(method,url4){

    return new Promise (function (resolve,reject){

        const xhr = new XMLHttpRequest();
        xhr.open(method,url4);
        xhr.onload = function () {

          if(xhr.status >= 200 && xhr.status <300){

             resolve(xhr.response);

          }
          else{
  
              reject(new Error("Something Went Wrong!!"));

          }
        }

        xhr.onerror = function(){
            reject(new Error("Server Side Error or Network Down"));
        }

        xhr.send();
  

         });
}

// Created Promise
// const data = sendRequest("GET",URL);
// console.log(data);

// Consuming 
sendRequest("GET", URL4)
.then((response)=>{

    const data = JSON.parse(response);
    // console.log(data);
    return data;
})
.then(data=>{
    console.log(data);
    const id = data[4].id;
    return id;
})
.then(id=>{
    console.log(id);
    const url = `${URL4}/${id}`;
    console.log(url);
    return sendRequest("GET",url);
})
.then(newreponse=>{
    const newData = JSON.parse(newreponse);
    console.log(newData);
})
.catch(error=>{
    console.log(error);
})
