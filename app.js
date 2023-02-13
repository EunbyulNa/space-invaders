let spaceship = document.querySelector("#spaceship");


window.addEventListener("keydown", function(e) {
  console.log(e)
  let left = parseInt(window.getComputedStyle(spaceship).getPropertyValue("left"));
  let top = parseInt(spaceship.offsetTop);
  console.log(top)
  if(e.key == "ArrowLeft" && left > 0) {
     spaceship.style.left = left - 10 + "px"
  } else if(e.key == "ArrowRight" && left < 540){
    spaceship.style.left = left + 10 + "px"
  } else if( e.key == "ArrowUp" && top > 36){
    spaceship.style.top = top - 20 + "px"
  } else if( e.key == "ArrowDown" && top < 520){
      spaceship.style.top = top + 20 + "px"
  }
});
