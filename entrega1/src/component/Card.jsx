import React from "react";

import { useContext } from "react";
import { dataContext } from "../component/Context/DataContext";


import "./card.css";

import { Link } from "react-router-dom";

const Card = () => {
  const { data } = useContext(dataContext);
  return data.map((product) => {
    return (
      <div className="card" key={product.id}>

      <Link to={`detalle/${product.id}`}>

          <img src={product.img} alt="img-productos-card" />
          <h3>{product.nombre}</h3>
          <p>{product.desc}</p>
          <h4>{product.precio}</h4>
          <button>buy</button>
     
      </Link>

      </div>
      
    );
  });
};

export default Card;
