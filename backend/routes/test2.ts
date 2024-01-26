import express from 'express';
import pool from '../database';

const test2 = express();

test2.get('/test2', async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    
    // 데이터베이스에서 모든 포스트 조회
    const cartResult = await conn.query('SELECT * FROM cart WHERE userIndex = ?',
    [1]);

    // 조회 결과를 콘솔에 출력
    console.log(cartResult);

    // 조회 결과를 JSON 형태로 응답
    res.json(cartResult);
    res.send('ok')
  } catch (err) {
    res.status(500).send('로그인 처리 중 오류 발생: ' + err);
  } finally {
    // 연결 반환
    if (conn) conn.release(); 
  }
});

export default test2;
