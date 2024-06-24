const loginFormDOM = document.getElementsByClassName('login-form-container');
const inputEmailDOM = document.getElementById('input-email');
const inputPasswordDOM = document.getElementById('input-password');
const loginButton = document.getElementById('btn-login');
const registerDOM = document.getElementById('link-signUp');
const alertMessageDOM = document.getElementById('alert-Message');

loginButton.addEventListener('click', async (e) => {

    e.preventDefault()
    
    const email = inputEmailDOM.value;
    const password = inputPasswordDOM.value;

    try { 
        const response = await axios.post('http://localhost:5000/api/v1/auth/login', { email, password })
        
        alertMessageDOM.innerHTML = '<p class="login-success-msg">Login Successful!!</p>'
        setTimeout(function() {
            alertMessageDOM.innerText = ''; // Clear the text
            alertMessageDOM.style.visibility = 'hidden'; // Hide the element
            window.location.href = 'homePage.html';
            inputEmailDOM.value='';
            inputPasswordDOM.value='';
        }, 1150);
    } catch (error) {
        console.log(error);
        alertMessageDOM.innerHTML = '<p class="invalid-credentials-msg">Invalid Credentials!!</p>'
        setTimeout(function () {
            alertMessageDOM.innerHTML ='';
        }, 2000);
    }
})