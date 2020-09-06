import React from "react";
import "./Card.scss";
import Button from "../Button";

const Card = ({ imgLink, title, body, footer, onClick }) => {
  return (
    <div className="card">
      <figure className="card-figure">
        <img src={imgLink} alt={title} />
      </figure>
      <div className="card-body">
        <h2>{body}</h2>
      </div>
      <Button onClick={onClick}>Add to Cart</Button>
      <div className="card-footer">
        <p>By: {footer}</p>
      </div>
    </div>
  );
};

const CartCard = ({ imgLink, title, body, footer, onClick, unit, price }) => {
  return (
    <div className="card">
      <figure className="card-figure">
        <img src={imgLink} alt={title} />
      </figure>
      <div className="card-body">
        <h2>{body}</h2>
      </div>
      <Button onClick={onClick}>Remove</Button>
      <div className="card-footer">
        <p>Unit: {unit}</p>
        <p>Price: $ {price}</p>
        <p>By: {footer}</p>
      </div>
    </div>
  );
};

const LecturerCard = ({ imgLink, title, body, footer }) => {
  return (
    <div className="card">
      <figure>
        <img src={imgLink} alt={title} />
      </figure>
      <div className="card-body">
        <h2>{body}</h2>
      </div>
      <div className="card-footer">
        <p>{footer}</p>
      </div>
    </div>
  );
};
const FaqCard = () => {
  return (
    <div className="card">
      <div className="card-header">Question?</div>
      <div className="card-body card-body_faq">
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          hendrerit hendrerit purus eget lacinia. Aenean laoreet iaculis luctus.
          Quisque sagittis.
        </h2>
      </div>
    </div>
  );
};

export { Card, LecturerCard, FaqCard, CartCard };
