const express = require('express');
const mariadb = require("mysql2/promise");
const bodyParser = require("body-parser");
// 암호화해주는 모듈
const bcrypt = require('bcrypt');
// uuidv4 함수를 호출하면 무작위로 생성된 UUID가 반환됨. 이를 활용하여 각 사용자에게 고유한 ID를 부여할 수 있다.
const { v4: uuidv4 } = require('uuid');
// 개발환경이 개발환경일 때: development
// 개발환경이 배포단계 일 때: production
// dev변수는 지금 애플리케이션이 실행되는 환경이 개발환경일 때를 정의해준다.
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
// getRequestHandler()는 next.js에서 익스프레스에서 만든 모든 요청 라우팅을 처리해주는 함수이다.
const handle = app.getRequestHandler();
// 토큰?
// const jwt = require("jsonwebtoken");

// * MariaDB 연결 정보 설정
const pool = mariadb.createPool({
  host: 'localhost', // MariaDB 호스트 주소
  user: 'root', // MariaDB 사용자명
  password: 'mariadb', // MariaDB 비밀번호
  database: 'teamproject_1', // MariaDB 데이터베이스명
  connectionLimit: 5, // 연결 풀의 최대 연결 수
});

//? release()
pool
  .getConnection()
  .then((conn) => {
    console.log("데이터베이스 연결 성공");
    conn.release();
  })
  .catch((err) => {
    console.error("데이터베이스 연결 실패:", err.message);
  });



// * NEXT개발환경 파일들을 익스프레스 서버로 라우팅해주기
app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());

  // * 회원가입 엔드포인트
  server.post('/api/signup', async (req, res) => {
    const { username, password, email, phoneNumber } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const userId = uuidv4(); // 사용자 식별을 위한 UUID 생성

      // 사용자 데이터 삽입
      await pool.query(
        'INSERT INTO users (id, username, password, email, phone_number) VALUES (?, ?, ?, ?, ?)',
        [userId, username, hashedPassword, email, phoneNumber]
      );

      res.status(201).json({ success: true, message: '회원가입이 완료되었습니다.' });
    } catch (error) {
      console.error('Error during signup:', error);
      res.status(500).json({ success: false, message: '회원가입 중 오류가 발생했습니다.' });
    }
  });

  // * 로그인 엔드포인트
  server.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    try {
      // 사용자 조회
      const result = await pool.query('SELECT * FROM users WHERE username = ?', [username]);

      console.log('Received data from client:', { username, password });

      // 사용자가 존재하는지 확인
      if (result.length === 0) {
        res.status(401).json({ success: false, message: '사용자가 존재하지 않습니다.' });
        return;
      }

      // 비밀번호 확인
      const user = result[0];
      console.log('User data from the server:', user);
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        res.status(200).json({ success: true, message: '로그인 성공' });
      } else {
        res.status(401).json({ success: false, message: '비밀번호가 일치하지 않습니다.' });
      }
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ success: false, message: '로그인 중 오류가 발생했습니다.' });
    }
  });

  // 익스프레스에서 요청된 모든 것들을 next.js에서 요청받은거로 처리하는 로직.
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server is running on http://localhost:${PORT}`);
  });
})
