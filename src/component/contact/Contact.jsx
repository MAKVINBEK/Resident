import css from "./Contact.module.css"
import baner from "../../assets/interview.png"
import instogram from "../../assets/instogram.png"
import facebook from "../../assets/facebook.png"
import tiktok from "../../assets/Union.png"
import twitter from "../../assets/twitter.png"



const Contact = () => {
    return (
        <section className="container">
            <div className={css.parent}>
                <img className={css.banner} src={baner} alt="" />
                <div className={css.footer}>
                    <button>контакты</button>
                    <h1>г. Бишкек, ул. Нуркамала 29</h1>
                    <p className={css.contact_project}>График работы: с 9:00 до 20:00</p>

                    <a href="##">journal.resident.kg@gmail.com</a>
                    <a href="#">pr.resident.kg@gmail.com</a>
                    <a href="#">hr.resident.kg@gmail.com</a>

                    <div className={css.marginTop}>
                        <div className={css.contacts_flex_text}>
                            <p className={css.contacts_project}>Почтовый индекс:</p>
                            <p className={css.contacts_title}>720049</p>
                        </div>
                        <div className={css.contacts_flex_text}>
                            <p className={css.contacts_project}>Владелец и издатель:</p>
                            <p className={css.contacts_title}>ОсОО «Trust house C.A. real estate»</p>
                        </div>
                        <div className={css.contacts_flex_text}>
                            <p className={css.contacts_project}>Регистрационный номер:</p>
                            <p className={css.contacts_title}>10308</p>
                        </div>
                        <div className={css.contacts_flex_text}>
                            <p className={css.contacts_project}>Свидетельство:</p>
                            <p className={css.contacts_title}>#000758</p>
                        </div>
                    </div>

                    <div className={css.contacts_sait}>
                        <div className={css.logo}>
                            <img src={facebook} alt="facebook" />
                            <img src={twitter} alt="twitter" />
                            <img src={instogram} alt="instagram" />
                            <img src={tiktok} alt="tiktok" />
                        </div>
                        <p className={css.contacts_project} >Журнал зарегистрирован в Министерстве юстиции КР</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact