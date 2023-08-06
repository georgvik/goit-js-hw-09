
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyEl= document.querySelector('body');

let intervalId= null;
let isActive = false;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  };

 function startBodyColorChange (){
    if (isActive){
        return;
    }
    isActive = true;
    intervalId = setInterval(() => {
        bodyEl.style.backgroundColor = getRandomHexColor();
            }, 1000);
      };
 
 function stopBodyColorChange() {
    isActive = false;
    clearInterval(intervalId);
 }
  startBtn.addEventListener("click",  startBodyColorChange);

 stopBtn.addEventListener("click",stopBodyColorChange);