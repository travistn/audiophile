import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './containers/Home/Home';
import Headphones from './containers/Headphones/Headphones';
import Speakers from './containers/Speakers/Speakers';
import Earphones from './containers/Earphones/Earphones';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/headphones' element={<Headphones />} />
        <Route path='/speakers' element={<Speakers />} />
        <Route path='/earphones' element={<Earphones />} />
      </Routes>
    </>
  );
};

export default App;
