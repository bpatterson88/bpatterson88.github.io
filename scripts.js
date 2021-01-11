console.log('lol');

var body = document.querySelector(".content");
var pageX = document.getElementById("x");
var pageY = document.getElementById("y");

function updateDisplay(event) {
  pageX.innerText = event.pageX;
  pageY.innerText = event.pageY;  
}

body.addEventListener("mousemove", updateDisplay, false);
body.addEventListener("mouseenter", updateDisplay, false);
body.addEventListener("mouseleave", updateDisplay, false);