import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './containers/Home/Home';
import Headphones from './containers/Headphones/Headphones';
import Speakers from './containers/Speakers/Speakers';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/headphones' element={<Headphones />} />
        <Route path='/speakers' element={<Speakers />} />
      </Routes>
    </>
  );
};

export default App;
