import Image from 'next/image'
import Style from './index.module.css'
import PreguntaService from '../../services/PreguntaService'
import { useEffect, useState } from 'react'
import PreguntaComponent from '../../components/pregunta'

export default function index() {
    return (
        <main className={Style.main}> 
            <div className = {Style.superior}></div>
            <div className = {Style.inferior}>
                <Image src="/images/hutaodeo.png" alt="deo" width={150} height={150} />
                <PreguntaComponent/>
            </div>
        </main>
    )
}
