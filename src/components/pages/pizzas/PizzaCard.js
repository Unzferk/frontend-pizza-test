import React from 'react';

//show a pizza info as a card
export const PizzaCard = ({_id,name,toppings=[]}) => {
  return (
    <>
        <div key={_id} className="card w-50">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{toppings}</p>
            <a href="#" className="btn btn-warning">Edit</a>
            <a href="#" className="btn btn-danger">Delete</a>
          </div>
        </div>
    </>
  );
};
