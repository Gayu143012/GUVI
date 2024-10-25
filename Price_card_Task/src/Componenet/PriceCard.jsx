import React from 'react';

const PriceCard = ({ plan, price, features }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card shadow">
        <div className="card-body">
          <h5 className="card-title text-uppercase text-center">{plan}</h5>
          <h6 className="card-price text-center">{price}<span className="period">/month</span></h6>
          <hr />
          <ul className="fa-ul mb-4">
            {features.map((feature, index) => (
              <li key={index} className={!feature.isEnabled ? 'text-muted' : ''}>
                <span className="fa-li">
                  <i className={feature.isEnabled ? 'fas fa-check' : 'fas fa-times'}></i>
                </span>
                {feature.name}
              </li>
            ))}
          </ul>
          <a href="#" className="btn btn-block btn-primary text-uppercase">Button</a>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
