// 상품에 관한 데이터를 조회해서 데이터값을 받아와서 컴포넌트의 속성값으로 넣어서 정보를 표시해주는 컴포넌트.
// 추후 필요한 작업: 넣어줄 속성값에 대한 데이터가 필요.

import styles from "./style/productInformation.module.css";
import { productType } from "./types";

type ProductType = {
  productInfo: productType;
};

const ProductInformation: React.FC<ProductType> = ({ productInfo }) => {
  // const buyerinformation = await fetchbuyerinformationdata()

  return (
    <div className="flex justify-center items-center mt-5">
      <div className={`${styles.productInformation}`}>
        <div>
          <div className="bg-slate-300">상품 정보</div>
          <div className="bg-slate-300">주문 일자</div>
          <div className="bg-slate-300">주문 번호</div>
          <div className="bg-slate-300">주문 금액(수량)</div>
          <div className="bg-slate-300">주문 상태</div>
        </div>
        <div>
          <div>
            <div className="bg-slate-500">product img data</div>
            {/* {productInfo.productImg} */}
            <div>product content data</div>
            {/* {productInfo.productContent} */}
          </div>
          <div className="bg-red-400">order date data</div>
          {/* {productInfo.orderDate} */}
          <div className="bg-red-400">order id data</div>
          {/* {productInfo.orderId} */}
          <div className="bg-red-400">order price data</div>
          {/* {productInfo.orderPrice} */}
          <div className="bg-red-400">order state data</div>
          {/* {productInfo.orderState} */}
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
