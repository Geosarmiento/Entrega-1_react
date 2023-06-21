import React from "react";

import { useContext } from "react";
import { dataContext } from "../../component/Context/DataContext";



const CartElements = () => {

  const { cart } = useContext(dataContext);
  
  return cart.map((product) => {
    return (

      <div className="cart-content" key={product.id}>
        <img src={product.img} alt="img-productos-card" />
        <h3>{product.nombre}</h3>
        <h4>{product.precio}</h4>
      </div>
    );
  });
};

export default CartElements;
