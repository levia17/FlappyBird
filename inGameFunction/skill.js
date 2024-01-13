import { setState } from "../database/gameState.js";
import { setGame } from "../pageFunction/inGame.js";

let cooldown = 0;
let intervalCD = null;


export function skill(){
    checkCooldown();
}


function checkCooldown(){
    if(cooldown < 3){
        intervalCD = setInterval(()=>{
            if (cooldown >= 3) {
                clearInterval(intervalCD);
                skil1();
                console.log('CD done!')
            }
            console.log('CD');
            cooldown++;
        },1000)
    } 
}



function skil1(){
    console.log('Acitve Skill1'); 
    window.addEventListener('keydown', (button)=>{
        if(button.key == 'e' && localStorage.getItem('gameState') != 'inShield'){
            checkCooldown();
            setState('inShield');
            console.log('Skilling')
            setTimeout(()=>{
                cooldown = 0;
                setState('playing');
                setGame();
            }, 2000) 
        }
    })
    return cooldown;
}