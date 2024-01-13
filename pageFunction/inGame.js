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
// Info Ingame
import { disInfo } from "../inGameFunction/infoIG.js";

// Variable game's statement
export let isPlaying = State();

// Timing spawn of pipes
let interval = null;

// Variable count for playing
let count = 0;

// Button pause
const btnPause = document.querySelector(".btnPause");
// Button Restart
const btnRestart = document.querySelector('.btnRestart');

/*********************FEATURE********************************/

/*PRESS*/
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
btnRestart.addEventListener('click', ()=>{
  location.reload();
})

// Event unfocus screen
document.addEventListener("visibilitychange", handleVisibilityChange, {
  once: true,
});

// Event
function handleVisibilityChange() {
  if (document.hidden) {
    setState("paused");
    count = 0;
  }
}



// Press to pause
btnPause.addEventListener("click", () => {
  setState("pause");
  isPlaying = State();
  setGame();
  count = 0;
});

/*ANIMATION GAME*/
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

  /*Info Ingame*/
  disInfo();

  // Variable requestAnimationFrame
  const rq = requestAnimationFrame(inGame);

  // Check in loop game if isPlaying is over
  if (isPlaying != "playing") {
    // Clear loop game
    cancelAnimationFrame(rq);

    // Check game's state
    setGame();
  }
}

// Statement
function setGame() {
  if (isPlaying == "playing") {
    // Loop game
    inGame();

    // timing spawn pipes
    interval = setInterval(() => {
      createPipes();
    }, 1300);
  } else {
    // Clear timing spawn pipes
    clearInterval(interval);
  }
}

// Test (skipping)
setInterval(() => {
  console.log(isPlaying);
}, 1000);
