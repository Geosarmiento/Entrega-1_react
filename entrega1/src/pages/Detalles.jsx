import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';






const Detalles = () => {
  const [detalle, setDetalle] = useState({});

  let {id} = useParams();

  console.log(detalle)

  useEffect(() => {
    axios("data.json$(id)").then((res) => setDetalle(res.data));
  }, [id]);

  return (
    <div >
      <h1>Page detalle</h1>
          
        </div>
    );
  
};

export default Detalles