const recordContainerDOM = document.getElementsByClassName(
  'show-record-container'
);
const recordIdDOM = document.getElementById('record-id');
const nameDOM = document.getElementById('record-name');
const passwordDOM = document.getElementById('record-password');
const updateButton = document.getElementById('btn-update');
const deleteButton = document.getElementById('btn-delete');
const alertMessageDOM = document.getElementById('alert-Message');
const passwordStrengthMessageDOM = document.getElementById(
  'password-strength-message'
);

const showRecord = async () => {
  recordIdDOM.style.visibility = 'hidden';
  const params = new URLSearchParams(window.location.search);

  const name = params.get('domainName');
  try {
    const {
      data: { response },
    } = await axios.post(
      'http://localhost:5000/api/v1/passwordManager/showPassword',
      { name }
    );
    nameDOM.value = response.name;
    passwordDOM.value = response.password;
    recordIdDOM.value = response.id;
  } catch (error) {
    console.log(error);
  }
};

showRecord();

// function getPasswordStrength(score) {
//   switch (score) {
//     case 0:
//       // formContainerDOM.style.backgroundColor =  'red';
//       return 'Very Weak';

//     case 1:
//       // formContainerDOM.style.backgroundColor = 'orange';
//       return 'Weak';

//     case 2:
//       // formContainerDOM.style.backgroundColor = 'rgb(183, 186, 9)';
//       return 'Fair';

//     case 3:
//       // formContainerDOM.style.backgroundColor = 'blue';
//       return 'Strong';

//     case 4:
//       // formContainerDOM.style.backgroundColor = 'green';
//       return 'Very Strong';
//   }
// }

// passwordDOM.addEventListener('click', async (e) => {
//   e.preventDefault();

//   const password = passwordDOM.value;
//   const {
//     data: { strength },
//   } = await axios.post(
//     'http://localhost:5000/api/v1/password/strengthTest',
//     { password }
//   );
//   console.log(strength);
//   if (!password) {
//     passwordStrengthMessageDOM.innerHTML = '';
//   } else {
//     const strengthPassword = getPasswordStrength(strength.score);
//     passwordStrengthMessageDOM.textContent = `${strengthPassword}`;
//   }
// });

updateButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const name = nameDOM.value;
  const newPassword = passwordDOM.value;
  const recordId = recordIdDOM.value;

  await axios.patch(
    `http://localhost:5000/api/v1/passwordManager/${recordId}`,
    { name, newPassword }
  );
  alertMessageDOM.innerHTML =
    '<p id="update-success-message">Updated Successfully!!</p><br><p id="redirecting-message">Redirecting to home page...</p>';
  setTimeout(function () {
    alertMessageDOM.innerText = '';
    alertMessageDOM.style.visibility = 'hidden';
    window.location.href = 'homePage.html';
  }, 2000);
});

deleteButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const recordId = recordIdDOM.value;

  await axios.delete(
    `http://localhost:5000/api/v1/passwordManager/${recordId}`
  );
  alertMessageDOM.innerHTML =
    '<p id="deleted-success-message">Deleted!!</p><br><p id="redirecting-message">Redirecting to home-page...</p>';
  setTimeout(function () {
    alertMessageDOM.innerText = '';
    alertMessageDOM.style.visibility = 'hidden';
    window.location.href = 'homePage.html';
  }, 1500);
});
