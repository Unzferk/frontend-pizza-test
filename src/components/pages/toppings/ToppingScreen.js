import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToppingAddForm } from './ToppingAddForm';


export const ToppingScreen = () => {

  const urlToppings = "http://localhost:4000/api/toppings";

  const [toppings, setToppings] = useState([]);

  useEffect(() => {
    onGetToppings()
  }, []);

  const onGetToppings = async () => {
    const resp = await axios.get(urlToppings);
    if (resp.status === 200) {
      setToppings(resp.data.data)
    }
  }

  const onDeleteToppingDB = async (id) => {
    if (window.confirm("Do you really want to delete the item?")) {
      const resp = await axios.delete(`${urlToppings}/${id}`);
      if (resp.status === 200) {
        window.alert("Item has been deleted");
        onGetToppings();
      }
    }
  }

  const onUpdateToppingDB = async (id) =>{
    const update = window.prompt("Which will be the new name for this item?","");
    if(update){
      const resp = await axios.put(`${urlToppings}/${id}`,{name:update});
      if(resp.status===200) window.alert("It was modified successfully");
      onGetToppings();
    }
  }
  

  return (
    <>
      <div className='container'>
        <div className='row'>
          <ToppingAddForm onGetToppings={onGetToppings}/>
        </div>
        <div className='row d-flex align-self-center'>
          <div className='col-2'></div>
          <table className="table table-sm table-hover col-8 ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>

              {toppings && toppings.map((topp, i) => {
                return (
                  <tr key={topp._id}>
                    <th scope="row" >{i}</th>
                    <td >{topp.name}</td>
                    <td>
                      <button className='btn btn-info mx-1' onClick={() => onUpdateToppingDB(topp._id)} >Edit</button>
                      <button className='btn btn-danger mx-1' onClick={() => onDeleteToppingDB(topp._id)}>Delete</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <div className='col-2'></div>
        </div>

      </div>
    </>
  )
};
