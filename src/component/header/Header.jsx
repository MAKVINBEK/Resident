import { useState } from "react"
import css from "./Header.module.css"
import ok from "../../assets/ok.png"
import search from "../../assets/search.png"
import logo from "../../assets/Logo.png"

const Header = () => {

    const [isSearchVisible, setSearchVisible] = useState(false);

    const toggleSearch = () => {
        setSearchVisible((prev) => !prev);
    };

    return (
    <section className={css.section}>
        <div className={css.container}>
        
          <img className={css.logo} src={logo} alt="" />
            <ul className={css.navbar}>
                <li><a href="#">недвижимость</a></li>
                <li><a href="#" className={css.hasDropdown}>
                    роскошный отдых <img src={ok} /></a>
                    <div className={css.dropDown}>
                        <a href="#">отель</a>
                        <a href="#">ресторан</a>
                        <a href="#">спа-салоны</a>
                        <a href="#">магазины</a>
                    </div >
                </li>
                <li><a href="#">дизайн</a></li>
                <li><a href="#">продукты</a></li>
                <li><a href="#">интервью</a></li>
                <li><a href="#">контакты</a></li>
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
        </section>

    )
}

export default Header;