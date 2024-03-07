

const btnRock = document.querySelector('#btn-rock');
btnRock.addEventListener('click', ()=>{
    playerChoice("rock")
});

const btnPaper = document.querySelector('#btn-paper');
btnPaper.addEventListener('click', ()=>{
    playerChoice("paper")
});

const btnScissors = document.querySelector('#btn-scissors');
btnScissors.addEventListener('click', ()=>{
    playerChoice("scissors")
})