import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import { AppContext } from './contexts/AppContext';
import Home from './containers/Home/Home';
import Headphones from './containers/Headphones/Headphones';
import Speakers from './containers/Speakers/Speakers';
import Earphones from './containers/Earphones/Earphones';
import Product from './containers/Product/Product';
import Checkout from './containers/Checkout/Checkout';
import ScrollToTop from './utils/ScrollToTop';

const App = () => {
  const [cart, setCart] = useState();

  const contextValues = { cart, setCart };

  return (
    <AppContext.Provider value={contextValues}>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/headphones' element={<Headphones />} />
          <Route path='/speakers' element={<Speakers />} />
          <Route path='/earphones' element={<Earphones />} />
          <Route path={`/product/:slug`} element={<Product />} />
          <Route path={'/checkout'} element={<Checkout />} />
        </Routes>
      </ScrollToTop>
    </AppContext.Provider>
  );
};

export default App;
