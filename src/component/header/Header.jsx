import { useState } from "react"
import { Link } from 'react-router-dom';
import css from "./Header.module.css"
import ok from "../../assets/ok.png"
import del from "../../assets/Group 2.png"
import search from "../../assets/search.png"
import logo from "../../assets/Logo.png"
import { Squash as Hamburger } from 'hamburger-react'

const Header = () => {

    const [isSearchVisible, setSearchVisible] = useState(false);
    const [Open, setOpen] = useState(false)
    const [down, setDown] = useState(false)

    const toggleSearch = () => {
        setSearchVisible((prev) => !prev);
    };

    const toggleClass = () => {
        setDown((prev) => !prev);
    }

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

                        <li><Link to="/estate">недвижимость</Link></li>
                        <li>
                            <div className={css.hasDropdown}>
                                <Link to="/Luxury_life">роскошный отдых</Link>
                                <div onClick={toggleClass} className={css.clickDrop}>
                                    <img className={down ? css.rotateClick: css.rotateClicknone} src={ok} />
                                </div>
                                <img className={css.ok} src={ok} />
                            </div>

                            <div className={css.dropDown}>
                                <Link to="/Luxury_life/hotel">отель</Link>
                                <Link to="/Luxury_life/restaurant">ресторан</Link>
                                <Link to="/Luxury_life/salons">спа-салоны</Link>
                                <Link to="/Luxury_life/shops">магазины</Link>
                            </div >

                        </li>
                        {down && (
                            <li className={css.clickBlock}><Link to="/Luxury_life/hotel">отель</Link></li>
                        )}
                        {down && (
                            <li className={css.clickBlock}><Link to="/Luxury_life/restaurant">ресторан</Link></li>
                        )}
                        {down && (
                            <li className={css.clickBlock}><Link to="/Luxury_life/salons">спа-салоны</Link></li>
                        )}
                        {down && (
                            <li className={css.clickBlock}><Link to="/Luxury_life/shops">магазины</Link></li>
                        )}

                        <li><Link to="/design">дизайн</Link></li>
                        <li><Link to="/products">продукты</Link></li>
                        <li><Link to="/interview">интервью</Link></li>
                        <li><Link to="/contact">контакты</Link></li>
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