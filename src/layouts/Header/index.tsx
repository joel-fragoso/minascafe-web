import { FC } from 'react';
import Banner from '../../components/Banner';
import LogoImg from '../../assets/img/perfil.png';
import './styles.css';

const Header: FC = () => {
  return (
    <>
      <Banner />
      <header className="header">
        <img className="header__avatar" src={LogoImg} alt="Minas Café" />
        <span className="header__title">Minas Café</span>
        <span className="header__description">Cardápio</span>
      </header>
    </>
  );
};

export default Header;
