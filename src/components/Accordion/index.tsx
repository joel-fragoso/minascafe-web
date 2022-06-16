import { FC, useCallback, useEffect, useState } from 'react';
import api from '../../services/api';
import formatCurrency from '../../utils/formatCurrency';
import './styles.css';

interface ICategory {
  id: string;
  name: string;
}

interface IProduct {
  id: string;
  name: string;
  price: number;
  category: ICategory;
}

const Accordion: FC = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    async function getCategories() {
      const response = await api.get('/categorias');

      setCategories(response.data.data);
    }
    async function getProducts() {
      const response = await api.get('/produtos');

      setProducts(response.data.data);
    }

    getCategories();
    getProducts();
  }, []);

  const handleShowAccordion = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (isOpen) {
        event.currentTarget.classList.remove('accordion__button--is-open');
        event.currentTarget.nextElementSibling?.classList.remove(
          'accordion__content--is-open',
        );
      } else {
        event.currentTarget.classList.add('accordion__button--is-open');
        event.currentTarget.nextElementSibling?.classList.add(
          'accordion__content--is-open',
        );
      }
      setIsOpen(!isOpen);
    },
    [isOpen],
  );

  return (
    <div className="accordion">
      <section className="accordion__inner">
        {categories.map((category: ICategory) => (
          <div className="accordion__item" key={category.id}>
            <button
              type="button"
              onClick={handleShowAccordion}
              className="accordion__button"
            >
              <div className="accordion__icon">
                <i className="fa-solid fa-mug-saucer" />
              </div>
              <div className="accordion__title">{category.name}</div>
            </button>
            <div className="accordion__content">
              {products.map(
                (product: IProduct) =>
                  category.id === product.category.id && (
                    <p className="product" key={product.id}>
                      <span className="product__title">{product.name}</span>
                      <span className="product__price">
                        {formatCurrency.format(product.price)}
                      </span>
                    </p>
                  ),
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Accordion;
