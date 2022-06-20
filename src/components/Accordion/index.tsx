import React, { FC, useCallback, useEffect, useState } from 'react';
import * as FontAwesome from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import api from '../../services/api';
import formatCurrency from '../../utils/formatCurrency';
import './styles.css';

interface IFontAwesomeProps {
  iconName: string;
}

const Icon = ({ iconName }: IFontAwesomeProps) => {
  const icon = React.createElement(
    FontAwesome[iconName as keyof typeof FontAwesome],
  );
  return icon;
};

interface ICategory {
  id: string;
  name: string;
  icon: string;
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
      event.currentTarget
        .querySelector('.button__icon')
        ?.classList.toggle('button__icon--is-open');
      const content = event.currentTarget.nextElementSibling as HTMLElement;

      if (content.style.maxHeight) {
        content.style.maxHeight = '';
      } else {
        content.style.maxHeight = `${content.scrollHeight}px`;
      }
    },
    [],
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
              <div className="accordion__title">
                {category.icon && (
                  <div className="accordion__icon">
                    <Icon iconName={category.icon} />
                  </div>
                )}
                {category.name}
              </div>
              <FaPlus className="button__icon" />
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
