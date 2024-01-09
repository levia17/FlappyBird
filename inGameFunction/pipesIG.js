
let pipes_list = [];

const height = ['250', '300', '350', '400', '450'];
const randomH = height[Math.random()*5];

export function createPipes(){
    const pipe1 = document.createElement('div')
    pipe1.style.background = "url('../component/pipe-green.png')"
    pipe1.style.scale = '2';
    pipe1.style.height = '253px';
    pipe1.style.width = '41px';
    pipe1.style.position = 'absolute';
    pipe1.style.top = `${randomH}px`;
    pipe1.style.left = '50px';
    pipe1.style.zIndex = '1'
    document.querySelector('body .background').appendChild(pipe1);

    const pipe2 = document.createElement('div')
    pipe2.style.background = "url('../component/pipe-green.png')"
    pipe2.style.scale = '2';
    pipe2.style.height = '253px';
    pipe2.style.width = '41px';
    pipe2.style.position = 'absolute';
    // pipe2.style.top = `${450}px`
    pipe2.style.top = `${randomH - 200}px`;
    pipe2.style.left = '200px';
    pipe2.style.zIndex = '1'
    document.querySelector('body .background').appendChild(pipe2);
}