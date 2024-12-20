import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Acasa from './Acasa';
import AsistentaRutiera from './AsistentaRutiera';
import Contact from './contact';
import Tarife from './tarife';

function App() {

  return(
    <Router>
      <Routes>
        <Route path='/' element={<Acasa/>}></Route>
        <Route path='/acasa' element={<Acasa/>}></Route>
        <Route path='/asistenta-rutiera' element={<AsistentaRutiera/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/tarife' element={<Tarife/>}></Route>
      </Routes>
    </Router>
  )

}

export default App;