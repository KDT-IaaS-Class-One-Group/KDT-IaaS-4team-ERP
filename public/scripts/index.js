import refreshData from "./refreshData.js";
import addData from "./addData.js";
refreshData();

const addUserForm = document.getElementById('addForm');
addUserForm.addEventListener('submit', addData);