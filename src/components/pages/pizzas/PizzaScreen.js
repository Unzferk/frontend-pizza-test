import React from 'react';
import { useEffect, useState } from "react";
import { PizzaAddForm } from './PizzaAddForm';
import axios from 'axios';
import { Link } from 'react-router-dom';



export const PizzaScreen = () => {
  const urlPizzas = "http://localhost:4000/api/pizzas";
  const urlToppings = "http://localhost:4000/api/toppings";

  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    onGetPizzas()
  }, []);

  const onGetPizzas = async () => {
    const resp = await axios.get(urlPizzas);
    if (resp.status === 200) {
      setPizzas(resp.data.pizzas)
    }
  }

  const onDeletePizzaDB = async (id) => {
    if (window.confirm("Do you really want to delete the item?")) {
      const resp = await axios.delete(`${urlPizzas}/${id}`);
      if (resp.status === 200) {
        window.alert("Item has been deleted");
        onGetPizzas();
      }
    }
  }
  return (
    <>
      <div className='container mt-3'>

        <div className='row'>
          <PizzaAddForm onGetPizzas={onGetPizzas}/>
        </div>

        <div className='row d-flex row-cols-auto'>
          <table className="table table-sm table-hover col-8 ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Pizza Toppings</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>

              {pizzas && pizzas.map((pizza, i) => {
                return (
                  <tr key={pizza._id}>
                    <th scope="row" >{i}</th>
                    <td >{pizza.name}</td>
                    <td >
                      <ul>
                        {pizza.toppings && 
                        pizza.toppings.map(topp=>(<li key={topp._id}>{topp.name}</li>))}
                      </ul>
                    </td>
                    <td>
                      <Link to={`/pizzas/toppings/${pizza._id}`} ><button className='btn btn-info mx-1'>Edit</button> </Link>
                      
                      <button className='btn btn-danger mx-1' onClick={() => onDeletePizzaDB(pizza._id)}>Delete</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        
      </div>
    </>
  );
};