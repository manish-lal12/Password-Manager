const logoutDOM = document.getElementById('logout-btn');
// const passwordStrengthTesterDOM = document.getElementsByClassName(
//   'password-strength-tester'
// );
const strengthTestButton = document.getElementById(
  'btn-strength-test'
);
// const recordsDOM = document.getElementById(
//   'password-records-container'
// );
const recordTableBodyDOM = document.getElementById(
  'record-table-body'
);
const addRecordButton = document.getElementById('btn-add-record');

// const recordContainerDOM = document.getElementsByClassName(
//   'show-record-container'
// );
// const recordIdDOM = document.getElementById('record-id');
// const nameDOM = document.getElementById('record-name');
// const passwordDOM = document.getElementById('record-password');
// const updateButton = document.getElementById('btn-update');
// const deleteButton = document.getElementById('btn-delete');
// const alertMessageDOM = document.getElementById('alert-Message');

const showRecords = async () => {
  const {
    data: { records },
  } = await axios.get(
    'http://localhost:5000/api/v1/passwordManager/showAllPassword'
  );

  records.forEach((record) => {
    const row = document.createElement('tr');
    row.classList.add('single-row-data');

    for (let key in record) {
      if (key === 'name') {
        if (record.hasOwnProperty(key)) {
          const nameCell = document.createElement('td');
          nameCell.classList.add('name-cell');
          nameCell.textContent = record[key];
          row.appendChild(nameCell);

          const arrowCell = document.createElement('td');
          arrowCell.classList.add('arrow-cell');
          const arrowSpan = document.createElement('a');
          arrowSpan.classList.add('arrow-span');
          arrowSpan.innerHTML = '&#62';

          arrowCell.appendChild(arrowSpan);
          row.appendChild(arrowCell);
          recordTableBodyDOM.appendChild(row);
          row.addEventListener('click', () =>
            showRecord(nameCell.textContent)
          );
        }
      }
    }
  });
};

showRecords();

const showRecord = async (textContent) => {
  const name = textContent;

  function openPageWithParameters(name) {
    const params = new URLSearchParams({
      domainName: name,
    }).toString();

    window.location.href = `showRecord.html?${params}`;
  }
  openPageWithParameters(name);
};

strengthTestButton.addEventListener('click', async (e) => {
  e.preventDefault();
  window.location.href = 'strengthTest.html';
});

addRecordButton.addEventListener('click', async (e) => {
  e.preventDefault();
  window.location.href = 'addRecord.html';
});

logoutDOM.addEventListener('click', async (e) => {
  e.preventDefault();
  window.location.replace('http://localhost:5000/api/v1/auth/logout');
});
