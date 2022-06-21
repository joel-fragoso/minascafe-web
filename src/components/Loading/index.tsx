import { FC } from 'react';
import './styles.css';

const Loading: FC = () => {
  return (
    <div className="loading__overlay">
      <div className="loading">
        <div className="loading__double-bounce1" />
        <div className="loading__double-bounce2" />
      </div>
    </div>
  );
};

export default Loading;
