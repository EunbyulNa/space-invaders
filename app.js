
const container= document.querySelector(".container");
let spaceship = document.querySelector("#spaceship");

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
    setInterval(generateAlien,1500);
    setInterval(moveAlien,450);
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
  let top = parseInt(window.getComputedStyle(spaceship).getPropertyValue("top"));

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
