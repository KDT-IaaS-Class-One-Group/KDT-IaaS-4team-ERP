import express from 'express';

const app = express();
const port = process.env.PORT || 3001; // Express 서버 포트 설정

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});