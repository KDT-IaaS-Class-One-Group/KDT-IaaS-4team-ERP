import BuyerInformation from "../components/Payment/buyerInformation";
import ProductInformation from "../components/Payment/productInformation"
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav"
import Footer from "../components/Footer/Footer"

export default function paymentPage() {
  return (
    <>
    <Header />
    <Nav />
    <BuyerInformation />
    <ProductInformation />
    <Footer />
    </>
  );
}
