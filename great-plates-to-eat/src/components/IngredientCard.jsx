import React from 'react';

const IngredientCard = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.Name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.amount}</h6>
        <p className="card-text">{props.desc}</p>
        <p className="card-text">{props.location}</p>
      </div>
    </div>
  );
};
export default IngredientCard;
