import css from "../frame/Frame.module.css";
import style from "./Block.module.css"
import next from "../../assets/next.png"
import { useState, useEffect } from "react";
import axios from "axios";


const Block = () => {
    const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const response = await axios("https://resident.kg/api/ru/list/status");
        setArticles(response.data); 
      } catch (err) {
        setError("ОШИБКА!!!");
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);


  if (loading) return <p></p>;
  if (error) return <p>{error}</p>;

    return (
        <section className="container">
            <div className={css.parent}>
                <div className={css.item}>
                    <h1>Роскошный отдых</h1>
                    <img src={next} alt="" />
                </div>
                {articles.Rascule_rest.slice(0, 1).map((el) => (
                    <div className={style.groupBlock}>
                        <img src={el.img} alt="" />
                        <div className={style.block1}>
                        <p className={style.name}>{el.cat_title}</p>
                        <h4 className={style.title}>{el.title}</h4>
                        <span className={style.date}>{el.created_at}</span>
                    </div>
                    </div>
                    
                    
                ))}

                
            </div>


        </section>
    );
};

export default Block;