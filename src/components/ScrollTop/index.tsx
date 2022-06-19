import { FC } from 'react';
import './styles.css';

let button: HTMLButtonElement;

const setButtonRef = (element: HTMLButtonElement) => {
  button = element;
};

function scroll() {
  if (button) {
    if (window.scrollY !== 0) {
      button.style.visibility = 'visible';
      button.style.opacity = '1';
    } else {
      button.style.visibility = 'hidden';
      button.style.opacity = '0';
    }
  }
}

function scrollTop() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}

document.addEventListener('scroll', scroll);

const ScrollTop: FC = () => {
  return (
    <div>
      <button
        type="button"
        className="scroll-top"
        ref={setButtonRef}
        onClick={scrollTop}
      >
        <svg
          className="svg-inline--fa fa-arrow-up scroll-top__icon"
          aria-hidden="true"
          focusable="false"
          data-prefix="fa-solid"
          data-icon="arrow-up"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          data-fa-i2svg=""
        >
          <path
            fill="currentColor"
            d="M374.6 246.6C368.4 252.9 360.2 256 352 256s-16.38-3.125-22.62-9.375L224 141.3V448c0 17.69-14.33 31.1-31.1 31.1S160 465.7 160 448V141.3L54.63 246.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160C387.1 213.9 387.1 234.1 374.6 246.6z"
          />
        </svg>
      </button>
    </div>
  );
};

export default ScrollTop;
