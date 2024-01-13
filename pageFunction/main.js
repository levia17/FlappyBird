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



const audioEffect = gameAudio();

// Function to handle user interaction and play background audio
async function playBackgroundAudio() {
  try {
    // Load the audio
    await audioEffect.backgroundAudio.load();

    // Wait for a user interaction event (e.g., click)
    await new Promise((resolve) => {
      document.addEventListener('click', resolve, { once: true });
    });

    // Play the audio after user interaction
    await audioEffect.backgroundAudio.play();
  } catch (error) {
    console.error('Error playing background audio:', error);
  }
}

// Call the function to set up user interaction and play audio
playBackgroundAudio();