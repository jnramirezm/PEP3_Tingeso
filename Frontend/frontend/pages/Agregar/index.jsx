import Image from 'next/image'
import Style from './index.module.css'
import PreguntaService from '../../services/PreguntaService'
import { useEffect, useState } from 'react'
import AgregarPregunta from '../../components/agregarPregunta'


export default function index() {
    return (
        <main className={Style.main}> 
        <img className = {Style.background} src = "/images/background.jpg"  />
            <div className = {Style.inferior}>
                <AgregarPregunta />
            </div>
        </main>
    )
}