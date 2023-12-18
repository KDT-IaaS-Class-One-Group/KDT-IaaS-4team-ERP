const express = require('express');
const mariadb = require('mariadb');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// cors 미들웨어를 사용하여 모든 Origin에 대해 허용합니다.
app.use(cors());
app.use(bodyParser.json());

// MariaDB 연결 정보
const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: '6892',
  database: 'test',
  connectionLimit: 5,
});

app.use(express.json()); // JSON 파싱을 위한 미들웨어 추가

// 조회
app.get('/', async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query('SELECT * FROM users');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    if (conn) return conn.end();
  }
});

// 추가
app.post('/add', async (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({ error: 'Name and age are required for adding a user.' });
  }

  let conn;
  try {
    conn = await pool.getConnection();
    const result = await conn.query('INSERT INTO users (name, age) VALUES (?, ?)', [name, age]);
    res.json({ message: 'User added successfully.', insertedId: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    if (conn) return conn.end();
  }
});

// 수정
app.post('/update', async (req, res) => {
  const { id, name, age } = req.body;
  console.log(id, name, age);
  if (!id || !name || !age) {
    return res.status(400).json({ error: 'ID, name, and age are required for updating a user.' });
  }

  let conn;
  try {
    conn = await pool.getConnection();
    await conn.query('UPDATE users SET name = ?, age = ? WHERE id = ?', [name, age, id]);
    res.json({ message: 'User updated successfully.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    if (conn) return conn.end();
  }
});

// 삭제
app.post('/delete', async (req, res) => {
  const { id } = req.body;
  console.log(id);
  if (!id) {
    return res.status(400).json({ error: 'ID is required for deleting a user.' });
  }

  let conn;
  try {
    conn = await pool.getConnection();
    await conn.query('DELETE FROM users WHERE id = ?', [id]);
    res.json({ message: 'User deleted successfully.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    if (conn) return conn.end();
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});