import React from 'react'


import { useContext } from "react";
import { dataContext } from "../../component/Context/DataContext";


const CartTotal = () => {
    const {cart} = useContext(dataContext);


    const total = cart.reduce((acululador, elementos)=> acululador + elementos.precio, 0);


  return (
    <div><h3> total a pagar {total}</h3></div>
  )
}

export default CartTotal