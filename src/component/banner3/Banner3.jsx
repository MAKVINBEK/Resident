import css from "../banner/Publicity.module.css"
import image from "../../assets/publiciy 4.png"

 

const Banner3 = () => {
    return(
        <section className={css.container}>
            <img src={image} alt="" />
        </section>
    )
}

export default Banner3;