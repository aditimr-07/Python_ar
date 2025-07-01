// dom_add_HTMLElement
const todolist = document.querySelector(".todo-list");
console.log(todolist);
console.log(todolist.innerHTML);


todolist.innerHTML = " <li>New Todo Task </li>";
todolist.innerHTML += "<li>adding New Todo with Existing</li>";
todolist.innerHTML += "<li>adding One More</li>";

const newTodoItem = document.createElement("li");
const newTodoItemText = document.createTextNode("Teach Students");
newTodoItem.append(newTodoItemText);

const todolist = document.querySelector(".todo-list");

// dom_classList
const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo);
console.log(sectionTodo.classList);

sectionTodo.classList.add('bg-dark');
console.log(sectionTodo.classList);

sectionTodo.classList.remove('bg-dark');
console.log(sectionTodo.classList);

sectionTodo.classList.toggle('bg-dark');
sectionTodo.classList.toggle('bg-dark');

const header = document.querySelector(".header");
console.log(header.classList);
header.classList.add("bg-dark");
console.log(header.classList);

// dom_clone_nodes
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "new Todo1";

ul.append(li);
// ul.prepend(li);

// const li2 = li.cloneNode();
const li2 = li.cloneNode(true); 

console.log(li2);
ul.prepend(li2);

// dom_createEle
const newTodoItem1 = document.createElement("li");
// console.log(newTodoItem1);

const todolist = document.querySelector(".todo-list");
todolist.append(newTodoItem);

console.log(newTodoItem);
const newTodoItem2 = document.createElement("li");
newTodoItem.textContent = "New Students";

const todolist = document.querySelector(".todo-list");
todolist.append(newTodoItem);
console.log(newTodoItem);

const todo1 = document.querySelector(".todo-list li");
console.log(todo1);
todo1.remove();

const newTodoItem = document.createElement("li");
newTodoItem.textContent= "Teach Students";
const todolist = document.querySelector(".todo-list");

todolist.before(newTodoItem);

const newTodoItem = document.createElement("li");
newTodoItem.textContent= "Teach Students";
const todolist = document.querySelector(".todo-list");

todolist.after(newTodoItem);

// dom_get_dimensions
const sectionTodo1 = document.querySelector(".section-todo");

const info1 = sectionTodo1.getBoundingClientRect();
const info2 = sectionTodo1.getBoundingClientRect().top;
const info3 = sectionTodo1.getBoundingClientRect().width;
const info4 = sectionTodo1.getBoundingClientRect().bottom;
const info5 = sectionTodo1.getBoundingClientRect().left;

console.log(info1);
console.log(info2);
console.log(info3);
console.log(info4);
console.log(info5);

// dom_insertAdjHtml
elem.insertAdjacentHTML(where,html) //--> Used Less/Method

// beforebegin
// afterbegin
// beforend
// afterend

const todolist = document.querySelector(".todo-list");
todolist.insertAdjacentHTML("beforeend","<li>beforeEnd</li>");

const todolist = document.querySelector(".todo-list");
todolist.insertAdjacentHTML("afterbegin","<li>afterBegin</li>");

const todolist = document.querySelector(".todo-list");
todolist.insertAdjacentHTML("beforebegin","<li>beforebegin</li>");

const todolist = document.querySelector(".todo-list");
todolist.insertAdjacentHTML("afterend","<li>afterend</li>");

// dom_old_methods
// 1. appendChild Method 

const ul1 = document.querySelector(".todo-list");
// new Element
const li1 = document.createElement("li");
li1.textContent = "new todo";
ul1.appendChild(li1);

// 2. insertBefore Method 

const ul2 = document.querySelector(".todo-list");
// new Element
const li = document.createElement("li");
const referenceNode = document.querySelector(".todo-list > li");
li.textContent = "new todo";
//  syntax :
// tomakechangesin.insertbefore(what to insert,before whom);
ul2.insertBefore(li,referenceNode);

//3. replaceChild Method

const ul3 = document.querySelector(".todo-list");
// new Element
const li3 = document.createElement("li");
li3.textContent = "new todo";

const referenceNode1 = document.querySelector(".todo-list > li");

ul3.replaceChild(li3,referenceNode1);

// 4. removeChild
const ul4 = document.querySelector(".todo-list");
const li4 = document.querySelector(".first-todo");
ul4.removeChild(li4);

// dom_staticlist_livelist
const listItems = document.querySelectorAll(".todo-list li");
console.log(listItems);

const sixthli = document.createElement("li");
sixthli.textContent = "item6";
console.log(listItems);

const ul5 = document.querySelector(".todo-list");
ul5.append(sixthli);

console.log(listItems);

const ul6 = document.querySelector(".todo-list");

const liItems = ul6.getElementsByTagName("li");
console.log(liItems);


const sixthli = document.createElement("li");
sixthli.textContent = "item6";
ul6.append(sixthli);

console.log(liItems);

// dom_traversing
const rootNode = document.getRootNode();
console.log(rootNode); // document object

const childOfRootNode = rootNode.childNodes;
console.log(childOfRootNode);  // NodeList [html]

const htmlElementNode = rootNode.childNodes[0];
console.log(htmlElementNode);

const htmlchildNodes = htmlElementNode.childNodes;
console.log(htmlchildNodes); // NodeList(3) [head, text, body]

const headElementNode = htmlchildNodes[0];
const textElementNode = htmlchildNodes[1];
const bodyElementNode = htmlchildNodes[2];
console.log(headElementNode);
console.log(textElementNode);
console.log(bodyElementNode);

console.log(headElementNode.parentNode);

console.log(headElementNode.nextSibling);
console.log(textElementNode.nextSibling);
console.log(bodyElementNode.nextSibling);

console.log(textElementNode);
console.log(headElementNode.nextElementSibling);

console.log(headElementNode.childNodes);

const body =  document.body;
body.style.backgroundColor = "red";

const head = document.querySelector("head");
console.log(head);

const headtitle = head.querySelector("title");
console.log(headtitle);
console.log(headtitle.childNodes);
console.log(headtitle.nextElementSibling);

const container = document.querySelector(".container");
console.log(container);
console.log(container.childNodes);
console.log(container.children); // This is Way

/* 
  task :
   <html>
    <head>
        <title> DOM Traversing</title>
        <script src="dom_tree.js" defer></script>
    </head>
    <body>
        <div class="container">
            <h1>My Heading</h1>
            <p>Some Useful Information .</p>
        </div>
    </body>
    </html>

    here: select h1 tag and traverse dom to its parent
    and change background color .
*/


/*

// solution :

const h1 = document.querySelector("h1");
const parentdivofh1 = h1.parentNode;
const body = h1.parentNode.parentNode;
parentdivofh1.style.color = "#efefef";
parentdivofh1.style.backgroundColor = "#333";
body.style.backgroundColor = "purple";

*/