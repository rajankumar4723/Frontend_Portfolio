import React from 'react';
import "../styles/Card.css"
const Card = ({ title, description, image, link }) => { 
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer"></a>
    </div>
  );
};

export default Card;