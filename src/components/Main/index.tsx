import { FC } from 'react';
import './styles.css';

const Main: FC = () => {
  return (
    <main className="main-content">
      <div className="content-category">
        <h3 className="category-title">Categoria</h3>
        <div className="category-product">Produtos</div>
      </div>
    </main>
  );
};

export default Main;
