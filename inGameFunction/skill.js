import { setState } from "../database/gameState.js";

let cooldown = 0;
let intervalCD = null;


export function skill(){
    checkCooldown();
}


function checkCooldown(){
    if(cooldown < 3){
        intervalCD = setInterval(()=>{
            if (cooldown == 3) {
                clearInterval(intervalCD);
                skil1();
            }
            cooldown++;
        },1000)
    } 
}



function skil1(){
    window.addEventListener('keydown', (button)=>{
        if(button.key == 'e'){
            cooldown = 0;
            checkCooldown();
            setState('inShield');
            setTimeout(()=>{
                console.log('Skill done!')
                setState('playing');
            }, 2000)
            console.log('skill!')
        }
    })
    return cooldown;
}