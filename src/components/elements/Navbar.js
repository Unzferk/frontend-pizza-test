import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <div className="container-fluid ">
      
        <Link className="navbar-brand h5 mx-auto mt-2 mr-2" to="/pizzas"><i class="bi bi-slash-circle"></i></Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link h5 mx-auto mt-2 " to="/pizzas">Pizzas</Link>
            </li>
            <li className= "nav-item">
              <Link className="nav-link h5 mx-auto mt-2 " to="/toppings">Toppings</Link>
            </li>  
          </ul>

        </div>
      </div>
    </nav>
    

  );
};
