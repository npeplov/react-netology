import "./App.css";
import "./css/index.css";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <header>
      <nav class="menu">
        <Link className='menu__item' to="/">Главная</Link>
        <Link className='menu__item' to="/drift">Дрифт-такси</Link>
        <Link className='menu__item' to="/timeattack">Time Attack</Link>
        <Link className='menu__item' to="/forza">Forza Karting</Link>
        </nav>
      </header>
    </>
  );
}
