import express from 'express';
import pool from '../database';
import bodyParser from 'body-parser';
import cors from 'cors';

const adminLogin = express();
const port = 3001;

adminLogin.use(cors());
adminLogin.use(bodyParser.json());

adminLogin.post('/admin/login', async (req, res) => {
  console.log('test');
  let conn;
  try {
    conn = await pool.getConnection();
    const { userid, password } = req.body;
    const rows = await conn.query(
      'SELECT * FROM administrators WHERE userid = ? AND password = ?',
      [userid, password],
    );

    if (rows.length > 0) {
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
