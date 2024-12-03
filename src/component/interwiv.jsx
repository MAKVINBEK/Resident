import css from "./frame/Frame.module.css"
import next from "../assets/next.png"
import Data from "../Data";


const Interwiv = () => {
        return (
            <section className="container">
                <div className={css.parent}>
                    <div className={css.item}>
                        <h1>недвижимость</h1>
                        <img src={next} alt="" />
                    </div>
                    <div className={css.group}>
                        {Data.map((el, Index) => (
                            <div key={Index} className={css.card}>
                                <img src={el.image} alt="" className={css.image} />
                                <p className={css.name}>Недвижимость</p>
                                <h4 className={css.title}>{el.title}</h4>
                                <span className={css.date}>{el.date}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
        
};


export default Interwiv;