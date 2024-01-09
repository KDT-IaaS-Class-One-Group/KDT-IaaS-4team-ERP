import { Router } from 'express';
import mariadb from 'mariadb';
import pool from '../database';

const adminLogin = Router();

adminLogin.post('/admin/login', async (req, res) => {
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

export default adminLogin;
