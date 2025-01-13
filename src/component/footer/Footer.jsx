import { Link } from 'react-router-dom';
import css from "./Footer.module.css"
import logo from "../../assets/Logo.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instogram from "../../assets/instogram.png";
import tiktok from "../../assets/Union.png";
const Footer = () => {
    return (
        <section className={css.section}>
            <div className="container">

                <div className={css.logos}>
                    <Link to="/"><img className={css.logosip} src={logo} alt="" /></Link>
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
                            <Link className={css.footer__link} to="/intervju">Интервью</Link>
                            <Link className={css.footer__link} to="/luxury-life">Luxury Life</Link>
                            <Link className={css.footer__link} to="/nedvizhimost">Недвижимость</Link>
                            <Link className={css.footer__link} to="/discount">Discount</Link>
                            <Link className={css.footer__link} to="/poleznye-sovety">Полезные советы</Link>
                            <Link className={css.footer__link} to="/testy">Тесты</Link>
                        </div>
                    </div>

                    <div className={css.blockStart}>
                        <div className={css.block}>
                            <h6 className={css.project_name}>Компания:</h6>
                            <Link className={css.footer__link} to="/about-us">О нас</Link>
                            <Link className={css.footer__link} to="/contact">Контакты</Link>
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