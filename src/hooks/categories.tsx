import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import api from '../services/api';
import { useLoading } from './loading';

export interface ICategory {
  id: string;
  name: string;
  icon: string;
}

interface ICategoryProviderProps {
  children: ReactNode;
}

const CategoryContext = createContext<ICategory[]>([]);

export const CategoryProvider: FC<ICategoryProviderProps> = ({
  children,
}: ICategoryProviderProps) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const { handleLoading } = useLoading();

  useEffect(() => {
    async function getCategories() {
      const response = await api.get('/categorias');

      setCategories(response.data.data);

      handleLoading(false);
    }

    getCategories();
  }, [handleLoading]);

  return (
    <CategoryContext.Provider value={categories}>
      {children}
    </CategoryContext.Provider>
  );
};

export function useCategories(): ICategory[] {
  const ctx = useContext(CategoryContext);

  return ctx;
}
