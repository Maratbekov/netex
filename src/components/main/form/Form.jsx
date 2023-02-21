import {Link} from 'react-router-dom'
import style from './Form.module.css'
const Form = () => {
  return (
    <section id={style.form}>
     <div className="container">
        <h2>Войти в аккаунт</h2>
        <p className={style.desc}>Ввеите свои данные для авторизации</p>

      <form>
        <div className={style.email}>
        <span>EMAIL</span>
        <input type="email" />
        </div>
        
        <div className={style.password}>
          <span>Пароль</span>
          <input type="password" />
        </div>

        <button className={style.formButton}>Войти в аккаунт</button>

        <div className={style.formLink}>
        <Link>Забыл(а) пароль?</Link>
        </div>
      </form>

      <footer id={style.footer}>
         <Link className={style.footerLink}>Ещё нет аккаунта? </Link>
         <Link to='registration' className={style.footerLinkTwo}>ЗАРЕГИСТРИРОВАТЬСЯ</Link>
      </footer>
     </div>
    </section>
  )
}

export default Form