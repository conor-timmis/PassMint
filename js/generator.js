function generate() {
    var length = document.getElementById('length').value;
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    document.getElementById('password').value = result;
}

function copyToClipboard() {
    var passwordText = document.getElementById('password');
    navigator.clipboard.writeText(passwordText.value)
        .then(() => {
            var tick = document.getElementById('tick');
            tick.style.display = 'inline';
            setTimeout(() => {
                tick.style.display = 'none';
            }, 3000);
        })
        .catch(err => {
            console.error('Could not copy text: ', err);
        });
}
