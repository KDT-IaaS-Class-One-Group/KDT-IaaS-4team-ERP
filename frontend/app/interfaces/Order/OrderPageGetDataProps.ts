/**
 * /orderpage/getdata 라우팅에서 전달 받는 resposne 데이터 타입입니다.
 */
export interface OrderPageGetDataProps {
  prodIndex: number; // products 테이블의 prodIndex 필드와 관련된 데이터 타입
  prodImgUrl: string; // products 테이블의 prodImgUrl 필드와 관련된 데이터 타입
  prodDescription: string; // products 테이블의 prodDescription 필드와 관련된 데이터 타입
  prodPrice: number; // products 테이블의 prodPrice 필드와 관련된 데이터 타입
  orderPaymentDatetime: string; // order 테이블의 orderPaymentDatetime 필드와 관련된 데이터 타입
  orderIndex: number; // order 테이블의 orderIndex 필드와 관련된 데이터 타입
  orderPaymentCount: number; // order 테이블의 orderPaymentCount 필드와 관련된 데이터 타입
  orderDeliveryDone: number; // order테이블의 배송전, 후를 구별하는 데이터 타입
}
