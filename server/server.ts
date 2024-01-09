import express from 'express';
import next from 'next';
import mariadb from 'mariadb';

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.use(express.json());

    const pool = mariadb.createPool({
        host: 'your-db-host',
        user: 'your-db-user',
        password: 'your-db-password',
        database: 'your-db-name'
    });

    // 회원가입 API 라우트
    server.post('/api/signup', async (req, res) => {
        // 여기에 회원가입 로직 구현
    });

    // 로그인 API 라우트
    server.post('/api/login', async (req, res) => {
        // 여기에 로그인 로직 구현
    });

    // Next.js의 모든 요청 처리
    server.all('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});