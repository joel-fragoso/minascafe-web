import { FC, ReactNode } from 'react';
import { CategoryProvider } from './categories';
import { LoadingProvider } from './loading';
import { ProductProvide } from './products';

interface IAppProviderProps {
  children: ReactNode;
}

const AppProvider: FC<IAppProviderProps> = ({
  children,
}: IAppProviderProps) => {
  return (
    <LoadingProvider>
      <CategoryProvider>
        <ProductProvide>{children}</ProductProvide>
      </CategoryProvider>
    </LoadingProvider>
  );
};

export default AppProvider;
