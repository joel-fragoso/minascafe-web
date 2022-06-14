import { FC } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

const App: FC = () => {
  return (
    <div className="app">
      <Header />
      <Main />
      Olá, Mundo!
    </div>
  );
};

export default App;
