import css from "./Frame.module.css";
import { useState, useEffect } from "react";
import next from "../../assets/next.png"
import axios from "axios";



const Frame = () => {
    const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const response = await axios("https://resident.kg/api/ru/list");
        setArticles(response.data); 
      } catch (err) {
        setError("Something went wrong, please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);


  if (loading) return <p>Загрузка... </p>;
  if (error) return <p>{error}</p>;

    return (
        <section className="container">
            <div className={css.parent}>
                <div className={css.item}>
                <h2>Популярные</h2>
                    <img src={next} alt="" />
                </div>
                <div className={css.group}>
                    {articles.Interviews.map((el) => (
                        <div key={el.id} className={css.card}>
                            <img src={el.img} alt="" className={css.image} />
                            <p className={css.name}>{el.cat_title}</p>
                            <h4 className={css.title}>{el.title}</h4>
                            <span className={css.date}>{el.created_at}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Frame;
