
const container= document.querySelector(".container");

window.addEventListener("DOMContentLoaded", function () {
  let start = document.createElement("div");
  let startImg = document.createElement("IMG");
  start.classList.add("start")
  startImg.classList.add("start-img");
  startImg.setAttribute("src", "img/start.jpeg");
  container.appendChild(start);
  start.appendChild(startImg);
});

window.addEventListener("keydown", function (e) {
  let start = document.querySelector(".start")
  if(e.code === "Enter") {
     start.style.opacity = 0;
     setTimeout(() => {
  container.removeChild(start);
  setTimeout(() => {
    generateAlien();
  }, 1000);
}, 5000);

  }
})

let spaceship = document.querySelector("#spaceship");
//Spaceship position movement
window.addEventListener("keydown", function(e) {

  //Get the left and top position
  let left = parseInt(window.getComputedStyle(spaceship).getPropertyValue("left"));
  let top = parseInt(window.getComputedStyle(spaceship).getPropertyValue("top"));



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
         if(top < 600){
        spaceship.style.top = top + 20 + "px"
     }
     break;

   }
});


window.addEventListener("keydown", function (e) {
  if(e.keyCode == 32) {

    let bullet = document.createElement("IMG");
    bullet.setAttribute("id", "bullet");
    bullet.setAttribute("src", "img/bullet.png");
    container.appendChild(bullet);

    //Updating bullet bottom position every seconds
    /*let moveBullet = setInterval(() => {
      let bulletBottom =  parseInt(window.getComputedStyle(bullet).getPropertyValue("bottom"));
      console.log(bulletBottom)
     bullet.style.bottom = bulletBottom + 3 + 'px'
   },2000)*/
 }
})

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

setInterval(generateAlien,1500);
setInterval(moveAlien,450);
