import Style from './styles/navbar.module.css'
import Link from 'next/link'

export default function index() {
  return (
    <nav className={Style.nav}>
        <div className={Style.center}>
                <Link href="/">Inicio</Link>
                <img src="/images/logo.png" alt="logo" />
                <Link href="/Agregar">Agregar</Link>
        </div>
          <img className={Style.butao} src="/images/butao.png" alt="futer" ></img>
    </nav>
  )
}