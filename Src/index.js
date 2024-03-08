
import { comChoice } from "./com_choice";

import { startRound } from "./start_round";
import { winner } from "./winner";

const btnRock = document.querySelector('#btn-rock');
btnRock.addEventListener('click', ()=>{
    
   
    startRound('rock');
    winner()
    
   
});

const btnPaper = document.querySelector('#btn-paper');
btnPaper.addEventListener('click', ()=>{
    
  
     startRound("paper");
     winner()
});

const btnScissors = document.querySelector('#btn-scissors');
btnScissors.addEventListener('click', ()=>{
   
   
    startRound('scissors');
    winner()
});


