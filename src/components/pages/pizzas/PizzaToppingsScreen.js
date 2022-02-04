import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const PizzaToppingsScreen = () => {

  const urlPizzas = "http://localhost:4000/api/pizzas";
  const urlToppings = "http://localhost:4000/api/toppings";
  const { pid } = useParams();

  const [pizza, setPizza] = useState([]);
  const [toppings, setToppings] = useState([]);

  useEffect(() => {
    console.log("id pizza its: " + pid);
    onGetPizza();
    onGetToppings();
    //console.log(pizza);
  }, [pid]);



  const onGetPizza = async () => {
    const resp = await axios.get(`${urlPizzas}/${pid}`);
    if (resp.status === 200) {
      setPizza(resp.data.pizzas)
      console.log(resp.data.pizzas);
    }
  }
  const onGetToppings = async () => {
    const resp = await axios.get(urlToppings);
    if (resp.status === 200) {
      const aux = resp.data.data;
      setToppings(aux)
    }
  }

  const onAddTopping = async (idPizza, idTopping) => {
    const resp = await axios.put(`${urlPizzas}/toppings/${idPizza}/${idTopping}`);
    if (resp.status === 200) {
      onGetPizza();
    }
  }
  const onDeleteTopping = async (idPizza, idTopping) => {
    const resp = await axios.delete(`${urlPizzas}/toppings/${idPizza}/${idTopping}`);
    if (resp.status === 200) {
      onGetPizza();
    }
  }

  return (
    <>

      <div className='container '>


        <div className='row'>
          <h1 className='mt-2 ml-2 aling-item-center justify-item-center'>{pizza.name}</h1>
          <hr />
        </div>


        <div className='row d-flex'>
          <div className='col-6'>
            <div className="card" >
              <div className="card-header">
                Your Actual Toppings
              </div>
              <ul className="list-group list-group-flush">

                {pizza.toppings && pizza.toppings.map(topp =>
                (
                  <li key={topp._id} className="list-group-item d-flex">
                    <div className='col-4'>
                      {topp.name}
                    </div>
                    <div className='col-4'>
                      <button className='btn btn-danger' onClick={() => onDeleteTopping(pid, topp._id)}>
                        Delete
                      </button>
                    </div>
                  </li>
                )
                )}

              </ul>
            </div>
          </div>


          <div className='col-6'>
            <div className="card" >
              <div className="card-header">
                You can also ADD MORE!
              </div>
              <ul className="list-group list-group-flush">

                {toppings && toppings.map(topp => (
                  <li key={topp._id} className="list-group-item d-flex">
                    <div className='col-5'>
                      {topp.name}
                    </div>
                    <div className='col-5'>
                      <button className='btn btn-info' onClick={() => onAddTopping(pid, topp._id)}>
                        Add
                      </button>
                    </div>

                  </li>
                ))}

              </ul>
            </div>
          </div>

        </div>






      </div>

    </>
  )
};
