import { y_bird, bird } from "./birdIG.js";
import { pipes_list } from "./pipesIG.js";
import { setState } from "../database/gameState.js";

export function collision() {
  checkCollision();
}

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
      console.log("Collision!");
      setState("over");
    }

    // Collision with floor
    if (y_bird >= 1209) {
      console.log("Collision!");
      setState("over");
    }
  }
}
