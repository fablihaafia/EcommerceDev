import axios from "axios";
import React, { useEffect, useState } from "react";
import MainForm from "../components/form/MainForm";

import ProductCreate from "../components/product-create/ProductCreate";
import Products from "../components/Products";

const ProductList = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    setLoading(true);
    axios
      .get("http://laravel-crud-api.devsenv.com/api/products/view/all?page=1")
      .then((res) => {
        setProducts(res.data.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  return (
    <>
      <MainForm />
      <ProductCreate onReloadProduct={getProducts} />
      <div className="container">
        <div className="row">
          {loading && <div className="text-center">Loading Products...</div>}

          {products.map((product, index) => (
            <Products
              onReloadProduct={getProducts}
              product={product}
              index={index}
              key={index}
            />
          ))}

          {products.length === 0 && !loading && (
            <div className="alert alert-danger p-5 mt-5">
              Sorry, No Products available...
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductList;
