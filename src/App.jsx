import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/home';
import Real_Estate from './pages/Real-Estate';
import Design from './pages/Design';
import Products from './pages/Products';
import Interview from './pages/Interview';
import Contacts from './pages/Contacts';


function App() {

  return (
   <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='недвижимость' element={<Real_Estate/>}/>
        <Route path='дизайн' element={<Design/>}/>
        <Route path='продукты' element={<Products/>}/>
        <Route path='интервью' element={<Interview/>}/>
        <Route path='контакты' element={<Contacts/>}/>
      </Routes>
    </Router>
   </>
  )
}

export default App
