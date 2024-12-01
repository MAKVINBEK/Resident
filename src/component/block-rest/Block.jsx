import css from "../frame/Frame.module.css";
import style from "./Block.module.css"
import next from "../../assets/next.png"
import Data from "../../Data"
import slipLogo from '../../assets/slip.jpeg'


const Block = () => {
    return (
        <section className={css.container}>
            <div className={css.item}>
                <h1>Роскошный отдых</h1>
                <img src={next} alt="" />
            </div>

            <div className={style.block}>

                <div className={style.block1}>
                    <p className={style.name}>роскошный отдых</p>
                    <h4 className={style.title}> Отель Орион - не только место для отдыха</h4>
                    <span className={style.date}>1 февраля 2024 - 5 мин</span>
                </div>

                <div className={style.groupBlock}>
                    {Data.map((el, Index) => (
                        <div key={Index} className={css.card}>
                            <p className={css.name}>{el.name}</p>
                            <h4 className={css.title}>{el.title}</h4>
                            <span className={css.date}>{el.date}</span>
                        </div>
                    ))}
                </div>

            </div>


            <div className={css.group}>
                {Data.map((el, Index) => (
                    <div key={Index} className={css.card}>
                        <img src={el.image} alt="" className={css.image} />
                        <p className={css.name}>{el.name}</p>
                        <h4 className={css.title}>{el.title}</h4>
                        <span className={css.date}>{el.date}</span>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Block;