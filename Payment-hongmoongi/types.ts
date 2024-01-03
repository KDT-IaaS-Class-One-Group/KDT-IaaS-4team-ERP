// 배송정보와 상품정보의 속성값에 대한 타입 정의

export type deliveryType = {
  productData: string;
  buyerInfo: string;
  address: number|string;
  request: string;
};

export type productType = {
  productImg: string;
  productContent: string;
  orderDate: number;
  orderId: string;
  orderPrice: number;
  orderState: string;
}