import Header from "@/app/components/Header/Header";
import Nav from "@/app/components/Nav/Nav"; 
import CartComponent from "@/app/components/Main/CartComponent";
import Footer from "@/app/components/Footer/Footer";
import Btn from "../components/Btn/Btn";

export default function Cart() {

  const consoleLog = () => {
    console.log("주문하기 버튼 클릭");
  } 
  return (
    <div>
      <Header />
      <Nav />
      <Btn textContent="주문하기" onClick={consoleLog}/>
      <CartComponent />
      <Footer />
    </div>
  );
}
