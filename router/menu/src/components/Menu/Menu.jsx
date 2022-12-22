import { NavLink } from "react-router-dom";

const checkActive = ({isActive}) => isActive ? "menu__item menu__item-active" : "menu__item"

const Menu = () => {
  return(
  <header>
    <nav className="menu">
      <NavLink className={checkActive} to="/">Главная</NavLink>
      <NavLink className={checkActive} to="/drift">Дрифт-такси</NavLink>
      <NavLink className={checkActive} to="/timeattack">Time Attack</NavLink>
      <NavLink className={checkActive} to="/forza">Forza Karting</NavLink>
    </nav>
  </header>)
}

export { Menu };