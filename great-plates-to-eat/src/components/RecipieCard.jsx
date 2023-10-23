import React from 'react';

const RecipieCard = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.Name}</h5>
        <p className="card-text">{props.desc}</p>
        <p className="card-text">{props.ingredientsList}</p>
      </div>
    </div>
  );
};
export default RecipieCard;
