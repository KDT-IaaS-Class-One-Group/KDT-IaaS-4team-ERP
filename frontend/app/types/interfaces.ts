// 여러 컴포넌트에 작성된 인터페이스들을 모은 interface.ts 파일입니다.
// interfaces/interfaces.ts
// component 폴더와 형제 위치에 있습니다.

// ProductList에 쓰이는 인터페이스
export interface PList {
  prodIndex: number;
  prodImgUrl: string;
  prodDescription: string;
  prodPrice: number;
  cartIndex: number;
  cartProductCount: number;
  className?: string;
}
export interface OrderListProps {
  pUrl: string;
  pSub: string;
  orderDate: string;
  orderId: string;
  pPrice: number;
  pCount: number;
  orderState: Boolean;
  className?: string;
}
