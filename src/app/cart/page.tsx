import Header from "@/app/components/Header/Header";
import Nav from "@/app/components/Nav/Nav"; 
import CartComponent from "@/app/components/cartComponents/CartMain";
import Footer from "@/app/components/Footer/Footer";

export default function Cart() {
  return (
    <div>
      <Header />
      <Nav />
      <CartComponent />
      <Footer />
    </div>
  );
}
