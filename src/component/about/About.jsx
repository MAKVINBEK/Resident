import css from "./About.module.css"
import photo1 from "../../assets/1.png"
import photo2 from "../../assets/2.png"
import photo3 from "../../assets/3.png"
import photo4 from "../../assets/4.png"


const About = () => {
    return (
        <section className="container">

            <div className={css.parent}>
                <div className={css.item}>
                    <h2>о компании</h2>
                </div>
                <div className={css.content}>
                    <img src={photo1} alt="" />
                    <div className={css.text}>
                        <p>Мы видим свое предназначение в том, чтобы объединить мир через истинное кыргызское
                            гостеприимство и национальную культуру.
                            Через улучшение качества сервиса, обеспечивать процветание компании и сотрудников.
                        </p>
                        <p>
                            Главная цель - превзойти ожидания наших гостей. Орион - больше, чем отель! Мы видим
                            свое предназначение в том, чтобы объединить мир через истинное кыргызское гостеприимство и национальную культуру.
                            Через улучшение качества сервиса, обеспечивать процветание компании и сотруднико
                        </p>
                    </div>

                    <div className={css.blockTop}>
                        <img src={photo2} alt="" />
                        <img src={photo3} alt="" />
                    </div>

                    <img src={photo4} alt="" />

                </div>
            </div>

        </section>
    )
}

export default About