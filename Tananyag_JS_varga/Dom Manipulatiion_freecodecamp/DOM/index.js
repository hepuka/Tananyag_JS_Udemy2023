const title = document.getElementById("main-heading");
console.log(title);

const listItem = document.getElementsByClassName("list-item");
console.log(listItem);

const tagItem = document.getElementsByTagName("li");
console.log(tagItem);

const container = document.querySelector("div");
console.log(container);

/*NodeList*/
const containers = document.querySelectorAll("div");
console.log(containers);

/////////////////////////////////////////////MANIPULATION/////////////////////////////////

//styling elements
const title2 = document.querySelector("#main-heading");
title2.style.color = "red";
console.log(title2);

const listItems = document.querySelectorAll(".list-item");
//for ciklus kell a NodeList miatt
for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.fontSize = "1.5rem";
}
console.log(listItems);

//creating elements to DOM
const ul = document.querySelector("ul");
const li = document.createElement("li");
ul.append(li);

li.innerText = "Added Movie";
li.setAttribute("id", "main-heading");
li.removeAttribute("id");

li.classList = "list-item";
//li.classList.remove("list-item");

//getAttribute value
const title3 = document.querySelector("#main-heading");
console.log(title3.getAttribute("id"));

//remove elements to DOM
li.remove();

//////////////////////////////////////////parent node traversal////////////////////////////////
let ul2 = document.querySelector("ul");
console.log(ul2);

//ul elem szülőjének keresése
console.log(ul2.parentNode);
//vagy
console.log(ul2.parentElement);

//további szülőelemek keresése
console.log(ul2.parentNode.parentNode);

//////////////////////////////////////////child node traversal////////////////////////////////

//ul összes gyermekét visszaadja//ez esetben az li elemeket és az li elem szövegét
console.log(ul2.childNodes);
console.log(ul2.firstChild);
console.log(ul2.lastChild);

ul2.childNodes[1].style.backgroundColor = "blue";

console.log(ul2.children);
console.log(ul2.firstElementChild);
console.log(ul2.lastElementChild);

//////////////////////////////////////////Sibling node traversal////////////////////////////////

const div = document.querySelector("div");
console.log(div.childNodes); //NodeList-ben látszanak a testvér elemek. 5.elem a ul elem és az előőte és az utánna lévő elem is text elem

console.log(ul2);
console.log(ul2.previousSibling);
console.log(ul2.nextSibling);
