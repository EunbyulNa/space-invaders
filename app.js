
const container= document.querySelector(".container");
let spaceship = document.querySelector("#spaceship");
let scoreUpdate = 0;
let timerUpdate = 0;

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

/*function gameOver() {
  let end = document.createElement("div");
  const h1 = document.createElement("h1");
  end.classList.add("start");
  const endTxt = document.createTextNode("Gameover");
  h1.appendChild(endTxt);
  end.appendChild(h1);
  h1.classList.add("start-txt");
  container.appendChild(end);


}*/

//Start the game
function startGame() {
    let start = document.querySelector(".start");
    start.remove();
    generateScore();
    generateTimer();
    
    //Timer

  let startMin = 1;
  let time = startMin * 60;
  
  const timerWork = setInterval(() => {
    let mins = Math.floor(time / 60);
    let second = time % 60;

    let aTimer = document.querySelector(".timer span");
    
    time --;
    
    console.log(mins + ":" + second)

    timerUpdate =  mins + ":" + second;
  
    aTimer.textContent = timerUpdate;
  
    if(second === 0 ){
      clearInterval(timerWork)
    }
  },1000)


    //setInterval(generateAlien,1500);
    //setInterval(moveAlien,450);
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


     // check for collision with spaceship
    /*let spaceshipRect = spaceship.getBoundingClientRect();
    let alienRect = alien.getBoundingClientRect();
    let padding = 50;

    //spaceship.style.border = "1px solid red"

    if (alienRect.top <= spaceshipRect.bottom - padding&&
        alienRect.bottom >= spaceshipRect.top + padding&&
        alienRect.left <= spaceshipRect.right - padding&&
        alienRect.right >= spaceshipRect.left + padding)
        {
      // collision detected, end the game
      clearInterval(generateAlien,1500);
      clearInterval(moveAlien,450);
      alert("gameover")
    }*/


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
