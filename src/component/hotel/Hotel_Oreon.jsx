import css from "./Hotel_Oreon.module.css"
import next from "../../assets/next.png"
import slip from "../../assets/slip.jpeg"





const Oreon = () => {
    return (
        <section className="container">
            <div className={css.oreons}>
                <img className={css.next} src={next} alt="" />
                <button>роскошный отдых</button>
                <h1>Отель Орион - не только место для  отдыха</h1>
                <span>Алина ирисова</span>
                <p>1 февраля 2024 - 5 мин</p>
                <img className={css.slip} src={slip} alt="" />
            </div>
        </section>
    )
}

export default Oreon