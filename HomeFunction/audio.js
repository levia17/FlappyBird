export default function gameAudio() {
    const backgroundAudio = document.createElement("audio");
    backgroundAudio.id = "background-audio";
    backgroundAudio.src = "../sound/audioBackgroundStart.mp3";
    backgroundAudio.loop = true;
    // backgroundAudio.autoplay = true;
    document.body.appendChild(backgroundAudio);
    const backgroundAudioBtn = document.createElement("button");
    backgroundAudioBtn.id = "btnSoundLoop";
    backgroundAudioBtn.style.display = "none";
    document.body.appendChild(backgroundAudioBtn);
    const onSoundLoop = document.querySelector("#btnSoundLoop");
  
    if (onSoundLoop) {
      onSoundLoop.addEventListener("click", function () {
        backgroundAudio.play();
      });
    }
  
    // Trả về đối tượng chứa âm thanh
    return {
      backgroundAudio,
    };
  }
  