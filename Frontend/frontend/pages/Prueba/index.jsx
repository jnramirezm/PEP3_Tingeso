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
    const [puntaje, setPuntaje] = useState(0)
    const [promedio, setPromedio] = useState(0)
    const finishedLoadingAndShow = !loading && ver


    useEffect(() => {
        // Aquí puedes colocar la lógica que calcule puntaje y promedio
        const nuevoPuntaje = localStorage.getItem("puntaje"); // Cambia esto por tu cálculo
        const nuevoPromedio = localStorage.getItem("promedio"); // Cambia esto por tu cálculo
    
        setPuntaje(nuevoPuntaje);
        setPromedio(nuevoPromedio);
      }, [finishedLoadingAndShow]);
    
    useEffect(() => {
        localStorage.setItem("puntaje", 0)
        localStorage.setItem("promedio", 0)
        const dificultad = localStorage.getItem("dificultad")
        setDificultad(dificultad)
    }, [])

    const  handleOnClick = () => {
        setTerminar(true)
        setVer(true)
    }


    
        
    /*<img className = {Style.librito} src = "/images/hutaodeo.png" alt = "deo" />  */

    return (
        <main className={Style.main}> 
            <img className = {Style.background} src = "/images/background.jpg"  />
            <div className = {Style.inferior}>
                 
                <div className = {Style.infCentro}>
                    <div className = {Style.puntajes}>
                        <Cronometro debeDetenerse={terminar}  />
                      { !finishedLoadingAndShow && <button onClick={handleOnClick} className = {Style.boton}> Terminar </button>}
                          { finishedLoadingAndShow  && <h2> Puntaje = {puntaje}</h2>}   
                          { finishedLoadingAndShow  && <h2> Promedio = {promedio}</h2>}   
                    </div>
                    
                    <PreguntaComponent d = {dificultad} verCorreccion = {ver}/>
                </div>  
            </div>
        </main>
    )
}
