import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const activeClassName = "menu__item menu__item-active";
  const defaultClassName = "menu__item";

  return(
  <header>
    <nav className="menu">
      <NavLink className={({isActive}) => isActive ? activeClassName : defaultClassName } to="/">Главная</NavLink>
      <NavLink className={({isActive}) => isActive ? activeClassName : defaultClassName } to="/drift">Дрифт-такси</NavLink>
      <NavLink className={({isActive}) => isActive ? activeClassName : defaultClassName } to="/timeattack">Time Attack</NavLink>
      <NavLink className={({isActive}) => isActive ? activeClassName : defaultClassName } to="/forza">Forza Karting</NavLink>
    </nav>
  </header>)
};
export { Menu };
