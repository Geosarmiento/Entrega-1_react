import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Card from "../component/Card";






const Detalles = () => {
  const [detalle, setDetalle] = useState({});

  let {id} = useParams();


  useEffect(() => {
    axios(`data.json${id}`).then((res) => setDetalle(res.data));
  }, [id]);

  return (
      <div >
        {detalle.id ?  <Card detalle={detalle}/>  : null }
      </div>
    );
  
};

export default Detalles;