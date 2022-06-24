import { FC, ReactNode } from 'react';
import { CategoryProvide } from './categories';
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
      <CategoryProvide>
        <ProductProvide>{children}</ProductProvide>
      </CategoryProvide>
    </LoadingProvider>
  );
};

export default AppProvider;
