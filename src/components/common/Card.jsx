import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card(props) {
  const { image, title, description, price, onClick, cta, icon } = props;

  return (
    <div className="card">
      <img className="card-image" src={image} alt={title} />
      <div className="card-content">
        <div className="card-header">
          <h3>{title}</h3>
          <p className="price">{price}</p>
        </div>
        <p>{description}</p>
      </div>

      <div className="card-footer">
        <button className="btn-text" onClick={onClick}>
          {cta}
        </button>
        <FontAwesomeIcon icon={icon} />
      </div>
    </div>
  );
}
