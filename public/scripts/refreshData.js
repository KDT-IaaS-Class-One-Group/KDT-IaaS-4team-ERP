async function refreshData() {
  try {
    const response = await fetch('http://localhost:3000/');
    const data = await response.json();

    // 기존 테이블 내용 삭제
    const userList = document.getElementById('userList');
    userList.innerHTML = '';

    // 서버에서 받아온 데이터로 새로운 행 추가
    data.forEach((user) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.age}</td>
      `;
      userList.appendChild(row);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

export default refreshData;