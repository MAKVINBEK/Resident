import Publicity from "../component/banner/Publicity"
import Banner_one from "../component/banner_one/Banner_one"
import Banner_three from "../component/banner_three/Banner_three"
import Banner_two from "../component/banner_two/Baner_two"
import Block from "../component/block-rest/Block"
import Block_one from "../component/block-rest_one/Block_one"
import Footer from "../component/footer/Footer"
import Frame from "../component/frame/Frame"
import Frame_one from "../component/frame_one/Frame_one"
import Frame_two from "../component/frame_two/Frame_two"
import Header from "../component/header/Header"
import Reklama from "../component/reklama/Reklama"



function Home() {
  return (
    <>
      <Header/>
      <Frame/>
      <Publicity/>
      <Frame_one/>
      <Banner_one/>
      <Block/>
      <Banner_two/>
      <Frame_two/>
      <Banner_three/>
      <Block_one/>
      <Reklama/>
      <Footer/>
    </>
  )
}

export default Home