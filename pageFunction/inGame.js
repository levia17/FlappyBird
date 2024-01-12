// Floor
import { drawWall } from "../inGameFunction/drawFloorIG.js";
// Bird
import { animation } from "../inGameFunction/birdIG.js";
// Pipes
import { pipes, createPipes } from "../inGameFunction/pipesIG.js";
// Collision
import { collision } from "../inGameFunction/collision.js";
// Game state
import { setState, State } from "../database/gameState.js";

// Variable game's statement
export let isPlaying = State();

let interval = null;

// Count playing
let count = 0;

// Press to start
window.addEventListener("keydown", (button) => {
  if (button.key == " ") {
    count++;
    if (count == 1) {
      setState("playing");
      isPlaying = State();
      setGame();
    }
  }
});

setInterval(() => {
  console.log(isPlaying);
}, 1000);


// Function to active game
function inGame() {
  // Collision
  collision();
  // Draw floor
  drawWall();
  // Bird
  animation();
  // Pipes
  pipes();

  isPlaying = State();
  const rq = requestAnimationFrame(inGame);
  if (isPlaying == "over") {
    cancelAnimationFrame(rq);
    setGame();
  }
}

// Statement
function setGame() {
  if (isPlaying == "playing") {
    inGame();
    
    interval = setInterval(() => {
      createPipes();
    }, 1300);
  }
  else{
    clearInterval(interval);
  }
}
