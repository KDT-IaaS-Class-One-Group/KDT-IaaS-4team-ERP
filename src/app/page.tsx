import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className='container'>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}
