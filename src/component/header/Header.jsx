import { useState } from "react"
import { Link } from 'react-router-dom';
import css from "./Header.module.css"
import ok from "../../assets/ok.png"
import search from "../../assets/search.png"
import logo from "../../assets/Logo.png"
import { Squash as Hamburger } from 'hamburger-react'

const Header = () => {

    const [isSearchVisible, setSearchVisible] = useState(false);
    const [Open, setOpen] = useState(false)

    const toggleSearch = () => {
        setSearchVisible((prev) => !prev);
    };

    return (
        <section className={css.section}>

            <div className="container">
                <div className={css.parent}>

                    <div className={css.burgerMenu} onClick={() => setOpen(!Open)}>
                        <Hamburger toggled={Open} toggle={setOpen} />
                    </div>
                    

                    <Link to="/"><img className={css.logo} src={logo} alt="" /></Link>
                    <ul className={Open ? [css.menu, css.active].join(' ') : [css.menu]}>
                        <li><Link to="/недвижимость">недвижимость</Link></li>
                        <li className={css.hasDropdown}><a href="#" >
                            роскошный отдых <img src={ok} /></a>
                            <div className={css.dropDown}>
                                <Link to="/отель">отель</Link>
                                <Link to="/ресторан">ресторан</Link>
                                <Link to="/спа-салоны">спа-салоны</Link>
                                <Link to="/магазины">магазины</Link>
                            </div >
                        </li>
                        <li><Link to="/дизайн">дизайн</Link></li>
                        <li><Link to="/продукты">продукты</Link></li>
                        <li><Link to="/интервью">интервью</Link></li>
                        <li><Link to="/контакты">контакты</Link></li>
                    </ul>

                    <a href="#" >
                        <button className={css.search} onClick={toggleSearch}>
                            <img src={search} alt="Search Icon" />
                        </button>
                        {isSearchVisible && (
                            <input
                                type="text"
                                className={css.searchBar}
                                placeholder="Поиск..."
                                autoFocus
                            />
                        )}
                    </a>
                </div>



            </div>
        </section>

    )
}

export default Header;