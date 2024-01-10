import express from 'express';
import session from 'express-session';
import pool from '../database';

const adminLogin = express();

adminLogin.post('/admin/login', async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const { userid, password } = req.body;
    const rows = await conn.query(
      'SELECT * FROM administrators WHERE userid = ? AND password = ?',
      [userid, password],
    );

    if (rows.length > 0) {
      req.session. = userid;
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  } catch (err) {
    res.status(500).send('로그인 처리 중 오류 발생: ' + err);
  } finally {
    if (conn) conn.release();
  }
});

export default adminLogin;
