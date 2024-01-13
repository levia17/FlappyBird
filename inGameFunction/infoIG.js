import { bird } from "./birdIG.js";
import { pipes_list } from "./pipesIG.js";



// Score
const score = document.querySelector('.score');
const score_ov = document.querySelector('.gameOver .score');
let score_inner = 0;
const highest_score = document.querySelector('.highest_score');

// Stage
const stage = document.querySelector('.stage')
let stage_inner = 0;

// Saving highest score during playing
const STORAGE_key = 'highest_score';
// let highest_score = 0;



export function disInfo(){
    eatingPoint();
    compareScore();
    updateStage();
    score.innerHTML = score_inner;
    score_ov.innerHTML = score_inner;
    stage.innerHTML = parseInt(stage_inner);
}


function eatingPoint(){
    for (let i in pipes_list) {
        // Bird's rect
        const birdRect = bird.getBoundingClientRect();
        // Pipe's rect
        const pipeRect = pipes_list[i].getBoundingClientRect();
        
        if(pipeRect.left <= birdRect.left + 10 && pipeRect.left >= birdRect.left + 5){
            score_inner += 0.5;
            console.log('eatingPoint!');
        }
    }
    return score_inner;
}

function compareScore(){
    if(localStorage.getItem(STORAGE_key) == 0){
        localStorage.setItem(STORAGE_key, score_inner);
    } else if(localStorage.getItem(STORAGE_key) < score_inner){
        localStorage.setItem(STORAGE_key, score_inner);
    }
    highest_score.innerHTML = localStorage.getItem('highest_score');
}

function updateStage(){
    if (score_inner % 10 == 0 && score_inner != 0){
        stage_inner += 0.015;
    }
}

