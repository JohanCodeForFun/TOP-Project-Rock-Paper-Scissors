console.log("hello world!");

function game() {

    function computerPlay() {
        let computerHand = ['rock', 'paper', 'scissor'];
        const randomIndex = [Math.floor(Math.random() * computerHand.length)];
        const computerChoice = computerHand[randomIndex];
        console.log('Computer choose, ' + computerChoice);
        return computerChoice
    }





    
    computerPlay();
}

game();