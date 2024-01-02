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