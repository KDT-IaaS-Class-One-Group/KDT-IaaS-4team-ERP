const express = require("express");
const app = express();
const PORT = 3000;

const dataRoutes = require("./routes/dataRoutes");

// public 폴더의 파일을 정적으로 제공
app.use(express.static("public"));

// JSON 본문 파싱을 위한 미들웨어
app.use(express.json());

// 데이터 라우트
app.use("/api", dataRoutes);

// 서버 시작
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
