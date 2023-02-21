import { Link } from 'react-router-dom'
import Button from '../../../../UI/button/Button'
import style from './Forms.module.css'

const Forms = () => {
  return (
    <section id={style.forms}>
      <div className="container">
        <form className={style.forms}>
          <h2 className={style.formTitle}>Регистрация</h2>
          <p className={style.formDesc}>Ввеите свои данные для регистрации</p>

          <div className={style.input}>
            <span>Имя</span>
            <input type="text" />
          </div>
          <div className={style.input}>
            <span>Фамилия</span>
            <input type="text" />
          </div>
          <div className={style.input}>
            <span>EMAIL</span>
            <input type="email" />
          </div>
          <div className={style.input}>
            <span>Пароль</span>
            <input type="password" />
          </div>
          <div className={style.input}>
            <span>Повторите пароль</span>
            <input type="password" />
          </div>
          <div className={style.agree}>
            <input type="checkbox" />
            <span className={style.agreeTitle}>
              Нажимая на кнопку “Регистрация” я принимаю условия
              <Link className={style.agreeLink}>Пользовательского соглашения</Link>
            </span>
          </div>
          <Button>Зарегистрироваться</Button>
        </form>
      </div>
    </section>
  )
}

export default Forms
