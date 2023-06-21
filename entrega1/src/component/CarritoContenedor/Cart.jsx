import React from 'react'
import './carrito.css'

import CartElements from './CartElements'
import CartTotal from './CartTotal';


import { useContext } from "react";
import { dataContext } from "../../component/Context/DataContext";



const Carrito = () => {
  const {cart} = useContext(dataContext);

  //operador ternario
  // condicion ? "" : "" 

  return cart.length > 0 ? (
    <div className='container-carrito'>
      
      <div className='carrito'>
            <p>Productos añaditos a tu carrito</p>
            <div>

            <CartElements/>

            <CartTotal/>

            </div>

      </div>
      
      
      </div>
  ): (<h2> no productos en el carrito</h2>);
}

export default Carrito;