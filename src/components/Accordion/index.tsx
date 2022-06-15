import { FC, useEffect, useState } from 'react';
import api from '../../services/api';
import './styles.css';

interface ICategory {
  id: string;
  name: string;
}

interface IProduct {
  id: string;
  name: string;
  category: ICategory;
}

const Accordion: FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    async function getCategories() {
      const response = await api.get('/produtos');

      setProducts(response.data.data);
    }

    getCategories();
  }, []);

  return (
    <div className="accordion">
      <section className="accordion__inner">
        <div className="accordion__item">
          <button type="button" className="accordion__button">
            <div className="accordion__icon">
              <i className="fa-solid fa-mug-saucer" />
            </div>
            <div className="accordion__title">Cafés</div>
          </button>
          <div className="accordion__content">
            <p className="product">
              <span className="product__title">Café coado</span>
              <span className="product__price">R$ 2,50</span>
            </p>
            <p className="product">
              <span className="product__title">Café coado com leite</span>
              <span className="product__price">R$ 3,50</span>
            </p>
            <p className="product">
              <span className="product__title">Café expresso</span>
              <span className="product__price">R$ 5,00</span>
            </p>
            <p className="product">
              <span className="product__title">Café expresso com leite</span>
              <span className="product__price">R$ 6,00</span>
            </p>
            <p className="product">
              <span className="product__title">Cappuccino</span>
              <span className="product__price">R$ 6,00</span>
            </p>
            <p className="product">
              <span className="product__title">Chocolate quente</span>
              <span className="product__price">R$ 6,00</span>
            </p>
            <p className="product">
              <span className="product__title">Chocolate frio</span>
              <span className="product__price">R$ 6,00</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accordion;
