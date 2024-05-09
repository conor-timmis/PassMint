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
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById('password').value = password;
}


function getRandomCharacter() {
    return CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length));
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
