import css from "./Publicity.module.css"
import image from "../../assets/publiciy 4.png"

 

const Publicity = () => {
    return(
        <section className={css.container}>
            <img src={image} alt="" />
        </section>
    )
}

export default Publicity