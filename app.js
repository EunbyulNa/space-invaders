let spaceship = document.querySelector("#spaceship");

const container= document.querySelector(".container");

const limitLeft = 0;
const limitRight = 540;
const limitTop = 36;
const limitBottom = 520;
const movement = 10;


//Spaceship position movement
window.addEventListener("keydown", function(e) {

  //Get the left and top position
  let left = parseInt(window.getComputedStyle(spaceship).getPropertyValue("left"));
  let top = parseInt(spaceship.offsetTop);

   //If a left key is press down
   //Change the left position
   switch (e.key) {
     case "ArrowLeft":
        if(left > limitLeft ) {
          spaceship.style.left = left - movement + "px"
        };
       break;
     case "ArrowRight":
        if(left < limitRight ) {
          spaceship.style.left = left + movement + "px"
        };
       break;
    case "ArrowUp" :
       if(top  > limitTop) {
         spaceship.style.top = top - movement + "px"
       };
      break;
    case "ArrowDown":
      if(top < limitBottom){
        spaceship.style.top = top + movement + "px"
      };
     break;
   }
});


//Generate aliens
function generateAlien() {

const alien = document.createElement("IMG");
      alien.setAttribute("id", "alien");
      alien.setAttribute("src", "img/alien.png");

alien.style.left = Math.floor(Math.random() * 540)+ 'px';
container.appendChild(alien);
};

//Move down aliens
function moveAlien() {
  let aliens = document.querySelectorAll("#alien");
  for( var i=0; i< aliens.length; i++){
    let alien = aliens[i];
    let alienTop = parseInt(window.getComputedStyle(alien).getPropertyValue("top"));
    alien.style.top = alienTop + 20 + 'px';

    if(alienTop === 560){
      alien.remove()
    }
  }
}


setInterval(generateAlien,1500);
setInterval(moveAlien,450);
