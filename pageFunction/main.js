// Animation
import { drawWall } from "../HomeFunction/drawFloor.js";
import { actBird } from "../HomeFunction/bird.js";

// Event click
import { clickDN } from "../HomeFunction/donate.js";

// Audio
import gameAudio from "../HomeFunction/audio.js";

// Draw Wall
drawWall();

// Bird's action
actBird();

// Event click
clickDN();

// Audio
const audioEffects = gameAudio();

function soundBackground(){
  try{
    audioEffects.backgroundAudio.play();
  }
  catch(error){
    console.log(error);
  }
}
soundBackground();

