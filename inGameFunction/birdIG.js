// Declare
const bird = document.querySelector(".bird");

// Access to bird's attribute value
const get_bird = window.getComputedStyle(bird);

// Position
// Top
const top_bird = get_bird.getPropertyValue("top");

let y_bird = parseFloat(top_bird);
// Unit
const gravity = 2;
const movement = 50;

// Fix times keyup, keydown
let count = 0;

export function animation() {
  bird.style.top = `${y_bird}px`;
  y_bird += gravity;
  actBird();
  requestAnimationFrame(animation);
}

function actBird() {
  window.addEventListener("keypress", (button) => {
    count++;
    if (count == 1) {
      if (button.key == "r") {
        // console.log("bay");
        y_bird -= movement;
        // bird.style.top = `${y_bird}px`;
      }
    }
  });
  window.addEventListener("keyup", (button) => {
    if (button.key == "r") {
      // console.log("bay");
      count = 0;
    }
  });
}
