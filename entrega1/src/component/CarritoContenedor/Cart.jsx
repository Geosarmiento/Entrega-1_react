import React from 'react'
import './carrito.css'

import CartElements from './CartElements'



const Carrito = () => {
  return (
    <div className='container-carrito'>
      
      <div className='carrito'>
            <p>Productos añaditos a tu carrito</p>
            <div>
            <CartElements/>
            </div>

      </div>
      
      
      </div>
  );
}

export default Carrito;