import React from 'react'
import { useState } from 'react';
import PreguntaService from '../services/PreguntaService';
import Style from './styles/agregarPreguntas.module.css'

export default function index() {

    const [file] = useState({
        selectedFile: null
    })

   const [pregunta, setPregunta] = useState({
            codigo:     '',
            respuesta:  '',
            dificultad: '',
            enunciado:  ''
    })

    const handleChangeFile = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
            setPregunta({...pregunta, codigo: reader.result})
        }
    }

    const handleChange = (e) => {
       const {name, value} = e.target
         setPregunta({...pregunta, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(pregunta)
        PreguntaService.cargarPregunta(pregunta.codigo,pregunta.dificultad, pregunta.enunciado, pregunta.respuesta)
        .then(response => {
            alert('Se ha agregado correctamente!');
            console.log(response)
         })
        .catch(error => {
            alert('No se ha podido agregar!');
            console.log(error)
        })
    }


    return (
        <form className={Style.form}>
            <div className="mb-3">
                <label htmlFor="file">Codigo</label>
                <input type="file" accept='.py' className={Style.file} id="file" name="file" onChange={handleChangeFile} value={file.selectedFile} />
            </div>
            <div className="mb-3">
                <label htmlFor="respuesta" className={Style.label}>Respuesta</label>
                <input type="text" className={Style.input} id="respuesta" name="respuesta" onChange={handleChange} value={pregunta.respuesta} />
            </div>
            <div className="mb-3">
                <label htmlFor="dificultad" className={Style.label}>Dificultad</label>
                <select id="dificultad" name="dificultad" className={Style.input} value={pregunta.dificultad} onChange={handleChange}>
                    <option value="">Seleccione</option>
                    <option value="Basico">Basico</option>
                    <option value="Intermedio">Intermedio</option>
                    <option value="Avanzado">Avanzado</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="enunciado" className={Style.label}>Enunciado</label>
                <input type="text" className={Style.input} id="enunciado" name="enunciado" onChange={handleChange} value={pregunta.categoria} />
            </div>
            <button type="submit" className={Style.btn} onClick={handleSubmit}> Agregar</button>
        </form>
    )
}