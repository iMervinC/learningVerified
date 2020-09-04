import React from "react";
import "./Card.scss";

const Card = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h1>Header</h1>
      </div>
      <div className="card-body">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, velit
          esse qui temporibus rem perferendis molestiae! Praesentium corporis
          quia vel perferendis.
        </p>
        <a href="/" className="btn">
          Read more
        </a>
      </div>
    </div>
  );
};

export default Card;
