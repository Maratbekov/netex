import style from './Registration.module.css'
import Header from '../../pages/registratsiya/header/Header.jsx'
import Forms from './forms/Forms'
const Registration = () => {
  return (
    <>
      <Header />
      <div className={style.bg} />
      <Forms/>
    </>
  )
}

export default Registration
