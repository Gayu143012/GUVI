import React from 'react';

const Navbar = ({ cartCount }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container px-4 px-lg-5">
      <a className="navbar-brand" href="#">Womens Clothing</a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item">
            <button className="btn btn-outline-dark ms-4 position-relative">
              <i className="fas fa-shopping-cart"></i> Cart
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                </span>
              )}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
