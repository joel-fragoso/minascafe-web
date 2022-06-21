import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
            <FontAwesomeIcon
              className="footer__icon"
              icon={{ prefix: 'fab', iconName: 'facebook-f' }}
            />
          </a>
          <a
            className="footer__link"
            href="instagram://user?username=minascafecafeteria"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className="footer__icon"
              icon={{ prefix: 'fab', iconName: 'instagram' }}
            />
          </a>
        </div>
        <div className="footer__copyright">
          © 2021 - Feito com{' '}
          <FontAwesomeIcon icon={{ prefix: 'fas', iconName: 'heart' }} /> por
          Joel Fragoso
        </div>
      </div>
    </footer>
  );
};

export default Footer;
