
const container= document.querySelector(".container");
let spaceship = document.querySelector("#spaceship");
let scoreUpdate = 0;
let timerUpdate=0;
let generateAlienId;
let moveAlienId;

window.addEventListener("DOMContentLoaded", createStartImg);

//Generate start image
function createStartImg() {
  let start = document.createElement("div");
  const h1 = document.createElement("h1");
  start.classList.add("start");
  const startTxt = document.createTextNode("Press enter to Play");
  h1.appendChild(startTxt);
  start.appendChild(h1);
  h1.classList.add("start-txt");
  container.appendChild(start);

  window.addEventListener("keydown", function (e) {
    if(e.code === "Enter") {
      startGame();
   };
 });
};




//Start the game
function startGame() {
    let start = document.querySelector(".start");
    start.remove();
    generateScore();
    generateTimer();
    timeReduce()
    generateAlienId = setInterval(generateAlien, 1500);
    moveAlienId = setInterval(moveAlien, 450);

}

function timeReduce() {
  let time = 60; //60seconds

  const timerWork = setInterval(() => {
  let aTimer = document.querySelector(".timer span");

  let mins = Math.floor(time / 60);   //1
  let second = time % 60;   //1 % 60 -> 0

  //if mins are less than 10 add "0" front of mins,
  //if seconds are less than 10, add "0" front of seconds
    if(mins < 10) {
    mins = "0" + mins;
  }
  if(second < 10) {
    second = "0" + second;
  }
  
  timerUpdate = mins + ":" +  second;
  aTimer.textContent = timerUpdate;

  time --;
 
  if(time == 55 ){
    clearInterval(timerWork);
   
     gameOver();
  }
},1000)
}

//Gameover
function gameOver(){
  

spaceship.remove();
  clearInterval(generateAlienId);
  clearInterval(moveAlienId);
 const overDiv = document.createElement("div");
 const overh1 = document.createElement("h1");
 const overTxt = document.createTextNode("Game over");
 const overP = document.createElement("p");
 const overTxtTwo = document.createTextNode("Your score is : ");

 overDiv.classList.add("game-over");
 overh1.appendChild(overTxt);
 overP.appendChild(overTxtTwo);
 overDiv.appendChild(overh1);
 overDiv.appendChild(overP);
 container.appendChild(overDiv);

}



//GenerateScore
function generateScore() {
  const score = document.createElement("p");
  const scoreSpan = document.createElement("span");

  score.classList.add("score");
  const scoreTxt = document.createTextNode("Score : ");
  let scoreSpanTxt = document.createTextNode(scoreUpdate);

  scoreSpan.appendChild(scoreSpanTxt)
  score.appendChild(scoreTxt);
  score.appendChild(scoreSpan);
  container.appendChild(score);
}

//GenerateTimer
function generateTimer() {
  const timer = document.createElement("p");
  const timerSpan = document.createElement("span");

  timer.classList.add("timer");
  const timerTxt = document.createTextNode("Timer : ");
  let timerSpanTxt = document.createTextNode(timerUpdate);

  timerSpan.appendChild(timerSpanTxt)
  timer.appendChild(timerTxt);
  timer.appendChild(timerSpan);
  container.appendChild(timer);
 

}


//Generate aliens
function generateAlien() {
  const alien = document.createElement("IMG");
        alien.setAttribute("id", "alien");
        alien.setAttribute("src", "img/alien.png");
        alien.style.left = Math.floor(Math.random() * 1000)+ 'px';
        container.appendChild(alien);
};

//Move aliens
function moveAlien() {
  let aliens = document.querySelectorAll("#alien");
  aliens.forEach( (alien) => {
    let alienTop = parseInt(window.getComputedStyle(alien).getPropertyValue("top"));
     alien.style.top = alienTop + 20 + 'px';
     if(alienTop === 700) {
       alien.remove()
     };
  });
};

//Spaceship position movement
window.addEventListener("keydown", function(e) {
  //Get the left and top position
  let left = parseInt(window.getComputedStyle(spaceship).getPropertyValue("left"));

   //If a left key is press down change the left position
   switch (e.code) {
     case "ArrowLeft":
        if(left > 30){
          spaceship.style.left = left - 20 + "px"
        };
       break;
     case "ArrowRight":
         if(left < 1190){
          spaceship.style.left = left + 20 + "px"
        };
       break;
     case "Space":
       generateBullet();
       break;
   }
});


//Generate bullet
function generateBullet() {

    let scoreSpan = document.querySelector(".score span");

    let bullet = document.createElement("IMG");
    bullet.setAttribute("id", "bullet");
    bullet.setAttribute("src", "img/bullet.png");
    container.appendChild(bullet);
    let left = parseInt(window.getComputedStyle(spaceship).getPropertyValue("left"));
    bullet.style.left = left + 14 + 'px'

    //Updating bullet bottom position every seconds
      let moveBullet = setInterval(() => {

         let bulletBottom =  parseInt(window.getComputedStyle(bullet).getPropertyValue("bottom"));
         bullet.style.bottom = bulletBottom + 3 + 'px';

         let bullets = document.querySelectorAll("#bullet");
         let aliens = document.querySelectorAll("#alien");

         //The top property represents the distance between the top edge of the viewport
         //and the top edge of the element,
         bullets.forEach( (bullet) => {
           let bulletRect = bullet.getBoundingClientRect();

         aliens.forEach( (alien) => {
          let alienRect = alien.getBoundingClientRect();

          if(bulletRect.top <= alienRect.bottom &&
            bulletRect.bottom >= alienRect.top &&
            bulletRect.left <= alienRect.right &&
            bulletRect.right >= alienRect.left)
            {
             scoreUpdate = scoreUpdate + 1;
             scoreSpan.textContent = scoreUpdate;
             alien.remove()
             bullet.remove();
          }
         })

          if(bulletBottom === 700) {
            bullet.remove();
            clearInterval(moveBullet);
          };

         })
      },5)

}
