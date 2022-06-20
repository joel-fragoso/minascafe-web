import { FC } from 'react';
import { FaArrowUp } from 'react-icons/fa';
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
        <FaArrowUp className="scroll-top__icon" />
      </button>
    </div>
  );
};

export default ScrollTop;
