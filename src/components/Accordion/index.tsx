import React, { FC, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import formatCurrency from '../../utils/formatCurrency';
import Loading from '../Loading';
import { useLoading } from '../../hooks/loading';
import { ICategory, useCategories } from '../../hooks/categories';
import { IProduct, useProducts } from '../../hooks/products';
import './styles.css';

const Accordion: FC = () => {
  const { loading } = useLoading();
  const categories = useCategories();
  const products = useProducts();

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

  if (loading) {
    return <Loading />;
  }

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
                    <FontAwesomeIcon
                      icon={{
                        prefix: 'fas',
                        iconName: category.icon as IconName,
                      }}
                    />
                  </div>
                )}
                {category.name}
              </div>
              <FontAwesomeIcon
                className="button__icon"
                icon={{ prefix: 'fas', iconName: 'plus' }}
              />
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
