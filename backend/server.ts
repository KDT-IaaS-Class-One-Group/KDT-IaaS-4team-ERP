import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import cors from "cors";
import test from "./routes/test";

// 관리자
import adminLogin from "./routes/adminLogin";

// 고객페이지
import customerLogin from "./routes/customer/customerLogin";
import customerSignup from "./routes/customer/customerSignup";
import mainPage from "./routes/customer/mainPage";
import product from "./routes/customer/productpage/productpage";
import buybutton from "./routes/customer/productpage/buybutton";
import paymentDataForProductPage from "./routes/customer/paymentpage/productTopaymentpage";
import paymentDataForCart from "./routes/customer/paymentpage/cartTopaymentPage";
import productcomment from "./routes/customer/review/productcomment";
import cartpage from "./routes/customer/cartpage/cartpage";

const app = express();
const port = 3560;

app.use(
  session({
    secret: "test",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // HTTPS를 사용할 경우 true로 설정
  })
);
app.use(cors());
app.use(bodyParser.json());

// 테스트
app.get("/post", test); 


// * admin
app.post("/admin/login", adminLogin);

//* customer
// 메인페이지
app.get("/", mainPage);
// 로그인, 회원가입 페이지
app.post("/login", customerLogin);
app.post("/signup", customerSignup);
// 상품 페이지
app.get("/product", product);
app.post("/product/buy", buybutton);
// 구매 페이지
app.get('/product/:prodIndex/payment', paymentDataForProductPage)
app.post('/cartToPayment', paymentDataForCart)
// 리뷰 페이지
app.get('/productcomment', productcomment)
// 카트 페이지
app.get('/cart', cartpage);

app.listen(port, () => {
  console.log(`Express 서버가 ${port}번 포트에서 실행중입니다.`);
});
