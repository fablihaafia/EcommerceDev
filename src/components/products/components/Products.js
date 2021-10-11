import axios from "axios";
import React from "react";

const Products = ({ product, onReloadProduct }) => {
  const getDiscountPrice = (discountValue, price) => {
    return ((100 - discountValue) / 100) * price;
  };
  const deleteProduct = (id) => {
    // axios.delete("https://laravel-crud-api.devsenv.com/api/products")
    // .then((res) =>{
    //   console.log("responses :>> ", res);

    // })
    axios({
      url: `https://laravel-crud-api.devsenv.com/api/products/${id}`,
      method: "delete",
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sYXJhdmVsLWNydWQtYXBpLmRldnNlbnYuY29tXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjMzNTM3MDYyLCJleHAiOjE2MzYxMjkwNjIsIm5iZiI6MTYzMzUzNzA2MiwianRpIjoiSkg4OHBhNE5YTnpka2hVQiIsInN1YiI6MSwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.A94AiXh1GlA2Ko5L7hcUZ9_I2PrKnNjO6lt15HFCPrw`,
      },
    });

    alert("deleted");
    
    //
    onReloadProduct();
  };
  return (
    <>
      <div className="col-md-3 mb-5">
        <div className="card card-body">
          <img src={product.image_url} className="img img-fluid" alt="" />
          <h2>{product.title}</h2>
          <h3>{product.price} BDT</h3>
          <p>{parseInt(getDiscountPrice(10, product.price))}%</p>
        </div>
        <button
          onClick={() => deleteProduct(product.id)}
          className="btn btn-danger mt-3"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Products;
