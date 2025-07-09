const addNameDOM = document.getElementById('add-record-name');
const addPasswordDOM = document.getElementById('add-record-password');
const saveButton = document.getElementById('btn-save');
const alertMessageDOM = document.getElementById('alert-Message');

saveButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const name = addNameDOM.value;
  const password = addPasswordDOM.value;
  try {
    console.log('here');

    const {
      data: { user },
    } = await axios.get('http://localhost:5000/api/v1/users/showMe');

    const userId = user;
    console.log(userId);

    const response = await axios.post(
      'http://localhost:5000/api/v1/passwordManager/',
      { name, password, userId }
    );
    console.log(response);
    alertMessageDOM.innerHTML =
      '<p class="added-message">Password Added !!</p><br><p class="redirecting-message">Redirecting to homepage...</p>';
    setTimeout(function () {
      alertMessageDOM.innerHTML = '';
      window.location.href = 'homePage.html';
    }, 1500);
  } catch (error) {
    alertMessageDOM.innerHTML =
      '<p class="error-message">Fill the details!!</p>';
    setTimeout(function () {
      alertMessageDOM.innerHTML = '';
    }, 2000);
  }
});
