// Express API 서버 (adminLogin.ts)

import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import pool from '../../../database';

export const adminLogin = express.Router();

adminLogin.post('/api/adminlogin', async (req: Request, res: Response) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const { adminId, adminPassword } = req.body;
    const query = 'SELECT adminName FROM administrators WHERE adminId = ? AND adminPassword = ?';
    const rows = await conn.query(query, [adminId, adminPassword]);

    if (rows.length > 0) {
      const adminName = rows[0].adminName;

      // JWT 생성
      const token = jwt.sign({ adminId, adminName }, 'YourSecretKey', { expiresIn: '1h' });

      // 클라이언트로 JWT 전송
      res.json({ success: true, token, adminName });
    } else {
      res.json({ success: false });
    }
  } catch (err) {
    res.status(500).send('로그인 처리 중 오류 발생: ' + err);
  } finally {
    if (conn) conn.release();
  }
});
