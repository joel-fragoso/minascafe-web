import { FC } from 'react';
import './styles.css';
import LogoImg from '../../assets/img/perfil.png';

const Header: FC = () => {
  return (
    <>
      <div className="banner" />
      <header className="header">
        <figure>
          <img src={LogoImg} alt="Minas Café logo" />
        </figure>
        <h1 className="header-title"> Minas Café </h1>
        <h2 className="header-subtitle"> Cardápio </h2>
      </header>
    </>
  );
};

export default Header;
