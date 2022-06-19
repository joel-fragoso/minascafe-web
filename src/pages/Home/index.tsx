import { FC } from 'react';
import ScrollTop from '../../components/ScrollTop';
import Header from '../../layouts/Header';
import Main from '../../layouts/Main';
import './styles.css';

const Home: FC = () => {
  return (
    <>
      <Header />
      <Main />
      <ScrollTop />
    </>
  );
};

export default Home;
