import React from "react";
import "./Card.scss";
import Button from "../Button";

const Card = ({ imgLink, title, body, footer, onClick }) => {
  return (
    <div className="card">
      <figure>
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
const FaqCard = ({ imgLink, title, body, footer }) => {
  return (
    <div className="card">
      <figure>
        <img src={imgLink} alt={title} />
      </figure>
      <div className="card-body">
        <h2>{body}</h2>
        <Button>Add Course to Cart</Button>
      </div>
      <div className="card-footer">
        <p>{footer}</p>
      </div>
    </div>
  );
};

export { Card, LecturerCard, FaqCard };
