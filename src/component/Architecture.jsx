import css from "./hotel_title/Hotel_Title.module.css";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";


const Architecture = () => {
    const [articles, setArticles] = useState([]); // Список статей
    const [loading, setLoading] = useState(true); // Состояние загрузки
    const [error, setError] = useState(null); // Ошибка при загрузке
  
    const { id } = useParams(); // Получаем ID из URL
  const [selectedId, setSelectedId] = useState(null);
  
  useEffect(() => {
    if (id) {
      setSelectedId(Number(id)); // Безопасно устанавливаем selectedId из URL
    }
  }, [id]);
  
    // Загрузка статей с API
    useEffect(() => {
      const loadArticles = async () => {
        try {
          const response = await axios("https://resident.kg/api/ru/list");
          setArticles(response.data);
        } catch (err) {
          setError("Ошибка при загрузке данных. Попробуйте позже.");
        } finally {
          setLoading(false);
        }
      };
  
      loadArticles();
    }, []);
  
    
    const selectedItem = useMemo(
      () => Array.isArray(articles.Architecture) ? articles.Architecture.find((item) => item.id === selectedId) : null,
      [selectedId, articles]
    );
  
    if (loading) return <p></p>; // Рендер при загрузке
    if (error) return <p>{error}</p>;
    if (!selectedItem) return <p>Новость не найдена!</p>; // Рендер при отсутствии статьи
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // "smooth" для плавной прокрутки, "auto" для мгновенной
      });
    };

  return (
    <section className="container">
      <div className={css.row}>
        {/* Левая колонка */}
        <div className={css.row_left}>
          <h1>{selectedItem.title }</h1>
          <div className={css.flex}>
            <button className={css.gred}>{selectedItem.cat_title }</button>
            <span>{selectedItem.user }</span>
            <p>{selectedItem.created_at }</p>
          </div>
          <img
            className={css.slip}
            src={selectedItem.img } // Если нет изображения, используем заглушку
            alt={selectedItem.title }
          />
          {selectedItem.detail.map((el, index) => (
  <div key={index} dangerouslySetInnerHTML={{ __html: el.description }} />
))}

          <div className={css.teg}>
            <h4 className={css.label}>Теги:</h4>
            <div>
              <span className={css.tegis}>отель</span>
              <span className={css.tegis}>роскошный отдых</span>
              <span className={css.tegis}>отдых</span>
              <span className={css.tegis}>место встречи</span>
            </div>
          </div>

          <div className={css.otziv}>
            <h4 className={css.label}>Отзывы</h4>
            <input
              type="text"
              placeholder="Имя и фамилия"
              className={css.input1}
            />
            <input
              type="text"
              placeholder="Напишите отзыв о статье"
              className={css.input2}
            />
            <button>Добавить</button>
          </div>

          <div className={css.user}>
            <div className={css.user_name}>
              <div className={css.user_title}>
                <p>Имя пользователя</p>
                <span>Рейтинг</span>
              </div>
            </div>
            <p className={css.opa}></p>
          </div>
        </div>

        {/* Правая колонка */}
        <div className={css.row_right}>
          <h2>Читайте также:</h2>
          {articles.Architecture.map((el) => (
            <div
              key={el.id}
              onClick={() => {setSelectedId(el.id);scrollToTop();}}
              className={css.right}
            >
              <LazyLoadImage
                src={el.img } 
                alt={el.title }
                effect="blur"
              />
              <div>
                <p className={css.name}>{el.cat_title }</p>
                <p className={css.title}>{el.title }</p>
                <span className={css.date}>{el.created_at }</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Architecture;
