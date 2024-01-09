// Declare
const bird = document.querySelector(".bird");

// Y Bird
let y_bird = 800;
// Unit
const gravity = 0.2;
let movement = 0;

// Fix times keyup, keydown
let count = 0;

// Animation 
export function animation() {
  movement += gravity;
  y_bird += movement;
  actBird();
  bird.style.top = `${y_bird}px`;
  requestAnimationFrame(animation);
}

// Event press
function actBird() {
  window.addEventListener("keypress", (button) => {
    count++;
    if (count == 1) {
      if (button.key == " ") {
        movement = -5;
      }
    }
  });
  window.addEventListener("keyup", (button) => {
    if (button.key == " ") {
      // console.log("bay");
      count = 0;
    }
  });
}
