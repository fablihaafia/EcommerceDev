import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import ProductList from './components/products/product-list/ProductList';

function App() {
  return (
    <div className="App">
      <h2 className="text-center">Afia Ecommerce Store</h2>
      {/* Header */}
      {/* Product */}
      <ProductList />
      
      {/* Footer */}
    </div>
  );
}

export default App;
