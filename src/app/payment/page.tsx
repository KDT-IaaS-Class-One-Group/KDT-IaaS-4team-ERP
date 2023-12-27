import BuyerInformation from "../components/Payment/buyerInformation";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav"
import Footer from "../components/Footer/Footer"

export default function paymentPage() {
  return (
    <>
    <Header />
    <Nav />
    <BuyerInformation />
    {/* <ProductInformation /> */}
    <Footer />
    </>
  );
}
