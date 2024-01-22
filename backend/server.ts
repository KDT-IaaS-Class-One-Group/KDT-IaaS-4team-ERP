import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import cors from "cors";
import test from "./routes/test";

// 관리자
import { adminLogin } from "./routes/admin/login/adminLogin";
import { adminProducts } from "./routes/admin/products/adminProducts";
import { adminOrders } from "./routes/admin/order/adminOrders";
import { adminAddProduct } from "./routes/admin/products/adminAddProduct";
import { adminUpdateProduct } from "./routes/admin/products/adminUpdateProduct";
import { adminDeleteProduct } from "./routes/admin/products/adminDeleteProduct";

// 고객페이지
import mainPage from "./routes/customer/mainPage";

import customerLogin from "./routes/customer/customerLogin";
import customerSignup from "./routes/customer/customerSignup";

import product from "./routes/customer/productpage/productpage";
import product from "./routes/customer/productpage/productpage";
import addingcart from "./routes/customer/cartpage/addingcart";

import paymentDataForProductPage from "./routes/customer/paymentpage/productTopaymentpage";
import paymentDataForCart from "./routes/customer/paymentpage/cartTopaymentPage";
import buybutton from "./routes/customer/paymentpage/buybutton";

import orderpage from "./routes/customer/orderpage/orderpage";

import productcomment from "./routes/customer/review/productcomment";
import productcommentfull from "./routes/customer/review/productcommentfull";
import productcommentwrite from "./routes/customer/review/productcommentwrite";
import cartpage from "./routes/customer/cartpage/cartpage";
import cartToPaymentTransition from "./routes/customer/cartpage/cartToPaymentTransition";

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
app.use(express.static("public"));

// 테스트
app.get("/post", test);

// * admin
app.post("/api/adminlogin", adminLogin);

//* customer
// 메인페이지
app.get("/", mainPage);
// 로그인, 회원가입 페이지
app.post("/login", customerLogin);
app.post("/signup", customerSignup);
// 상품 페이지
app.get("/product/:prodIndex", product);
app.post("/product/buy", buybutton);
// 구매 페이지
app.get("/product/:prodIndex/payment", paymentDataForProductPage); // 구매페이지 초기 useeffect로 인한 상품정보 요청
app.post("/product/:prodIndex/payment", buybutton); // 구매페이지 구매완료 버튼 클릭시 오는 포스트 요청
// 주몬조회 페이지
app.get("/orderpage/getdata", orderpage);
// 리뷰 페이지

app.get("/product/:prodIndex/reviews", productcomment);
app.get("/productcommentfull/:reviewIndex", productcommentfull);
app.post("/:prodIndex/reviews", productcommentwrite);

// 카트 페이지
app.get("/cart", cartpage); // cartpage 조회 로직
// todo 수정 필요 지금도 테스팅 중
app.post("/cart/cartToPayment", cartToPaymentTransition); // cartpage에서 결제하기
app.post("/cartToPayment", paymentDataForCart);

app.get("/api/products", adminProducts);
app.post("/api/addproduct", adminAddProduct);
app.delete("/api/deleteproduct/:prodIndex", adminDeleteProduct);
app.put("/api/product/:id", adminUpdateProduct);

app.get("/api/orders", adminOrders);

app.listen(port, () => {
  console.log(`Express 서버가 ${port}번 포트에서 실행중입니다.`);
});
