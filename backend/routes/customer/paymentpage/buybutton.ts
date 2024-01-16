// * 상품페이지에서 구매 버튼 클릭시 받아야되는 데이터
// * 입력받는 데이터: userIndex, prodIndex, quantity

//   const [paymentcompleteinfo, setpaymentcompleteinfo] =useState(
//   {orderReceiver : '',
//   orderReceiverPhone : '',
//   orderDeliveryAddress : '',
//   orderRequest : '',
//   prodIndex : prodIndex,
//   orderPaymentCount : quantity,
// })
// 리퀘스트 포스트 데이터 사용예정

import express from "express";
import pool from "../../../database";
import jwt, { JwtPayload } from "jsonwebtoken";

const buybutton = express();

buybutton.post("/product/:prodIndex/payment", async (req, res) => {
  console.log(req.body)


  const {  orderReceiver,  orderReceiverPhone, orderDeliveryAddress, orderRequest, prodIndex, orderPaymentCount } =
  req.body.paymentcompleteinfo;

  console.log(prodIndex)
  let conn;
  console.log(orderReceiver)

  //* prodIndex
  // const prodIndex = parseInt(req.params.prodIndex, 10);

  //
  //* 현재 시간 생성
  const orderDate = new Date();

   // * 클라이언트 측에서 header로 tokken을 보내준 것을 갖고옴.
  const tokenHeader = req.headers.authorization;
  if (!tokenHeader) {
    return res.status(401).json({ error: "토큰이 제공되지 않았습니다." });
  }

  const token = tokenHeader.split(" ")[1];

  //* 토큰을 검증하여 userIndex 정보를 가져옴
  let userIndex: string | JwtPayload;
  try {
    const decoded: JwtPayload = jwt.verify(token, "1234") as JwtPayload;
    userIndex = decoded.userIndex as string;
  } catch (err) {
    return res.status(401).json({ error: "토큰이 유효하지 않습니다." });
  }

  try {
    conn = await pool.getConnection();

    const orderPaymentPriceAtOrder = await conn.query("SELECT prodPrice from products WHERE prodIndex=?", [prodIndex])

    const orderPayment = orderPaymentPriceAtOrder[0].prodPrice
    console.log(orderPayment)
    console.log(orderPayment*orderPaymentCount)

    // 여기에서 userIndex를 사용하여 데이터베이스에 쓰는 로직을 작성
    await conn.query(
      "INSERT INTO orders (userIndex, orderReceiver, prodIndex, orderPaymentDatetime, orderRequest, orderReceiverPhone, orderDeliveryAddress, orderPaymentCount, orderPaymentPriceAtOrder, orderPaymentTotalPrice) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [userIndex, orderReceiver, prodIndex, orderDate, orderRequest, orderReceiverPhone, orderDeliveryAddress, orderPaymentCount, orderPayment, orderPayment*orderPaymentCount]
    );

    res.json({
      success: true,
      message: "주문이 완료되었습니다.(주문데이터가 데이터베이스에 저장됨)",
    });
  } catch (error) {
    console.error("Error during order creation:", error);
    res
      .status(500)
      .json({ success: false, message: "주문 생성 중 오류가 발생했습니다." });
  } finally {
    if (conn) conn.release();
  }
});

export default buybutton