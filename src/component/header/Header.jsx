import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import css from "./Header.module.css"
import ok from "../../assets/ok.png"
import del from "../../assets/Group 2.png"
import search from "../../assets/search.png"
import logo from "../../assets/Logo.png"
import { Squash as Hamburger } from 'hamburger-react'

const Header = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
  const [isSearchVisible, setSearchVisible] = useState(false);
    const [Open, setOpen] = useState(false)    

    const toggleSearch = () => {
        setSearchVisible((prev) => !prev);
    };

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const response = await axios("https://resident.kg/api/ru/header");
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
        <section className={css.section}>

            <div className="container">
                <div className={css.parent}>

                    <div className={css.burgerMenu} onClick={() => setOpen(!Open)}>
                        <Hamburger toggled={Open} toggle={setOpen} />
                    </div>

                    <Link to="/"><img className={isSearchVisible ? `${css.nones} ${css.logo}` : css.logo} src={logo} alt="" /></Link>

                    <ul className={
                        isSearchVisible
                            ? [css.menu, css.none].join(' ')
                            : Open
                                ? [css.menu, css.active].join(' ')
                                : css.menu
                    }>

                        <div className={css.burger_Menu} onClick={() => setOpen(!Open)}>
                            <Hamburger toggled={Open} toggle={setOpen} />
                        </div>

                        {articles.map((el) => (
                            <div className={css.menuItem}>
                                <li key={el.id}><Link to={el.slug} onClick={() => setOpen(!Open)}>{el.title}</Link> {el.subcategory.length >0 ?<img src={ok} alt="" /> : ""}</li>
                                
                                <div className={css.dropDown}>
                                    {el.subcategory.map((sub) => (
                                    <Link to={`${el.slug}/${sub.slug}`}>{sub.title}</Link>
                                ))}
                                </div>
                                
                            </div>
                        ))}

                        <li onClick={() => setOpen(!Open)}><Link to="/contact">контакты</Link></li>
                    </ul>

                    <a href="#" >
                        <img className={css.search} onClick={toggleSearch} src={search} alt="Search Icon" />
                        {isSearchVisible && (
                            <div className={css.input}>
                                <img src={search} alt="" />
                                <input
                                    type="text"
                                    className={css.searchBar}
                                    placeholder="Поиск..."
                                />
                                <img onClick={toggleSearch} src={del} alt="" />
                            </div>
                        )}
                    </a>
                </div>

            </div>
        </section>

    )
}

export default Header;