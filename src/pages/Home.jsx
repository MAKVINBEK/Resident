import Publicity from "../component/banner/Publicity"
import Banner1 from "../component/banner1/Banner1"
import Banner2 from "../component/banner2/Baner2"
import Banner3 from "../component/banner3/Banner3"
import Block from "../component/block-rest/Block"
import Block1 from "../component/block-rest1/Block1"
import Footer from "../component/footer/Footer"
import Frame from "../component/frame/Frame"
import Frame1 from "../component/frame1/Frame1"
import Frame2 from "../component/frame2/Frame2"
import Header from "../component/header/Header"
import Reklama from "../component/reklama/Reklama"



function Home() {


  return (
    <>
      <Header/>
      <Frame/>
      <Publicity/>
      <Frame1/>
      <Banner1/>
      <Block/>
      <Banner2/>
      <Frame2/>
      <Banner3/>
      <Block1/>
      <Reklama/>
      <Footer/>
    </>
  )
}

export default Home