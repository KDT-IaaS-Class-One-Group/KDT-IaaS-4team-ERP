import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import cors from 'cors';
import { adminLogin } from './routes/admin/login/adminLogin';
import { adminProducts } from './routes/admin/products/adminProducts';
import { adminOrders } from './routes/admin/order/adminOrders';
import { adminAddProduct } from './routes/admin/products/adminAddProduct';
import { adminUpdateProduct } from './routes/admin/products/adminUpdateProduct';
import { adminDeleteProduct } from './routes/admin/products/adminDeleteProduct';

const app = express();
const port = 3560;

app.use(
  session({
    secret: 'test',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // HTTPS를 사용할 경우 true로 설정
  }),
);
app.use(cors());
app.use(bodyParser.json());

app.post('/api/adminlogin', adminLogin);

app.get('/api/products', adminProducts);
app.post('/api/addproduct', adminAddProduct);
app.get('/api/deleteproduct', adminDeleteProduct);
app.put('/api/product/:id', adminUpdateProduct);

app.get('/api/orders', adminOrders);

app.listen(port, () => {
  console.log(`Express 서버가 ${port}번 포트에서 실행중입니다.`);
});
