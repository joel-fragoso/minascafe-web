import { FC } from 'react';
import { FaFacebookF, FaInstagram, FaHeart } from 'react-icons/fa';
import './styles.css';

const Footer: FC = () => {
  return (
    <footer>
      <div className="footer__inner">
        <div className="footer__social">
          <a
            className="footer__link"
            href="fb://page/946780975414097"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF className="footer__icon" />
          </a>
          <a
            className="footer__link"
            href="instagram://user?username=minascafecafeteria"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="footer__icon" />
          </a>
        </div>
        <div className="footer__copyright">
          © 2021 - Feito com <FaHeart className="fa-heart" /> por Joel Fragoso
        </div>
      </div>
    </footer>
  );
};

export default Footer;
