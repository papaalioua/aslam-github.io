document.addEventListener('DOMContentLoaded', function() {
    const guessForm = document.getElementById('guessForm');
    const guessField = document.getElementById('guessField');
    const guessSubmit = document.getElementById('guessSubmit');
    const message = document.getElementById('message');


    const randomNumber = Math.floor(Math.random() * 100) + 1;

    let attempts = 0;


    function checkGuess(event) {
        event.preventDefault(); 

        let userGuess = parseInt(guessField.value);

        if (userGuess === randomNumber) {
            message.textContent = `Congratulations! You guessed the correct number in ${attempts} attempts!`;
            message.style.backgroundColor = 'green';
            gameOver();
        } else if (userGuess < randomNumber) {
            message.textContent = 'Too low. Try again.';
            message.style.backgroundColor = 'yellow';
        } else {
            message.textContent = 'Too high. Try again.';
            message.style.backgroundColor = 'red';
        }

        attempts++;
    }

   
    function gameOver() {
        guessField.disabled = true;
        guessSubmit.disabled = true;
    }

    guessForm.addEventListener('submit', checkGuess);
});
document.addEventListener('DOMContentLoaded', function() {
    const guessForm = document.getElementById('guessForm');
    const guessField = document.getElementById('guessField');
    const guessSubmit = document.getElementById('guessSubmit');
    const message = document.getElementById('message');


    const randomNumber = Math.floor(Math.random() * 100) + 1;

    let attempts = 0;


    function checkGuess(event) {
        event.preventDefault(); 

        let userGuess = parseInt(guessField.value);

        if (userGuess === randomNumber) {
            message.textContent = `Congratulations! You guessed the correct number in ${attempts} attempts!`;
            message.style.backgroundColor = 'green';
            gameOver();
        } else if (userGuess < randomNumber) {
            message.textContent = 'Too low. Try again.';
            message.style.backgroundColor = 'yellow';
        } else {
            message.textContent = 'Too high. Try again.';
            message.style.backgroundColor = 'red';
        }

        attempts++;
    }


    function gameOver() {
        guessField.disabled = true;
        guessSubmit.disabled = true;
    }

    guessForm.addEventListener('submit', checkGuess);
});
