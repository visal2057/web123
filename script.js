function sendMessage() {
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;

    if (email && username) {
        alert('We will send you a message!');
    } else {
        alert('Please fill in both fields!');
    }
}