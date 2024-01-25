import express from 'express';

export const adminLogout = express();

adminLogout.post('/api/adminlogout', async (req, res) => {
  // JWT를 사용하는 경우, 서버에서 특별한 처리가 필요 없음
  res.json({ success: true, message: '로그아웃 처리됨' });
});
