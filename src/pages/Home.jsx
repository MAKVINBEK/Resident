import Block from "../component/block-rest/Block"
import Block_one from "../component/block-rest_one/Block_one"
import Frame from "../component/frame/Frame"
import Frame_one from "../component/frame_one/Frame_one"
import Frame_two from "../component/frame_two/Frame_two"



function Home() {
  return (
    <>
      <Frame/>
      <Frame_one/>
      <Block/>
      <Frame_two/>
    </>
  )
}

export default Home