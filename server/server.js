const express = require('express');
const mariadb = require('mariadb');
const app = express();
const cors = require('cors')
const port = 3560;

// MariaDB 연결 정보
const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: 'rlagus1212!',
  database: 'kin',
  connectionLimit: 10,
});

// JSON 파싱을 위한 미들웨어 추가
app.use(express.json());
app.use(cors());

// 로그인 요청을 처리하는 라우터
app.post('/signup', async (req, res) => {
  try {
    const { user_id, password, email, phone } = req.body;
    console.log(user_id, password, email, phone )

    // MariaDB 연결 획득
    const conn = await pool.getConnection();

    // 사용자 정보 조회
    const result = await conn.query('SELECT user FROM user WHERE user_id = ? AND password = ?', [user_id, password]);

    // 연결 반환
    conn.release();

    if (result.length > 0) {
      // 사용자 정보가 일치하면 로그인 성공
      res.json({ success: true });
    } else {
      // 사용자 정보가 일치하지 않으면 로그인 실패
      res.json({ success: false });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// 서버를 시작한다.
app.listen(port, () => {
  console.log('서버가 시작되었습니다.');
});