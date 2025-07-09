const registerNameDOM = document.getElementById('register-input-name');
const registerEmailDOM = document.getElementById('register-input-email');
const registerPasswordDOM = document.getElementById('register-input-password');
const submitButton = document.getElementById('btn-register');
const alertMessageDOM = document.getElementById('alert-Message');

submitButton.addEventListener('click', async (e) => {
    e.preventDefault();

    const name = registerNameDOM.value;
    const email = registerEmailDOM.value;
    const password = registerPasswordDOM.value;

    try {
    const data = await axios.post('http://localhost:5000/api/v1/auth/register', { name, email, password });
    alertMessageDOM.innerHTML = '<p class="registered-success-msg">Register Success!!</p><p class="redirecting-msg">Redirecting to login page...</p>';
    setTimeout(function () {
        alertMessageDOM.innerHTML = '';
        registerNameDOM.innerHTML = '';
        registerPasswordDOM.innerHTML = '';
        window.location.href = 'login.html'
    }, 1500);
} catch (error) {
    alertMessageDOM.innerHTML = '<p class="email-registered-already-msg">Invalid details!!</p>';
    setTimeout(function() {
        alertMessageDOM.innerHTML = '';
    }, 2000);
}
})
