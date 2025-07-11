const formContainerDOM = document.getElementById(
  'strength-test-container'
);
const passwordInputDOM = document.getElementById('password-input');
const alertMessageDOM = document.getElementsByClassName(
  'strength-message'
);
const passwordStrengthMessageDOM = document.getElementById(
  'password-strength-message'
);
const estimatedCrackTimeDOM = document.getElementById(
  'estimated-time-message'
);

function getPasswordStrength(score) {
  switch (score) {
    case 0:
      //   formContainerDOM.style.backgroundColor = 'red';
      passwordStrengthMessageDOM.style.color = 'red';
      estimatedCrackTimeDOM.style.color = 'red';

      return 'Very Weak';

    case 1:
      //   formContainerDOM.style.backgroundColor = 'orange';
      passwordStrengthMessageDOM.style.color = 'orange';
      estimatedCrackTimeDOM.style.color = 'orange';

      return 'Weak';

    case 2:
      //   formContainerDOM.style.backgroundColor = 'rgb(183, 186, 9)';
      passwordStrengthMessageDOM.style.color = 'rgb(183, 186, 9)';
      estimatedCrackTimeDOM.style.color = 'rgb(183, 186, 9)';

      return 'Fair';

    case 3:
      passwordStrengthMessageDOM.style.color = 'blue';
      estimatedCrackTimeDOM.style.color = 'blue';

      return 'Strong';

    case 4:
      passwordStrengthMessageDOM.style.color = 'green';
      estimatedCrackTimeDOM.style.color = 'green';
      return 'Very Strong';
  }
}

passwordInputDOM.addEventListener('input', async (e) => {
  e.preventDefault();
  const password = passwordInputDOM.value;

  if (password === '') {
    passwordStrengthMessageDOM.innerHTML = '';
    estimatedCrackTimeDOM.innerHTML = '';
    formContainerDOM.style.backgroundColor = '';
  } else {
    console.log('input');
    const {
      data: { strength },
    } = await axios.post(
      'http://localhost:5000/api/v1/password/strengthTest',
      { password }
    );
    const score = strength.password_score;
    const timeToCrack = strength.Time_to_crack;
    const feedback = strength.feedback;
    const warning = strength.warning;

    const strengthPassword = getPasswordStrength(score);
    passwordStrengthMessageDOM.textContent = `${strengthPassword}`;
    estimatedCrackTimeDOM.textContent = `${timeToCrack}`;
  }
});
