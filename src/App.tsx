import { FC } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Home from './pages/Home';
import AppProvider from './hooks';
import './App.css';

library.add(fas, fab);

const App: FC = () => {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
};

export default App;
