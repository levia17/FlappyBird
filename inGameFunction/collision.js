import { y_bird, bird } from "./birdIG.js";
import { pipes_list } from "./pipesIG.js";
import { setState } from "../database/gameState.js";
import gameAudio from "./audio.js";

export function collision() {
  checkCollision();
}

// Audio
const audioEffect = gameAudio();

function checkCollision() {
  for (let i in pipes_list) {
    // Bird's rect
    const birdRect = bird.getBoundingClientRect();
    // Pipe's rect
    const pipeRect = pipes_list[i].getBoundingClientRect();

    // Collision between bird and pipes
    if (
      pipeRect.left - 60 < birdRect.left &&
      pipeRect.right + 3835 > birdRect.right &&
      pipeRect.top <= birdRect.bottom - 1775 &&
      pipeRect.bottom >= birdRect.top
    ) {
      // console.log("Collision!");
      audioEffect.hitSound.play();
      setState("over");
      document.querySelector('.gameOver').setAttribute('class', 'gameOver show');
    }

    // Collision with floor
    if (y_bird >= 1209) {
      audioEffect.dieSound.play();
      // console.log("Collision!");
      setState("over");
      document.querySelector('.gameOver').setAttribute('class', 'gameOver show');
    }
  }
}
