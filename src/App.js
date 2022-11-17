import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './App.css';
import Home from './containers/Home/Home';
import Headphones from './containers/Headphones/Headphones';
import Speakers from './containers/Speakers/Speakers';
import Earphones from './containers/Earphones/Earphones';
import Product from './containers/Product/Product';
import Checkout from './containers/Checkout/Checkout';
import ScrollToTop from './utils/ScrollToTop';
import { store } from './redux/store';
import { persistor } from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
};

export default App;
