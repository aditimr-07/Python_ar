const mainHeading = document.querySelector("#main-heading");
const divElement = document.querySelector("div"); // will return the  first div 
console.log(divElement);

const heading2 = document.querySelector("div.headline h2");
console.log(heading2);
console.log(heading2.style); 
heading2.style.color="#fff";

// heading2.style.background-color="purple";// throws error
heading2.style.backgroundColor="purple"; 
heading2.style.border = "5px solid black";
heading2.style.padding = "5px";

console.dir(window.document.head.style);

// dom_
console.log(window.document); // Human readable representation of JS
console.dir(window.document); // JS Object what Browers See

// get_elementby_id
console.log(window);
console.log(window.document);
console.dir(window.document);

console.log(typeof document.getElementById("main-heading"));
console.log(document.getElementById("main-heading"));
console.dir(document.getElementById("main-heading"));
const headerELement = document.getElementById("main-heading");
// headerELement.style.color= "red"; 

// get_set_attributes
const link = document.querySelector("a");
console.log(link.getAttribute("href"));

const inputElement = document.querySelector(".form-todo input");
console.log(inputElement.getAttribute("type"));

// const link = document.querySelector("a");
// link.setAttribute("href","https://www.google.com");

console.log(link.getAttribute("href"));
console.log(link.getAttribute("href").slice(8));

// getElebyClass_queryAll
const navItems = document.getElementsByClassName("nav-item");
console.log(navItems);

console.log(navItems[0]);
console.log(navItems[1]);

console.log(typeof navItems[2]);
console.log(Array.isArray(navItems));
// const navItems = document.querySelectorAll(".nav-item");
console.log(navItems);
console.log(navItems[0]);
console.log(navItems[1]);

// innerHTML_
const headLine = document.querySelector(".headline");
console.log(headLine);
console.log(headLine.innerHTML);

headLine.innerHTML = "<h1>Inner Html Changed So Manage </h1>";
headLine.innerHTML += "<button class =\"btn btn-headline\">Learn More<button>";

console.log(headLine.innerHTML);


const navItems1 = document.getElementsByClassName("nav-item");
console.log(navItems1);

console.log(navItems1[0]);
console.log(navItems1[1]);
console.log(typeof navItems1[2]);
console.log(Array.isArray(navItems1));
const navItems2 = document.querySelectorAll(".nav-item");
console.log(navItems2);

console.log(navItems2[0]);
console.log(navItems2[1]);

const navItems3 = document.getElementsByClassName("nav-item"); 
console.log(navItems3.length);
for(let i = 0; i < navItems3.length;i++){
    console.log(navItems3[i]);
    }

for(let i = 0; i < navItems.length;i++){
    const navItem = navItems[i];
    navItem.style.backgroundColor = "#fff"; // changed
    navItem.style.color = "black"; // No change as text is inside li a i.e anchor tag

}
const anchorTags = document.getElementsByTagName("a");
console.log(anchorTags);

for(let i = 0; i < anchorTags.length;i++){
    const anchorTag = anchorTags[i];
    anchorTag.style.backgroundColor = "#fff"; // changed
    anchorTag.style.color="green"; // No change as text is inside li a i.e anchor tag
    anchorTag.style.fontWeight="bold"; 

}

for(let anchorTag of anchorTags){
    anchorTag.style.color = "purple";
    anchorTag.style.backgroundColor = "#fff";
    anchorTag.style.fontWeight = "bold";

}

anchorTags.forEach((anchorTag)=> {
    anchorTag.style.color = "purple";
    anchorTag.style.backgroundColor = "#fff";
    anchorTag.style.fontWeight = "bold";

});

const navItems4 = document.getElementsByClassName("nav-item"); 

 let anchorTags1 = document.getElementsByTagName("a"); 
 anchorTags1 = Array.from(anchorTags1);

 anchorTags1.forEach((anchorTags1)=> {
    anchorTags1.style.color = "purple";
    anchorTags1.style.backgroundColor = "#fff";
    anchorTags1.style.fontWeight = "bold";

});

let anchorTags2 = document.querySelectorAll("a");

console.log(anchorTags2);

for(let i = 0; i < anchorTags.length;i++){
    const anchorTag = anchorTags[i];
    anchorTag.style.backgroundColor = "#fff"; // changed
    anchorTag.style.color="green"; // No change as text is inside li a i.e anchor tag
    anchorTag.style.fontWeight="bold"; 

}

for(let anchorTag of anchorTags){
    anchorTag.style.color = "purple";
    anchorTag.style.backgroundColor = "#fff";
    anchorTag.style.fontWeight = "bold";

}

anchorTags.forEach((anchorTag)=> {
    anchorTag.style.color = "purple";
    anchorTag.style.backgroundColor = "#fff";
    anchorTag.style.fontWeight = "bold";

});

anchorTags = Array.from(anchorTags); // Convert Nodelist --> Array

console.log(Array.isArray(anchorTags)); // True

// querySelector_
const mainHeading1 = document.querySelector("#main-heading");

mainHeading1.style.color="red";

const header = document.querySelector(".header");

console.log(header);

const navItem = document.querySelector(".nav-item");

console.log(navItem);

const navItems5 = document.querySelectorAll(".nav-item"); 
console.log(navItems5);

// text_Context
const mainHeading1 = document.getElementById("main-heading");
console.log(mainHeading1.textContent);

mainHeading1.textContent = "This is Something Else.";


const mainHeading2 = document.getElementById("main-heading");
console.log(mainHeading2.textContent); 

console.log(mainHeading2.innerText);
