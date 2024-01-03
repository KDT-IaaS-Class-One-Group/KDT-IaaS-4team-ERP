import DeliveryInformation from "../Payment-hongmoongi/deliveryInformation";
import ProductInformation from "../Payment-hongmoongi/productInformation"
import Buybutton from "../Payment-hongmoongi/buyButton"

import Header from "../src/app/components/Header/Header";
import Nav from "../src/app/components/Nav/Nav"
import Footer from "../src/app/components/Footer/Footer"

export default function PaymentPage() {
  return (
    <>
    <Header />
    <Nav />
    <DeliveryInformation/>
    <ProductInformation />
    <Buybutton />
    <Footer />
    </>
  );
}
