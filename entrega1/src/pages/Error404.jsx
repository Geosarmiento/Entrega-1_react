import React, { useEffect } from 'react'
import {Navigate, useNavigate} from "react-router-dom"



const Error404 = () => {
    const navigate = useNavigate();

   // useEffect(() => {
    //  setInterval(()=> {
      //  navigate("/");
     // }, 3000)
   // },[navigate]);


  return (
    <div><h1>Error 404</h1>
        <button onClick={() => navigate("/")}>
          <p>Volver a la pagina principal</p>
        </button>
    </div>
  )
}

export default Error404