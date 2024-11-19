import React from 'react';
import '../styles/ProductCard.css'
const ProductCard = ({ product, isInCart, onAdd, onRemove }) => (
  <div className="col mb-5">
    <div className="card h-100">
      <img className="card-img-top" src={product.img} alt={product.name} />
      <div className="card-body p-4">
        <div className="text-center">
          <h5 className="fw-bolder">{product.name}</h5>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      </div>
      <div className="card-footer p-4 bg-transparent text-center">
        <button
          className={`btn ${isInCart ? 'btn-danger' : 'btn-outline-dark'}`}
          onClick={() => (isInCart ? onRemove(product.id) : onAdd(product.id))}
        >
          {isInCart ? 'Remove from Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  </div>
);

export default ProductCard;
