import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { Navbar } from '../components/elements/Navbar';
import {PizzaScreen} from '../components/pages/pizzas/PizzaScreen';
import {ToppingScreen} from '../components/pages/toppings/ToppingScreen';

export const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/pizzas" element={<PizzaScreen />}/>
        <Route path="/toppings" element={<ToppingScreen />}/>
        <Route path="*" element={<Navigate to ="/toppings" />}/>
      </Routes>
    </Router>
  )
};
