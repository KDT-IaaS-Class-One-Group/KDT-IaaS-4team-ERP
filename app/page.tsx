import Image from 'next/image';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';

export default function Home() {
  return (
    <>
      <Header />
      <Nav />
      <main></main>
      <Footer />
    </>
  );
}
