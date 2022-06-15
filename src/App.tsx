import { FC } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Banner from './components/Banner';
import './App.css';

const App: FC = () => {
  return (
    <div className="app">
      <Banner />
      <Header />
      <Main />
      Olá, Mundo!
    </div>
  );
};

export default App;
