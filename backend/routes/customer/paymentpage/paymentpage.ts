// * 메인페이지에서 필요한 데이터 보내주는 라우팅 모듈
// * 구매페이지 두 가지 경우를 나눔.
/**
 * 1. 상품페이지에서 단독으로 상품을 클릭했을 시, 상품(prodIndex만으로 상품 데이터를 보내줌.)
 * ? 2. 장바구니 페이지에서 주문하기 클릭 시, 토큰으로 (userIndex)를 식별해서 userIndex가 들어있는 cartIndex를 전부 조회하고 그 cartIndex에서 prodIndex값을 다 추출해서 데이터들을 보내준다?
 */

 import express from "express";
 import pool from "../../../database";
 import jwt, { JwtPayload } from "jsonwebtoken";
 
 const paymentData = express();

paymentData.post('/payment', async (req,res)=>{
  
})