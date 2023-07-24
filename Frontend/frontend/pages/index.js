import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {

  return (
    <main className={styles.main}>
      <img className = {styles.background} src = "/images/background.jpg"/> 
        <div className={styles.inferior}>
        <h1 className={styles.title}>
          Bienvenido a <a className ={styles.colortao}>PyTao</a>
        </h1> 
        </div>
        <div className={styles.botones}>
        <Link className={styles.boton1} href="/Agregar"> Anadir Pregunta
        <img className = {styles.boton1img} src = "/images/marisopa.png"/>
        </Link>
        <Link className={styles.boton2} href="/Dificultad" > Seleccionar Dificultad
        <img className = {styles.boton2img} src = "/images/marisopa.png"/>
        </Link>
        
        </div>
    </main>
  )

}
