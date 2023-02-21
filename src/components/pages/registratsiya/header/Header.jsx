import style from '../Registration.module.css'
import { Link } from 'react-router-dom'
import { FaChevronLeft } from "react-icons/fa";
const Header = () => {
  return (
    <div id={style.header}>
      <div className="container">
        <div className={style.header}>
          <Link to='/' className={style.prev}><FaChevronLeft/>Назад</Link>
          <h1 className={style.title}>Регистрация</h1>
        </div>
      </div>
    </div>
  )
}

export default Header
