import React from 'react';
import { useEffect, useState } from "react";
import { PizzaCard } from './PizzaCard';


export const PizzaScreen = () => {

  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/pizzas")
      .then(response => response.json())
      .then(data => {
        if (data) {
          console.log(data.pizzas);
          setPost(data.pizzas);
        }
      });
  }, []);

  return (
    <>
      <div className='container mt-3'>

        <div className='row '>
          <form className="row g-3 d-flex justify-content-end">
            <div className="col-auto">
              <input type="text" className="form-control-plaintext" id="name" value="" placeholder='Name' />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-3">Create</button>
            </div>
          </form>
        </div>

        <div className='row d-flex row-cols-auto'>
          {post && post.map(e => (<PizzaCard key={e.id} name={e.name} toppings={e.toppings}/> ))}
        </div>
        
      </div>
    </>
  );
};