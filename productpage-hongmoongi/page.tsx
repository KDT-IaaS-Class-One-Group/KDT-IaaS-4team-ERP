// 'use client'
// import Productdetail from "../Product-hongmoongi/productdetail"

// import Header from "../src/app/components/Header/Header";
// import Nav from "../src/app/components/Nav/Nav";
// import Footer from "../src/app/components/Footer/Footer";

export default function ProductPage() {

  return (
    <>
      <Header />
      <Nav />

      {/* 메인페이지에서 클릭한 상품의 상세페이지  */}
      <Productdetail/>

      <Footer />
    </>
  );
};


