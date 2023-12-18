const express = require('express');
const mariadb = require('mariadb');
const cors = require('cors');
const bodyParser = require('body-parser');

// Express 애플리케이션 및 포트 설정
const app = express();
const port = 3000;

// cors 미들웨어를 사용하여 모든 Origin에 대해 허용합니다.
app.use(cors());

// Body Parser 미들웨어를 사용하여 JSON 파싱을 활성화합니다.
app.use(bodyParser.json());

// MariaDB 연결 정보 설정
const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: '6892',
  database: 'test',
  connectionLimit: 5,
});

// JSON 파싱을 위한 Express의 내장 미들웨어 추가
app.use(express.json());

// 조회
app.get('/', async (req, res) => {
  let conn;
  try {
    // MariaDB 풀에서 연결을 가져옵니다.
    conn = await pool.getConnection();
    // 사용자 테이블에서 모든 데이터를 조회합니다.
    const rows = await conn.query('SELECT * FROM users');
    // 조회 결과를 JSON 형식으로 응답합니다.
    res.json(rows);
  } catch (err) {
    // 오류 발생 시 500 Internal Server Error로 응답합니다.
    res.status(500).json({ error: err.message });
  } finally {
    // 연결을 종료합니다.
    if (conn) return conn.end();
  }
});

// 추가
app.post('/add', async (req, res) => {
  const { name, age } = req.body;

  // 요청 바디에서 이름과 나이를 추출합니다.
  if (!name || !age) {
    // 이름 또는 나이가 누락된 경우 400 Bad Request로 응답합니다.
    return res.status(400).json({ error: 'Name and age are required for adding a user.' });
  }

  let conn;
  try {
    // MariaDB 풀에서 연결을 가져옵니다.
    conn = await pool.getConnection();

    // 사용자 테이블에 새로운 사용자를 추가하고, 삽입된 ID를 얻습니다.
    const result = await conn.query('INSERT INTO users (name, age) VALUES (?, ?)', [name, age]);

    const insertedId = Number(result.insertId);

    // 성공적으로 사용자가 추가되었음을 응답합니다.
    res.json({ message: '추가 완료', insertedId });
  } catch (err) {
    // 오류 발생 시 500 Internal Server Error로 응답합니다.
    res.status(500).json({ error: err.message });
  } finally {
    // 연결을 종료합니다.
    if (conn) return conn.end();
  }
});

/*
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
*/

// 서버를 지정된 포트에서 실행합니다.
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});