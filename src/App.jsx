import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/home';
import Real_Estate from './pages/Real-Estate';
import Design from './pages/Design';
import Products from './pages/Products';
import Interview from './pages/Interview';
import Contacts from './pages/Contacts';
import Luxury from './pages/Luxure_life';
import AboutUs from './pages/AboutUs';
import Hotel from './pages/Hotel';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';


function App() {

  return (
    <>
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/estate' element={<Real_Estate />} />
          <Route path='/design' element={<Design />} />
          <Route path='/products' element={<Products />} />
          <Route path='/interview' element={<Interview />} />
          <Route path='/contact' element={<Contacts />} />
          <Route path='/Luxury_life' element={<Luxury/>} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/Luxury_life/hotel" element={<Hotel/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
