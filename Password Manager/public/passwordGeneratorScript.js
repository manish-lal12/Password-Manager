const passwordBoxDOM = document.getElementById('password-generator-box');
const generateButton = document.getElementById('btn-generate');

generateButton.addEventListener('click', async (e) => {
    e.preventDefault();
   const {data: {password}} = await axios.get('http://localhost:5000/api/v1/password/generator');

   passwordBoxDOM.value = password;
})