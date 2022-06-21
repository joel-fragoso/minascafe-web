import { FC } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Home from './pages/Home';
import './App.css';

library.add(fas);
library.add(fab);

const App: FC = () => {
  return <Home />;
};

export default App;
