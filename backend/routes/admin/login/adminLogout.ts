app.get('/admin/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).send('로그아웃 실패');
    } else {
      res.clearCookie('connect.sid'); // 세션 쿠키 삭제
      res.redirect('/admin/login');
    }
  });
});
