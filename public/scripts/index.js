document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('http://localhost:3000');
  const users = await response.json();
  const userTable = document.getElementById('userTable');
  const userList = document.getElementById('userList');

  users.forEach(user => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${user.id}</td><td>${user.name}</td><td>${user.age}</td>`;
    userList.appendChild(row);
  });
});