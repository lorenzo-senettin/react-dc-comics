
import React from 'react';

const ComicsCard = ({ title, image, description }) => {
  return (
    <div className="comics-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      { description && <p>{description}</p> }
    </div>
  );
};

export default ComicsCard;