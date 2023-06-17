import React from "react";
import Card from "../component/Card";
import { Link } from "react-router-dom";




const Productos = () => {



        

  return (
    <div>
      <h1>Productos</h1>

      <div className="card-container">

        <Link to={"/detalleProducto"}>
          <Card />
        </Link>

      </div>
    </div>
 );





};


export default Productos;
