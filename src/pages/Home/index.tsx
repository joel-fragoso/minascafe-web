import { FC } from 'react';
import Footer from '../../layouts/Footer';
import Header from '../../layouts/Header';
import Main from '../../layouts/Main';
import ScrollTop from '../../components/ScrollTop';
import './styles.css';

const Home: FC = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <ScrollTop />
    </>
  );
};

export default Home;
