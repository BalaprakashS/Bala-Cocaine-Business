import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductList.css";

const ProductList = ({ products, addToCart, onProductClick }) => {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 hover">
      {products.map((product) => (
        <div key={product.id} className="col">
          <div className="card h-100 rounded-4 shadow-sm">
            <img
              src={product.image}
              className="card-img-top rounded-top-4 product-image"
              alt={product.name}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title fw-bold">{product.name}</h5>
              <p className="card-text">
                <strong>Price:</strong> ₹{product.price}
              </p>
              <p className="card-text">
                <strong>Quantity:</strong> {product.quantity}
              </p>
              <div className="mt-auto">
                <div className="d-flex flex-row align-items-center gap-2">
                  <button
                    className="btn btn-outline-secondary rounded-3 w-100"
                    onClick={() => onProductClick(product)}
                  >
                    View details
                  </button>
                  <button
                    className="btn btn-primary rounded-3 w-100"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                    }}
                    disabled={product.quantity === 0}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
