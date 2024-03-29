import { FC, useCallback, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';

const ScrollTop: FC = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function scroll() {
      if (!buttonRef.current) {
        return;
      }
      if (window.scrollY !== 0) {
        buttonRef.current.style.visibility = 'visible';
        buttonRef.current.style.opacity = '1';
      } else {
        buttonRef.current.style.visibility = 'hidden';
        buttonRef.current.style.opacity = '0';
      }
    }

    document.addEventListener('scroll', scroll);
  }, []);

  const handleScrollTop = useCallback(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div>
      <button
        type="button"
        className="scroll-top"
        ref={buttonRef}
        onClick={handleScrollTop}
      >
        <FontAwesomeIcon
          className="scroll-top__icon"
          icon={{ prefix: 'fas', iconName: 'arrow-up' }}
        />
      </button>
    </div>
  );
};

export default ScrollTop;
