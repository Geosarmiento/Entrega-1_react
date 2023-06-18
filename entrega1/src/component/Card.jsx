import React from "react";

import { useContext } from "react";
import { dataContext } from "../component/Context/DataContext";



import "./card.css";

import { Link } from "react-router-dom";

const Card = () => {
  const { data , cart, setCart} = useContext(dataContext);


  const buyProduct = (product) => {
    console.log(product)
    setCart([...cart, product])
  }

  return data.map((product) => {
    return (

      
      <div className="card" key={product.id}>

      <Link to={`detalles/${product.id}`}>

          <img src={product.img} alt="img-productos-card" />
          <h3>{product.nombre}</h3>
          <p>{product.desc}</p>
          <h4>{product.precio}</h4>
      </Link>

          <button onClick={()=> buyProduct (product)}>buy</button>
     
     
      </div>
      
    );
  });
};

export default Card;
