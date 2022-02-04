import React from 'react';

export const PizzaScreen = () => {
  return (
    <h1>PIZZA SCREEN</h1>  
  )
};
/*
import { useEffect, useState } from "react";
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/pizzas")
    .then(response => response.json())
    .then(data =>{
      if(data){
        console.log(data.pizzas);
        setPost(data.pizzas);
      }
    });
  }, []);
  

  return (
    <>
      <h1>Hi world</h1>
      <hr></hr>
      <ul>
        {post && post.map( e=>(<li key={e._id}> {e.name}</li>))}
      </ul>
      
    </>
  );

*/