// 백단 업데이트 24/01/12/오후8시

import express from 'express';
import pool from '../database';

const adminLogin = express();

adminLogin.get('/post', async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    
    // 데이터베이스에서 모든 포스트 조회
    const [rows, fields] = await conn.query('SELECT * FROM post');

    // 조회 결과를 콘솔에 출력
    console.log(rows);

    // 조회 결과를 JSON 형태로 응답
    res.json(rows);
  } catch (err) {
    res.status(500).send('로그인 처리 중 오류 발생: ' + err);
  } finally {
    // 연결 반환
    if (conn) conn.release(); 
  }
});

export default adminLogin;
