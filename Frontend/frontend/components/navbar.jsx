import Style from './styles/navbar.module.css'
import Link from 'next/link'

export default function index() {
  return (
    <nav className={Style.nav}>
        <div className={Style.left}></div>
        <div className={Style.center}>
                <Link href="/">Inicio</Link>
                <img src="/images/logo.png" alt="logo" />
                <Link href="/Dificultad">Dificultad</Link>
        </div>
        <div className={Style.right}>
        </div>
    </nav>
  )
}