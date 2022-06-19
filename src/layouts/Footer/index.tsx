import { FC } from 'react';
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
            <svg
              className="svg-inline--fa fa-facebook-f footer__icon"
              aria-hidden="true"
              focusable="false"
              data-prefix="fa-brands"
              data-icon="facebook-f"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
              />
            </svg>
            {/* <!-- <i className="fa-brands fa-facebook-f footer__icon"></i> Font Awesome fontawesome.com --> */}
          </a>
          <a
            className="footer__link"
            href="instagram://user?username=minascafecafeteria"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="svg-inline--fa fa-instagram footer__icon"
              aria-hidden="true"
              focusable="false"
              data-prefix="fa-brands"
              data-icon="instagram"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />
            </svg>
            {/* <!-- <i class="fa-brands fa-instagram footer__icon"></i> Font Awesome fontawesome.com --> */}
          </a>
        </div>
        <div className="footer__copyright">
          © 2021 - Feito com{' '}
          <svg
            className="svg-inline--fa fa-heart"
            aria-hidden="true"
            focusable="false"
            data-prefix="fa-solid"
            data-icon="heart"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M472.1 270.5l-193.1 199.7c-12.64 13.07-33.27 13.08-45.91 .0107l-193.2-199.7C-16.21 212.5-13.1 116.7 49.04 62.86C103.3 15.88 186.4 24.42 236.3 75.98l19.7 20.27l19.7-20.27c49.95-51.56 132.1-60.1 187.3-13.12C525.1 116.6 528.2 212.5 472.1 270.5z"
            />
          </svg>
          {/* <!-- <i class="fa-solid fa-heart"> </i> Font Awesome fontawesome.com --> */}{' '}
          por Joel Fragoso
        </div>
      </div>
    </footer>
  );
};

export default Footer;
