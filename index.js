console.log('Hello world!');

function computerPlay() {
    let computerHand = ['Rock', 'Paper', 'Scicssor']
    const randomIndex = Math.floor(Math.random() * computerHand.length);
    const computerChoice = computerHand[randomIndex];
    console.log(computerChoice);
    return computerChoice
}

computerPlay();