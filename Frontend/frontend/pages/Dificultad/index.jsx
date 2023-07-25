import Image from 'next/image'
import style from './index.module.css'
import PreguntaService from '../../services/PreguntaService'
import { useEffect, useState } from 'react'
import PreguntaComponent from '../../components/pregunta'

export default function index() {

    const [dificultad, setDificultad] = useState(null)

    const handleClick = (d) => {
        setDificultad(d)
        localStorage.setItem("dificultad", d)
    }

    return (
        <main className={style.main}>
            <img className = {style.background} src = "/images/background.jpg"  />
        <section className={style.hutao}>
                   <h1 className = {style.tituloIzq}>SELECCIONE <br></br>DIFICULTAD</h1>
            <div/>
        </section>
        <section className={style.dificultades}>
        
            <div className={style.basica}>
                <a onClick = {() => handleClick("basico")} href = "/Prueba" className = {style.prueba}> a b c </a>
                <div className={style.imagenBox}>
                    <Image src = "/images/basico.png" alt = "basico" width={150} height={150} />
                </div>
                <div className = {style.dificultad}>
                    <h2 className = {style.titulo}>Basico</h2>
                </div>
                
            </div>
            <div className={style.intermedia}>
                <a onClick = {() => handleClick("intermedio")} href = "/Prueba" className = {style.prueba}> a b c </a>
                <div className={style.imagenBox}>
                    <Image src = "/images/intermedio.png" alt = "intermedio" width={150} height={150}/>
                </div>
                <div className = {style.dificultad}>
                    <h2 className = {style.titulo}>Intermedio</h2>
                </div>
            </div>
            <div className={style.avanzada}>
             <a onClick = {() => handleClick("avanzado")} href = "/Prueba" className = {style.prueba}> a b c </a>
                <div className={style.imagenBox}>
                <Image src = "/images/avanzado.png" alt = "avanzado" width={150} height={150} />
                </div> 
                <h2 className = {style.dificultad}>Avanzado</h2>
            </div>

        </section>

    </main>
)

        /*
        <main className={Style.main}> 
            <img className = {Style.background} src = "/images/background.jpg"  />
            <div className = {Style.inferior}>
                    <img src = "/images/basico.png" alt = "basico" />  
                    <img src = "/images/intermedio.png" alt = "intermedio" />  
                    <img src = "/images/avanzado.png" alt = "avanzado" />       
            </div>
        </main>
        */
}
