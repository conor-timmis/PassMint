const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generatePassword() {
    const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
    const NUMBERS = '0123456789';
    const SPECIAL_CHARACTERS = '!@#$%^&*()';

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

document.getElementById('generateBtn').addEventListener('click', generatePassword);
document.getElementById('copyBtn').addEventListener('click', copyPasswordToClipboard);

function stopDragging() {
    const logo = document.getElementById('logo');
    if (logo) {
        logo.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        });
        logo.style.pointerEvents = 'none';
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    stopDragging();
});
