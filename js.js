document.addEventListener('DOMContentLoaded', function() {
    const guessForm = document.getElementById('guessForm');
    const guessField = document.getElementById('guessField');
    const guessSubmit = document.getElementById('guessSubmit');
    const message = document.getElementById('message');

    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    let attempts = 0;

    // Function to check the user's guess
    function checkGuess(event) {
        event.preventDefault(); // Prevent form submission

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

    // Function to end the game
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

    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    let attempts = 0;

    // Function to check the user's guess
    function checkGuess(event) {
        event.preventDefault(); // Prevent form submission

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

    // Function to end the game
    function gameOver() {
        guessField.disabled = true;
        guessSubmit.disabled = true;
    }

    guessForm.addEventListener('submit', checkGuess);
});
