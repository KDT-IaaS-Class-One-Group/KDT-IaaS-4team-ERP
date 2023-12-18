import refreshData from "./refreshData.js";

refreshData();

// 추가 버튼 클릭 이벤트 리스너
document.getElementById('add').addEventListener('click', () => {
  const name = document.querySelector('input[name="name"]').value;
  const age = document.querySelector('input[name="age"]').value;

  if (!name || !age) {
    alert('이름과 나이를 입력하세요.');
    return;
  }

  fetch('http://localhost:3000/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, age }),
  })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
      refreshData();
    })
    .catch(error => console.error('Error:', error));
});

// 삭제 버튼 클릭 이벤트 리스너
document.getElementById('delete').addEventListener('click', () => {
  const id = document.querySelector('input[name="id"]').value;

  if (!id) {
    alert('삭제할 ID를 입력하세요.');
    return;
  }

  fetch('http://localhost:3000/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
      refreshData();
    })
    .catch(error => console.error('Error:', error));
});

// 수정 버튼 클릭 이벤트 리스너
document.getElementById('update').addEventListener('click', () => {
  const id = document.querySelector('input[name="id"]').value;
  const name = document.querySelector('input[name="name"]').value;
  const age = document.querySelector('input[name="age"]').value;

  if (!id || !name || !age) {
    alert('ID, 이름, 나이를 입력하세요.');
    return;
  }

  fetch('http://localhost:3000/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, name, age }),
  })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
      refreshData();
    })
    .catch(error => console.error('Error:', error));
});
