console.log('Hello world!');

function computerPlay() {
    let computerHand = ['Rock', 'Paper', 'Scicssor']
    const randomIndex = Math.floor(Math.random() * computerHand.length);
    const computerChoice = computerHand[randomIndex];
    console.log('computer choose, ' + computerChoice);
    return computerChoice
}

function playerSelection() {
    let playerHand = ['Rock', 'Paper', 'Scicssor']
    let playerPrompt = prompt("Please enter your hand.");

    switch(playerPrompt) {
        case 'rock':
            text = 'You choose rock!';
            console.log('You choose rock!');
            break;
        case 'paper':
            text = 'You choose paper!';
            console.log('You choose paper!');
            break;
        case 'scissor':
            text = 'You choose scissor!';
            console.log('You choose scissor!');
        default:
            text = 'What was that?';
            console.log('What was that?');
    }
}

function computerSelection() {

}

computerPlay();
playerSelection();
