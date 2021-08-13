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

var body = document.querySelector(".body");
var pageX = document.getElementById("x");
var pageY = document.getElementById("y");
var spotlight = document.getElementById("spotlight-container");

function updateDisplay(event) {
    pageX.innerText = event.pageX;
    pageY.innerText = event.pageY;  
    spotlight.setAttribute('style', "top:" + event.pageY + "px;left:" + event.pageX + "px;");

}

console.log('' + body + '');
body.addEventListener("mousemove", updateDisplay, false);
body.addEventListener("mouseenter", updateDisplay, false);
body.addEventListener("mouseleave", updateDisplay, false);

var timerVar = setInterval(countTimer, 1000);
var totalSeconds = 0;
function countTimer() {
   ++totalSeconds;
   var hour = Math.floor(totalSeconds /3600);
   var minute = Math.floor((totalSeconds - hour*3600)/60);
   var seconds = totalSeconds - (hour*3600 + minute*60);
   if(hour < 10)
     hour = "0"+hour;
   if(minute < 10)
     minute = "0"+minute;
   if(seconds < 10)
     seconds = "0"+seconds;
   document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
}  