import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <div className="products">
          <ProductList />
        </div>
        <div className="cart">
          <Cart />
        </div>
      </div>
    </Provider>
  );
}

export default App;
