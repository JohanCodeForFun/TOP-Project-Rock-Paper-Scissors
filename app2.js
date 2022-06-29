console.log("hello world!");

function game() {
    let choices = ['rock', 'paper', 'scissor']

    function computerPlay() {
        // Coding with Rob from youtube,
        return choices[Math.floor(Math.random() * choices.length)];

        // My solution
        // const randomIndex = [Math.floor(Math.random() * choices.length)];
        // const computerSelection = choices[randomIndex];
        // console.log('Computer choose, ' + computerSelection);
        // return computerSelection
    }

    function playerSelection() {
        let playerPrompt = prompt('Please enter your choice.');

        switch(playerPrompt) {
            case 'rock':
                text = 'You choose, rock!';
                console.log('You choose, rock!');
                return playerPrompt;
                break;
            case 'paper':
                text = 'You choose, paper!';
                console.log('You choose, paper!');
                return playerPrompt;
                break;
            case 'scissor':
                text = 'You choose, scissor!';
                console.log('You choose, scissor!');
                return playerPrompt;
            default:
                text = 'What was that?';
                console.log('What was that?');
                return playerPrompt;
        }
    }

    function compareHands(playerSelection, computerSelection) {
        console.log(playerSelection, computerSelection);
    }





    computerPlay();
    playerSelection();
    compareHands();
}

game();