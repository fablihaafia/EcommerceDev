import axios from "axios";
import React, { useState } from "react";
const ProductCreate = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const submitProduct = (e) => {
    e.preventDefault();
    const product = {
      title: title,
      price: price,
      description: description,
    };
    console.log(`product`, product);

    axios
      .post("https://laravel-crud-api.devsenv.com/api/products/526", product, {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sYXJhdmVsLWNydWQtYXBpLmRldnNlbnYuY29tXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjMzNTM3MDYyLCJleHAiOjE2MzYxMjkwNjIsIm5iZiI6MTYzMzUzNzA2MiwianRpIjoiSkg4OHBhNE5YTnpka2hVQiIsInN1YiI6MSwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.A94AiXh1GlA2Ko5L7hcUZ9_I2PrKnNjO6lt15HFCPrw`,
        },
      })

      .then((res) => {
        console.log("responses :>> ", res.data.status);
        if (res.data.status) {
          alert("product created");
          props.onReloadProduct();
        }

        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  return (
    <>
      <div className="container">
        <div className="card p-5 my-3">
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
            <div className="form-group my-2">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                className="form-control"
                id="price"
                placeholder="Price"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                id="description"
                placeholder="Description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>

            <button
              onClick={submitProduct}
              type="submit"
              className="btn btn-primary mt-3"
            >
              Submit
            </button>
          </form>
        </div>
      </div>


    </>
  );
};

export default ProductCreate;
