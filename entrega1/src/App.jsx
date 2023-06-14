import './App.css'
import ItemListContainer from './component/ItemListContainer'
import NavBar from './component/NavBar'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Error404 from './pages/Error404';

function App() {
  
  return (
    <Router>    
       <NavBar/>

          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="*" element={<Error404/>}/>
          </Routes>

    
           <ItemListContainer greeting="esta es la propt"/>
    
    </Router>

  )
}

export default App
