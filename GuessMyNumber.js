const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const randomNumber = guessRandomNumber(MIN_NUMBER, MAX_NUMBER);

function guessRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function guessYourNumber() {
    const number = parseInt(document.getElementById('guess').value);

    if (number === randomNumber) {
        document.getElementById('message').textContent = 'Riktig!';
        document.getElementById('ifYouWon').textContent = 'Takk for at du spilte!:)';

    } else if (number < randomNumber) {
        document.getElementById('message').textContent = `For lavt! Du gjettet ${number}.`;
    } else {
        document.getElementById('message').textContent = `For høyt! Du gjettet ${number}.`;
    }
}
