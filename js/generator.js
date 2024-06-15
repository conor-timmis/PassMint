/* Constants for different character sets. */
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const SPECIAL_CHARACTERS = '!@#$%^&*()';

/* Event Listeners for the Generate & Copy buttons to call functions on click */
document.getElementById('generateBtn').addEventListener('click', generatePassword);
document.getElementById('copyBtn').addEventListener('click', copyPasswordToClipboard);

/* Generates a password based on the user's preferences, also checks
 * which character sets the user has selected and 
 * concatenates them into a string. */
function generatePassword() {
    let characters = '';
    if (document.getElementById('uppercase').checked) {
        characters += UPPERCASE;
    }
    if (document.getElementById('lowercase').checked) {
        characters += LOWERCASE;
    }
    if (document.getElementById('numbers').checked) {
        characters += NUMBERS;
    }
    if (document.getElementById('special').checked) {
        characters += SPECIAL_CHARACTERS;
    }

    const length = document.getElementById('length').value;
    let password = '';
    for (let i = 0; i < length; i++) {
        password += generateCrypto(characters);
    }
    document.getElementById('password').value = password;
}

/* Generates a random character from a given string. */
function generateCrypto(characters) {
    const buffer = new Uint32Array(1);
    window.crypto.getRandomValues(buffer);
    const randomIndex = buffer[0] % characters.length;
    return characters.charAt(randomIndex);
}

/* Copies the value of the element with id 'password' to the clipboard. */
function copyPasswordToClipboard() {
    const passwordText = document.getElementById('password');
    navigator.clipboard.writeText(passwordText.value)
        .then(displayCopySuccess)
        .catch(err => {
            console.error('Could not copy text: ', err);
        });
}

/* Displays a tick symbol for a short period of time once copy is clicked. */
function displayCopySuccess() {
    const tick = document.getElementById('tick');
    tick.style.display = 'inline';
    setTimeout(() => {
        tick.style.display = 'none';
    }, 2250);
}
