import React from "react";
import { Modal, Button } from "react-bootstrap";

const ProductDetailModal = ({ show, handleClose, product, addToCart }) => {
  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="text-center mb-3">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded"
            style={{ maxHeight: "250px", border: "1px solid #ddd" }}
          />
        </div>
        <div className="d-flex flex-row align-items-center justify-content-between gap-2">
          <div className="col-6">
            <h3 className="w-100 fw-bold">{product.name}</h3>
            <p className="mb-1">
              <strong>Price:</strong> ₹{product.price}
            </p>
            <p className="mb-1">
              <strong>Quantity Remaining:</strong> {product.quantity}
            </p>
          </div>
          <Button
            className="col btn btn-primary rounded-3 w-100"
            onClick={handleAddToCart}
            disabled={product.quantity === 0}
          >
            Add to Cart
          </Button>
        </div>
        <div className="card-body">
          <h5 className="mt-4 card-title fw-bold">Product Information:</h5>
          <p className="card-text">
            {product.description || "No description available."}
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProductDetailModal;
