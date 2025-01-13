import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Real_Estate from './pages/Real-Estate';
import Interview from './pages/Interview';
import Contacts from './pages/Contacts';
import Luxury from './pages/Luxure_life';
import AboutUs from './pages/AboutUs';
import Hotel from './pages/Hotel';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import Home from './pages/Home';
import UsefulTips from './component/UsefulTips';
import Testy from './component/Testy';
import Analiz from './component/Analiz_rieltora';
import Zarubezhom from './component/Zarubezhom';
import TestCat from './component/TestCat';


function App() {

  return (
    <>
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/nedvizhimost' element={<Real_Estate />} />
          <Route path='/intervju' element={<Interview />} />
          <Route path='/contact' element={<Contacts />} />
          <Route path='/luxury-life' element={<Luxury/>} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/luxury-life/otel" element={<Hotel/>} />
          <Route path="/poleznye-sovety" element={<UsefulTips/>} />
          <Route path="/testy" element={<Testy/>} />
          <Route path="/nedvizhimost/analiz-rieltora" element={<Analiz/>} />
          <Route path="/nedvizhimost/nedvizhimost-zarubezhom" element={<Zarubezhom/>} />
          <Route path="/nedvizhimost/test-category" element={<TestCat/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
