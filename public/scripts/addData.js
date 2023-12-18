import refreshData from "./refreshData.js";

async function addData(event) {
  event.preventDefault(); // 페이지 새로고침 막기 위해 사용

  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;

  try {
    const response = await fetch('http://localhost:3000/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, age }),
    });

    if (response.ok) {
      alert('추가 완료');
    } else {
      const data = await response.json();
      alert(`Error: ${data.error}`);
    }
  } catch (error) {
    console.error('Error adding user:', error);
  }

  refreshData();
}
export default addData;