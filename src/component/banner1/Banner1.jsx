import css from "../banner/Publicity.module.css"
import image from "../../assets/publiciy 4.png"

 

const Banner1 = () => {
    return(
        <section className="container">
            <div className={css.parent}>
                <img src={image} alt="" />
            </div>
            
        </section>
    )
}

export default Banner1;