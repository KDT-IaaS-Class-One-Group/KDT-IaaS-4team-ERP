import DeliveryInformation from "../components/Payment/deliveryInformation";
import ProductInformation from "../components/Payment/productInformation"
import Buybutton from "../components/Payment/buyButton"
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav"
import Footer from "../components/Footer/Footer"

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
