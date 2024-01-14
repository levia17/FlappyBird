import gameAudio from "./audio.js";

// Declare
export const bird = document.querySelector(".bird");
const bird_action = document.querySelector(".bird img");
// List action
const action = ["up", "mid", "down"];

// Y Bird
let y_bird = 800;
// Unit
const gravity = 0.2;
let movement = 0;

// Fix times keyup, keydown
let count = 0;

// Audio
const audioEffect = gameAudio();

// Bird's action
let i_action = 0;
export function flap(){
  setInterval(()=>{
    actBird();
    bird_action.setAttribute(`src`, '/component/yellowbird-' + action[i_action] + 'flap.png')
  },200)

  function actBird() {
    if (i_action < 2) {
      i_action++;
    } else if (i_action == 2){
      i_action = 0;
    }
  }
}

// Animation
export function animation() {
  // console.log(i_action);
  movement += gravity;
  y_bird += movement;
  moveBird();
  bird_action.style.rotate = `${movement / 20}rad`;
  bird.style.top = `${y_bird}px`;
  return y_bird;
}

// Event press
function moveBird() {
  window.addEventListener("keypress", (button) => {
    count++;
    if (count == 1) {
      if (button.key == " ") {
        audioEffect.wingSound.currentTime = 0;
        audioEffect.wingSound.play();
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

export { y_bird };
