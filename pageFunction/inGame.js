// Floor
import { drawWall } from "../inGameFunction/drawFloorIG.js";
// Bird
import { animation  } from "../inGameFunction/birdIG.js";
// Pipes
import { pipes, createPipes } from "../inGameFunction/pipesIG.js";
// Collision
import { collision } from "../inGameFunction/collision.js";



// Variable game's statement
export let isPlaying = 'start';

// Count playing
let count = 0;


// Press to start
window.addEventListener('keydown', (button)=>{
  if(button.key == ' '){
    isPlaying = "playing";
    count++;
    if(count == 1){
      setGame();
    }
  }
})
setGame();

// Statement
function setGame(){
  if(isPlaying == 'playing'){
    inGame();
  
    setInterval(()=>{
      createPipes();
    },1500)
  } 

}


// Function to active game
function inGame(){
  // Collision
  collision();
  // Draw floor
  drawWall();
  // Bird
  animation();
  // Pipes
  pipes();

  requestAnimationFrame(inGame)
}

setInterval(()=>{
  console.log(isPlaying);
},1000)
