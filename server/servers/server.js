const express = require('express');
const app = express();

app.use(express.json());
// JSON 요청 본문 파싱

// 추가 미들웨어 들어갈 자리
const userRoutes = require('./router/userRoutes')
// 라우터 사용
app.use('/routes/userRoutes', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT => {
  console.log(`http://localhost:${PORT}`);
})

