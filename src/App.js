import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './containers/Home/Home';
import Headphones from './containers/Headphones/Headphones';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/headphones' element={<Headphones />} />
      </Routes>
    </>
  );
};

export default App;
