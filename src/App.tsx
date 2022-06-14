import { FC } from 'react';
import Header from './components/Header';
import './App.css';

const App: FC = () => {
  return (
    <div className="app">
      <Header />
      Olá, Mundo!
    </div>
  );
};

export default App;
