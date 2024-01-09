import express from 'express';
import mariadb from 'mariadb';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// MariaDB 연결 풀 설정
const pool = mariadb.createPool({
  host: '192.168.100.83',
  port: 3309,
  user: 'root',
  password: 'root',
  database: 'form',
  connectionLimit: 5,
});

app.post('/admin/login', async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const { username, password } = req.body;
    const rows = await conn.query(
      'SELECT * FROM administrators WHERE username = ? AND password = ?',
      [username, password],
    );

    if (rows.length > 0) {
      res.json({ success: true, message: '로그인 성공' });
    } else {
      res.json({ success: false, message: '잘못된 사용자 이름 또는 비밀번호' });
    }
  } catch (err) {
    res.status(500).send('로그인 처리 중 오류 발생: ' + err);
  } finally {
    if (conn) conn.release();
  }
});

app.post('/admin/signup', async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const { username, userid, password } = req.body;
    const rows = await conn.query(
      'INSERT INTO administrators (username, userid, password) VALUES (?, ?, ?)',
      [username, userid, password],
    );

    res.json({ success: true, message: '회원가입 성공' });
  } catch (err) {
    res.status(500).send('회원가입 처리 중 오류 발생: ' + err);
  } finally {
    if (conn) conn.release();
  }
});

app.listen(port, () => {
  console.log(`Express 서버가 ${port}번 포트에서 실행중입니다.`);
});
