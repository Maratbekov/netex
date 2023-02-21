import style from './Header.module.css'

const Header = () => {
  return (
    <header id={style.header}>
      <h1 className={style.headerTitle}>Авторизация</h1>
    </header>
  )
}

export default Header
