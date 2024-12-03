import css from "./Footer.module.css"
import logo from "../../assets/Logo.png"
import facebook from "../../assets/facebook.png"
import twitter from "../../assets/twitter.png"
import instogram from "../../assets/instogram.png"
import tiktok from "../../assets/union.png"

const Footer = () => {
    return (
        <section className={css.section}>
            <div className="container">

                <div className={css.logos}>
                    <img src={logo} alt="" />
                    <div>
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={instogram} alt="" />
                        <img src={tiktok} alt="" />
                    </div>
                </div>

                <div className={css.pages}>

                    <div className={css.blockStart}>
                        <div className={css.block}>
                        <p className={css.project_Title}>- ваш гид в мире строительства, объединяющий всех, кто стремится
                            создавать надежные и удобные дома, а также поможет читателям расширить
                            свой кругозор и узнать что-то новое
                        </p>
                    </div>
                    </div>
                    
                   <div className={css.blockStart}>
                    <div className={css.block}>
                        <h6 className={css.project_name} >Категории:</h6>
                        <a className={css.project_Title} href="#">Недвижимость</a>
                        <a className={css.project_Title} href="#">Роскошный отдых</a>
                        <a className={css.project_Title} href="#">Интервью</a>
                        <a className={css.project_Title} href="#">Дизайн</a>
                        <a className={css.project_Title} href="#">Продукты</a>
                    </div>
                   </div>
                    
                    <div className={css.blockStart}>
                        <div className={css.block}>
                        <h6 className={css.project_name}>Компания:</h6>
                        <a className={css.project_Title} href="#">О нас</a>
                        <a className={css.project_Title} href="#">Контакты</a>
                    </div>
                    </div>
                    

                    <div className={css.blockEnd}>
                        <h6 className={css.project_name}>г. Бишкек, ул. <br />Нуркамала 29</h6>
                        <a className={css.project_Title} href="#">График работы: с 9:00 до 20:00</a>
                        <a className={css.gmail} href="#">journal.resident.kg@gmail.com</a>
                    </div>
                </div>
                <p className={css.project_Title}>Все права защищены</p>
            </div>
        </section>
    )
}

export default Footer;