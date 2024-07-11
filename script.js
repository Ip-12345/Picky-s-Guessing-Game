let input = document.getElementById('input');
let btn = document.getElementById('btn');
let wrong = document.querySelector('.wrong');
let guesses = document.getElementById('guesses');

let answer = Math.floor(Math.random()*100)+1;
let numguesses = 0;

btn.addEventListener('click', ()=>{
    guessnumber();
})

function guessnumber(){
    if(input.value < 1 || input.value >100 || isNaN(input.value))
    wrong.innerHTML = "Enter between 1 to 100";
    else{
        numguesses++;
        guesses.innerHTML = "No.of Guesses: " + numguesses;

        if(input.value > answer){
            wrong.innerHTML = "You guessed too High!";
            input.value = "";
        }
        else if(input.value < answer){
            wrong.innerHTML = "You guessed too Low!";
            input.value = "";
        }
        else{
            wrong.innerHTML = "Congratulations! You guessed the correct answer";
            btn.disabled = true;
            setTimeout(()=>{
                resetGame();
            }, 5000)
        }
    }
}

function resetGame(){
    numguesses = 0;
    answer = Math.floor(Math.random()*100)+1;
    input.value = "";
    btn.disabled = false;
    guesses.innerHTML = "No.of Guess: 0";
}