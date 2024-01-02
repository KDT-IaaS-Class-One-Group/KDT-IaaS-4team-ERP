// interfaces/interfaces.ts

// ProductList에 쓰이는 인터페이스
export interface PList {
  pUrl: string;
  pSub: string;
  pPrice: number;
  pCount: number;
  className?: string;
}
export interface OrderListProps {
  pUrl: string;
  pSub: string;
  orderDate : string;
  orderId : string;
  pPrice: number;
  pCount: number;
  orderState : Boolean;
  className?: string;
}