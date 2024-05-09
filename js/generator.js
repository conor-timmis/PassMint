const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generatePassword() {
    const length = document.getElementById('length').value;
    let password = '';
    for (let i = 0; i < length; i++) {
        password += getRandomCharacter();
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
    }, 3000);
}

document.getElementById('generateBtn').addEventListener('click', generatePassword);
document.getElementById('copyBtn').addEventListener('click', copyPasswordToClipboard);
