import express from 'express';

export const adminLogout = express();

adminLogout.post('/api/adminlogout', async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).send('로그아웃 실패');
    } else {
      res.clearCookie('connect.sid');
      console.log('test');
    }
  });
});
