let playerScoreDisplay = document.querySelector('#player-score');
let enemyScoreDisplay = document.querySelector('#enemy-score');
let userWinCounter = 0;
let comWinCounter = 0;
let textWindow = document.querySelector('.game-text-window');

//generate comchoice
function getComChoice(){
    let num = Math.floor(Math.random()*3);
    switch(num){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}
function getUserChoice(){

}
// compare the two and decide result
function playRound(com, user){
    
    let result = "";
    switch(com){
        case 'rock':
            if(user === 'rock'){
                result = "Tie!";
            }
            else if(user === 'paper'){
                userWinCounter++;
                result = "You win round!";
            }
            else if(user === 'scissors'){
                comWinCounter++;
                result = "Com wins round!";
            }
            break;
        case 'paper':
            if(user === 'rock'){
                comWinCounter++;
                result = "Com wins round!";
            }
            else if(user === 'paper'){
                result = "Tie!";
            }
            else if (user === 'scissors'){
                userWinCounter++;
                result = "You win round!";
            }
            break;
        case 'scissors':
            if(user === 'rock'){
                userWinCounter++;
                result = "You win round!";
            }
            else if(user === 'paper'){
                comWinCounter++;
                result = 'Com wins round!';
            }
            else if(user === 'scissors'){
                result = 'Tie!';
            }
            break;
    }

    textWindow.textContent = result;
    playerScoreDisplay.textContent = userWinCounter;
    enemyScoreDisplay.textContent = comWinCounter;
    checkWinner();

}
function gameSetup(){
    
    let buttons = document.querySelectorAll('.button-wrapper > button');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            playRound(getComChoice(), e.target.id)
        })
    })

    
}
function checkWinner(){
    let gameButtons = document.querySelectorAll('.button-wrapper > button');

    if (comWinCounter == 5){
        textWindow.textContent = "Com wins! You suck!";
        
        gameButtons.forEach(button => {
            button.disabled = true;
        })
    }
    else if (userWinCounter == 5){
        textWindow.textContent = "You win! Com sucks!";
        gameButtons.forEach(button => {
            button.disabled = true;
        })
    }
    
}

    
gameSetup();