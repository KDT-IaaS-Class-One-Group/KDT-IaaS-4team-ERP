import express from 'express';
import session from 'express-session';
import pool from '../../../database';

export const adminLogin = express();

adminLogin.post('/api/adminlogin', async (req, res) => {
  let conn;
  console.log('test');
  try {
    conn = await pool.getConnection();
    const { adminId, adminPassword } = req.body;
    console.log('test');
    // 관리자 이름도 함께 검색
    const query =
      'SELECT adminName FROM administrators WHERE adminId = ? AND adminPassword = ?';
    const rows = await conn.query(query, [adminId, adminPassword]);

    if (rows.length > 0) {
      // 관리자 이름을 응답에 포함
      const adminName = rows[0].adminName;
      res.json({ success: true, adminName });
    } else {
      res.json({ success: false });
    }
  } catch (err) {
    res.status(500).send('로그인 처리 중 오류 발생: ' + err);
  } finally {
    if (conn) conn.release();
  }
});
