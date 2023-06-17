import React from 'react'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Link } from 'react-router-dom';

const CardWidget = () => {
  return (
  <>
    <Link to="/carrito"><button id="boton-carrito" >

          <LocalGroceryStoreIcon/>
          <span className='contador-carrito'>0</span>
    
    </button>
    </Link>
    </>
  )
}


export default CardWidget