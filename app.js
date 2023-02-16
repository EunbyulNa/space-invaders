
const container= document.querySelector(".container");

//Generate start image
window.addEventListener("DOMContentLoaded", function () {
  let start = document.createElement("div");
  let h1 = document.createElement("h1");

  start.classList.add("start")
const startTxt = document.createTextNode("Press enter to Play");
h1.appendChild(startTxt);
  container.appendChild(start);
  start.appendChild(h1);
  h1.classList.add("start-txt");
});

//Start the game
window.addEventListener("keydown", function (e) {
  let start = document.querySelector(".start")
  if(e.code === "Enter") {
     start.remove()
      setInterval(generateAlien,1500)
      setInterval(moveAlien,450)

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

window.addEventListener("keydown", function (e) {
  if(e.keyCode == 32) {
    let left = parseInt(window.getComputedStyle(spaceship).getPropertyValue("left"));

    let bullet = document.createElement("IMG");
    bullet.setAttribute("id", "bullet");
    bullet.setAttribute("src", "img/bullet.png");
    container.appendChild(bullet);
       bullet.style.left = left + 14 + 'px'

    //Updating bullet bottom position every seconds
   let moveBullet = setInterval(() => {

     let bulletBottom =  parseInt(window.getComputedStyle(bullet).getPropertyValue("bottom"));
     bullet.style.bottom = bulletBottom + 3 + 'px';


    let bullets = document.querySelectorAll("#bullet");
    let aliens = document.querySelectorAll("#alien");

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
  },1)


}
})
