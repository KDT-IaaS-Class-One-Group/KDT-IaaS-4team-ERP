import express from 'express';
import session from 'express-session';

const adminLogout = express();

adminLogout.get('/admin/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).send('로그아웃 실패');
    } else {
      res.clearCookie('connect.sid'); // 세션 쿠키 삭제
      res.redirect('/admin/login');
    }
  });
});

export default adminLogout;
