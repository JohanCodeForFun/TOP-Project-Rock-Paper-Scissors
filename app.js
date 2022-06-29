console.log('Hello world!');

function game() {
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

        switch (playerPrompt) {
            case 'rock':
                text = 'You choose rock!';
                console.log('You choose rock!');
                return playerPrompt;
                break;
            case 'paper':
                text = 'You choose paper!';
                console.log('You choose paper!');
                return playerPrompt;
                break;
            case 'scissor':
                text = 'You choose scissor!';
                console.log('You choose scissor!');
                return playerPrompt;
            default:
                text = 'What was that?';
                console.log('What was that?');
                return playerPrompt;
        }

        // function computerSelection(computerChoice) {
        //     computerChoice = garbageCode;
        //     return garbageCode;
        //     console.log('test computer selection');

        // }


        const compareHands = (playerPrompt, computerChoice) => {
            if (playerPrompt === computerSelection) {
                console.log('Tie');
                return;
            }

            if (playerPrompt == 'rock') {
                if (computerSelection == 'scissor') {
                    console.log('Player win!')
                    return;
                } else {
                    console.log('Computer win!');
                    return;
                }
            }

            if (playerPrompt == 'paper') {
                if (computerSelection == 'scissor') {
                    console.log('Computer win!')
                    return;
                } else {
                    console.log('Player win!');
                    return;
                }
            }

            if (playerPrompt == 'scissor') {
                if (computerSelection == 'rock') {
                    console.log('Computer win!')
                    return;
                } else {
                    console.log('Player win!');
                    return;
                }
            }

        }
    }

    playerSelection();
    computerPlay();
    // computerSelection();
    compareHands(playerPrompt, computerChoice);
}

game();
