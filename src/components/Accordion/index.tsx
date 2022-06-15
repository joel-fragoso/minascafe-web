import { FC } from 'react';
import './styles.css';

const Accordion: FC = () => {
  return (
    <div className="content-category">
      <h3 className="category-title">Categoria</h3>
      <div className="category-product">Produtos</div>
    </div>
  );
};

export default Accordion;
