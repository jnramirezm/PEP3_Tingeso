import Image from 'next/image'
import Style from './index.module.css'
import PreguntaService from '../../services/PreguntaService'
import { useEffect, useState } from 'react'
import PreguntaComponent from '../../components/pregunta'
import Cronometro from '../../components/cronometro'

export default function index() {

    const [loading, setLoading] = useState(false);
    const [ver, setVer] = useState(false)
    const [terminar, setTerminar] = useState(false)
    const [dificultad, setDificultad] = useState(null)
    const [pregunta, setPregunta] = useState(null)
    
    useEffect(() => {
        const dificultad = localStorage.getItem("dificultad")
        setDificultad(dificultad)
    }, [])

    const  handleOnClick = () => {
        setTerminar(true)
        setVer(true)
    }


    const finishedLoadingAndShow = !loading && ver
        


    return (
        <main className={Style.main}> 
            <img className = {Style.background} src = "/images/background.jpg"  />
            <div className = {Style.inferior}>
                <img className = {Style.librito} src = "/images/hutaodeo.png" alt = "deo" />    
                <div className = {Style.infCentro}>
                    <div className = {Style.puntajes}>
                        <Cronometro debeDetenerse={terminar}  />
                      { !finishedLoadingAndShow && <button onClick={handleOnClick} className = {Style.boton}> Terminar </button>}
                          { finishedLoadingAndShow && <h2> Puntaje = {localStorage.getItem("puntaje")}</h2>}   
                          { finishedLoadingAndShow && <h2> Promedio = {localStorage.getItem("promedio")}</h2>}   
                    </div>
                    
                    <PreguntaComponent d = {dificultad} verCorreccion = {ver}/>
                </div>  
            </div>
        </main>
    )
}
