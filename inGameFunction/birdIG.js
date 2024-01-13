  import gameAudio from "./audio.js";
  
  // Declare
  export const bird = document.querySelector(".bird");
  const bird_rotate = document.querySelector('.bird img')

  // Y Bird
  let y_bird = 800;
  // Unit
  const gravity = 0.2;
  let movement = 0;

  // Fix times keyup, keydown
  let count = 0;


  // Audio
  const audioEffect = gameAudio();


  // Animation
  export function animation() {
    movement += gravity;
    y_bird += movement;
    actBird();
    bird_rotate.style.rotate = `${(movement/20)}rad`;
    bird.style.top = `${y_bird}px`;
    return y_bird;
  }

  // Event press
  function actBird() {
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
