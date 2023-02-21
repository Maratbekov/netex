import style from '../Registration.module.css'
import { Link } from 'react-router-dom'
import { FaChevronLeft } from "react-icons/fa";
const header = () => {
  return (
    <div id={style.header}>
      <div className="container">
        <div className={style.header}>
          <Link to='/'><FaChevronLeft/>Назад</Link>
          <h1>Регистрация</h1>
        </div>
      </div>
    </div>
  )
}

export default header
