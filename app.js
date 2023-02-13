let spaceship = document.querySelector("#spaceship");


window.addEventListener("keydown", function(e) {
  let left = parseInt(window.getComputedStyle(spaceship).getPropertyValue("left"));
  if(e.key = "ArrowLeft") {
    spaceship.style.left = left - 10 + "px"
  };
});
