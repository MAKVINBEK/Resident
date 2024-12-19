import Publicity from "../component/banner/Publicity"
import Banner_one from "../component/banner_one/Banner_one"
import Banner_three from "../component/banner_three/Banner_three"
import Banner_two from "../component/banner_two/Baner_two"
import Block from "../component/block-rest/Block"
import Block_one from "../component/block-rest_one/Block_one"
import Frame from "../component/frame/Frame"
import Frame_one from "../component/frame_one/Frame_one"
import Frame_two from "../component/frame_two/Frame_two"
import Reklama from "../component/reklama/Reklama"



function Home() {
  return (
    <>
      <Frame/>
      <Frame_one/>
      <Block/>
      <Frame_two/>
      <Block_one/>
      <Reklama/>
    </>
  )
}

export default Home