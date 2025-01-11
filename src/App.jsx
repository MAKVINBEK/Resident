import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Real_Estate from './pages/Real-Estate';
import Design from './pages/Discount';
import Products from './pages/Products';
import Interview from './pages/Interview';
import Contacts from './pages/Contacts';
import Luxury from './pages/Luxure_life';
import AboutUs from './pages/AboutUs';
import Hotel from './pages/Hotel';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import Home from './pages/Home';
import Discount from './pages/Discount';
import UsefulTips from './component/UsefulTips';
import Testy from './component/Testy';


function App() {

  return (
    <>
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/nedvizhimost' element={<Real_Estate />} />
          <Route path='/discount' element={<Discount/>} />
          <Route path='/products' element={<Products />} />
          <Route path='/intervju' element={<Interview />} />
          <Route path='/contact' element={<Contacts />} />
          <Route path='/luxury-life' element={<Luxury/>} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/luxury-life/otel" element={<Hotel/>} />
          <Route path="/poleznye-sovety" element={<UsefulTips/>} />
          <Route path="/testy" element={<Testy/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
