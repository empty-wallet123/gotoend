/*const myHeading = document.querySelector('h1');*/
/*
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}
*/
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }
multiply(4,3);
/*
document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me! 别点我！");
  }); 
*/
const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  let changed = true
  if (mySrc === "images/cat1.jpg" & changed)  {
    myImage.setAttribute("src", "images/cat2.jpg");
    changed = false;
  } 
  if (mySrc === "images/cat2.jpg" & changed) {
    myImage.setAttribute("src", "images/cat3.jfif");
    changed = false;
  }  
  if (mySrc === "images/cat3.jfif" & changed) {
    myImage.setAttribute("src", "images/cat1.jpg");
    changed = false;
  }  
  }

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  if(!myName){
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `网页设计很酷吧, ${myName}`;
  }
  }
  
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `网页设计很酷吧, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};