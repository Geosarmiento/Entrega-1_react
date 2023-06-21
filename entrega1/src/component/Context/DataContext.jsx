import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const [cart, setCart] = useState([]);


  // funcion limpiar carrito
  const clearCart = () => ([]); 



  // funicion para saber si hay productos en el carrito
  const isInCart = (id) => { 
      return cart.find(product => product.id === id) ? true : false; 
        }


  // funcion para elimina productis de carrito
   const removeProduct = (id) => setCart(cart.filter(product => product.id !== id))  



// funcion para obtener productos del json
  useEffect(() => {
    axios("data.json").then((res) => setData(res.data)); 
  }, []);



  return (
    <>
      <dataContext.Provider value={{ data, cart, setCart, clearCart, isInCart, removeProduct }}>
        
        {children}
        
      </dataContext.Provider>

    </>
  );
};

export default DataProvider;
