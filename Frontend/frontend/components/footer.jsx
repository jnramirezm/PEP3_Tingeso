import Style from './styles/navbar.module.css'
import Image from 'next/image'

export default function index() {
  return (
    <footer className={Style.footer}>
        <div className={Style.left}> <img src="/images/hutaofuter.png" alt="futer" ></img></div>
        <div className={Style.center}></div>
        <div className={Style.right}></div>
    </footer>
  )
}