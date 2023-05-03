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
//get user choice
function getUserChoice(){
    return prompt('Please enter: rock, paper, or scissors').toLowerCase();
}

// compare the two and decide result
function playRound(com, user){
    switch(com){
        case 'rock':
            if(user === 'rock'){
                return 'Tie';
            }
            if(user === 'paper'){
                return 'Win';
            }
            if(user === 'scissors'){
                return 'Loss';
            }
        case 'paper':
            if(user === 'rock'){
                return 'Loss';
            }
            if(user === 'paper'){
                return 'Tie';
            }
            if(user === 'scissors'){
                return 'Win';
            }
        case 'scissors':
            if(user === 'rock'){
                return 'Win';
            }
            if(user === 'paper'){
                return 'Loss';
            }
            if(user === 'scissors'){
                return 'Tie';
            }
    }
}
function game(){
    let comWinCounter = 0;
    let userWinCounter = 0;

    for(i = 0; i <5;i++){
        switch(playRound(getComChoice(), getUserChoice())){
            case 'Win':
                userWinCounter++;
                console.log("User point");
                break;
            case 'Loss':
                comWinCounter++;
                console.log("Com point");
                break;
            case 'Tie':
                console.log("Tie");
                break;
        }
    }
    console.log('User:' + userWinCounter);
    console.log('Com:' + comWinCounter);
    
    if(userWinCounter > comWinCounter){
        console.log('You win!');
    }
    if(userWinCounter < comWinCounter){
        console.log('You lose!');
    }
    if(userWinCounter == comWinCounter){
        console.log('It\'s a tie!');
    }
    
}
game();