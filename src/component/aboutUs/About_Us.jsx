import css from "./About_Us.module.css"
import banner from "../../assets/banner (1).png"

const About_Us = () => {
    return(
        <section className="container">
            <div className={css.parent}>
            <button>о нас</button>
            <h1>Resident - первый журнал <br /> о строительстве в кыргызстане</h1>
            <img src={banner} alt="" />
            </div>
        </section>
    )
}

export default About_Us
