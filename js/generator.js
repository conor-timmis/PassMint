// Constants
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const SPECIAL_CHARACTERS = '!@#$%^&*()';

// Event Listeners
document.getElementById('generateBtn').addEventListener('click', generatePassword);
document.getElementById('copyBtn').addEventListener('click', copyPasswordToClipboard);

// Functions
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

function generateCrypto(characters) {
    const buffer = new Uint32Array(1);
    window.crypto.getRandomValues(buffer);
    const randomIndex = buffer[0] % characters.length;
    return characters.charAt(randomIndex);
}

function copyPasswordToClipboard() {
    const passwordText = document.getElementById('password');
    navigator.clipboard.writeText(passwordText.value)
        .then(displayCopySuccess)
        .catch(err => {
            console.error('Could not copy text: ', err);
        });
}

function displayCopySuccess() {
    const tick = document.getElementById('tick');
    tick.style.display = 'inline';
    setTimeout(() => {
        tick.style.display = 'none';
    }, 2250);
}
