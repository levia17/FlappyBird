// List
export let pipes_list = [];

const height = ["450", "500", "550", "600", "650", "700", "750", "800"];

/**************************************************************/

// Pipes
export function pipes() {
  movePipes();
}

// Create
export function createPipes() {
  const randomIH = Math.floor(Math.random() * 8);

  const pipe1 = document.createElement("div");
  pipe1.className = 'pipe1';
  pipe1.style.background = "url('../component/pipe-green.png')";
  pipe1.style.scale = "2";
  pipe1.style.height = "253px";
  pipe1.style.width = "41px";
  pipe1.style.position = "absolute";
  pipe1.style.top = `${height[randomIH]}px`;
  pipe1.style.left = "1900px";
  pipe1.style.zIndex = "1";
  document.querySelector("body .background").appendChild(pipe1);

  const pipe2 = document.createElement("div");
  pipe1.className = 'pipe2';
  pipe2.style.background = "url('../component/pipe-green.png')";
  pipe2.style.scale = "-2";
  pipe2.style.height = "253px";
  pipe2.style.width = "41px";
  pipe2.style.position = "absolute";
  // pipe2.style.top = `${450}px`
  pipe2.style.top = `${height[randomIH] - 750}px`;
  pipe2.style.left = "1900px";
  pipe2.style.zIndex = "1";
  document.querySelector("body .background").appendChild(pipe2);

  pipes_list.push(pipe1, pipe2);
  // console.log(pipes_list);
}

// Unit movement
const minus_x_pipe = 7;

function movePipes() {
  for (let i in pipes_list) {
    pipes_list[i].style.left = `${
      parseInt(pipes_list[i].style.left) - minus_x_pipe
    }px`;
    if(pipes_list[i].style.left <= 1200){
      // console.log('remove');
    }
  }
}
