// * 상품 리뷰등록 페이지에서 사용자가 작성한 내용을 데이터 테이블 'reviews'에 넣어주기

import express from "express";
import pool from "../../../database";

const productcommentwrite = express();