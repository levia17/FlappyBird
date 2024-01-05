// Unit for all
const unit = 1;

// Declare
const floor1 = document.querySelector('.floor1');
const floor2 = document.querySelector('.floor2');

// Access to position left's value
const get_floor1 = window.getComputedStyle(floor1);
const get_floor2 = window.getComputedStyle(floor2);

// Position
// Left
const left_floor1 = get_floor1.getPropertyValue('left');
const left_floor2 = get_floor2.getPropertyValue('left');


let move_x_floor1 = parseFloat(left_floor1);
let move_x_floor2 = parseFloat(left_floor2);


// ********************************************************** //
export function drawWall(){

    // Move back from right to left
    move_x_floor1 -= unit;
    move_x_floor2 -= unit;

    floor1.style.left = `${move_x_floor1}px`;
    floor2.style.left = `${move_x_floor2}px`;

    if(move_x_floor1 == -1920){
        move_x_floor1 = 0;
    }
    if(move_x_floor2 == -1920){
        move_x_floor2 = 1920;
    }

    requestAnimationFrame(drawWall);
}
