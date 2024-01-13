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

async function soundBackground() {
  try {
    // Wait for the audio to load
    await audioEffects.backgroundAudio.load();

    // Add an event listener to check when the audio is loaded
    audioEffects.backgroundAudio.addEventListener('canplaythrough', () => {
      // Play the audio after it's loaded
      audioEffects.backgroundAudio.click();;
    });

    // Handle errors during loading or playing
    audioEffects.backgroundAudio.addEventListener('error', (error) => {
      console.error('Error loading or playing background audio:', error);
    });
  } catch (error) {
    console.error('Error in soundBackground:', error);
  }
}

soundBackground();

