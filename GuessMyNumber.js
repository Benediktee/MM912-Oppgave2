        const MIN_NUMBER = 1;
        const MAX_NUMBER = 100;
        let tries = 9;

        const randomNumber = guessRandomNumber(MIN_NUMBER, MAX_NUMBER);
        const output = document.getElementById("outputtext");

        function guessRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }

        function guessYourNumber() {
            const number = parseInt(document.getElementById('guess').value);
            const li = document.createElement("li");

            if (number === randomNumber) {
                li.innerHTML = 'Riktig!';

            } else if (tries === 0) {
                li.innerHTML = 'Du har ikke flere forsøk igjen..';

            } else if (number < randomNumber) {
                li.innerHTML = `For lavt! Du gjettet ${number}. Du har ${tries} forsøk igjen.`;
                tries--;

            } else {
                li.innerHTML = `For høyt! Du gjettet ${number}. Du har ${tries} forsøk igjen.`;
                tries--;
            }

            output.appendChild(li);
        }

        function spilleIgjen() {
            location.reload()
        }
