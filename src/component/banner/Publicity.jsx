import css from "./Publicity.module.css"
import image from "../../assets/publiciy 4.png"

 

const Publicity = () => {
    return(
        <section className="container">
            <div className={css.parent}>
                <img src={image} alt="" />
            </div>
            
        </section>
    )
}

export default Publicity