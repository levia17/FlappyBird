// Declare 
const bird = document.querySelector('.bird');

// Access to bird's attribute value
const get_bird = window.getComputedStyle(bird);

// Position
// Top
const top_bird = get_bird.getPropertyValue('top');

let y_bird = parseFloat(top_bird);
// Unit
const gravity = 5;

let state_bird = 'down';

setInterval(()=>{
    if(state_bird == 'up'){
        state_bird = 'down';
        console.log('down');
    } else if (state_bird == 'down') {
        state_bird = 'up';
        console.log('up');
    }
}, 500)

export function actBird(){

    if(state_bird == 'up'){
        y_bird -= gravity;
        bird.style.top = `${y_bird}px`;
    } else if (state_bird == 'down'){
        y_bird += gravity;
        bird.style.top = `${y_bird}px`;
    }
    
    // console.log('Active!');
    
    requestAnimationFrame(actBird);
}