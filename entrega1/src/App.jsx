import './App.css'
import ItemListContainer from './component/ItemListContainer'
import NavBar from './component/NavBar'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import DataProvider from './component/Context/DataContext';

import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Error404 from './pages/Error404';
import Carrito from './component/CarritoContenedor/Cart';
import Productos from './pages/Productos';
import Detalles from './pages/Detalles';

function App() {
  
  return (
    <DataProvider>
      <Router>    
        <NavBar/>

            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/productos" element={<Productos/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/carrito" element={<Carrito/>}/>
              <Route path="*" element={<Error404/>}/>
              <Route path="/detalles/:id" element={<Detalles/>}/>
            </Routes>

      
            <ItemListContainer greeting="esta es la propt"/>
      
      </Router>
    </DataProvider>
  )
}

export default App
