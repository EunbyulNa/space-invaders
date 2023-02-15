let spaceship = document.querySelector("#spaceship");

const container= document.querySelector(".container");

//Spaceship position movement
window.addEventListener("keydown", function(e) {

  //Get the left and top position
  let left = parseInt(window.getComputedStyle(spaceship).getPropertyValue("left"));
  let top = parseInt(spaceship.offsetTop);

   //If a left key is press down
   //Change the left position
   switch (e.code) {
     case "ArrowLeft":
        if(left > 30){
          spaceship.style.left = left - 20 + "px"
        }
       break;
     case "ArrowRight":
         if(left < 1190){
          spaceship.style.left = left + 20 + "px"
        }
       break;
    case "ArrowUp" :
          if(top > 65){
         spaceship.style.top = top - 20 + "px"
       }
      break;
    case "ArrowDown":
         if(top < 500){
        spaceship.style.top = top + 20 + "px"
     }
     break;
    case "Space":
    let bullet = document.createElement("IMG");
    bullet.setAttribute("id", "bullet");
    bullet.setAttribute("src", "img/bullet.png");
      container.appendChild(bullet);
     break;
   }
});


//Generate aliens
function generateAlien() {

const alien = document.createElement("IMG");
      alien.setAttribute("id", "alien");
      alien.setAttribute("src", "img/alien.png");

alien.style.left = Math.floor(Math.random() * 1000)+ 'px';
container.appendChild(alien);
};

//Move down aliens
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

//setInterval(generateAlien,1500);
//setInterval(moveAlien,450);
