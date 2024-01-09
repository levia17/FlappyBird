// Declare 
const bird = document.querySelector('.bird');

// Access to bird's attribute value
const get_bird = window.getComputedStyle(bird);

// Position
// Top
const top_bird = get_bird.getPropertyValue('top');

let y_bird = parseFloat(top_bird);
// Unit
const gravity = 3;



export function animation(){
    bird.style.top = `${y_bird}px`;
    actBird();
    requestAnimationFrame(animation);
}

let count = 0;
function actBird(){
window.addEventListener('keypress',(button)=>{
    count++;
    if(count == 1){
        if(button.key == "r"){
            console.log('bay');
            // y_bird -= gravity;
            // bird.style.top = `${y_bird + gravity}px`;
    } 
    }
    count = 0;
})  


}

