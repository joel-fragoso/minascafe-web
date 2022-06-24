import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import api from '../services/api';
import { ICategory } from './categories';
import { useLoading } from './loading';

export interface IProduct {
  id: string;
  name: string;
  price: number;
  category: ICategory;
}

interface IProductProviderProps {
  children: ReactNode;
}

const ProductContext = createContext<IProduct[]>([]);

export const ProductProvide: FC<IProductProviderProps> = ({
  children,
}: IProductProviderProps) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const { handleLoading } = useLoading();

  useEffect(() => {
    async function getProducts() {
      const response = await api.get('/produtos');

      setProducts(response.data.data);

      handleLoading(false);
    }

    getProducts();
  }, [handleLoading]);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

export function useProducts(): IProduct[] {
  const ctx = useContext(ProductContext);

  return ctx;
}
