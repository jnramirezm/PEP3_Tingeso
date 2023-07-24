import { useState } from 'react';
import PreguntaService from '../services/PreguntaService';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { twilight as theme } from "react-syntax-highlighter/dist/cjs/styles/prism";
/*duotoneSpace */
import { useEffect } from 'react';
import Style from './styles/pregunta.module.css'
import Cronometro from './cronometro';

export default function Index(props) {

  const [loading, setLoading] = useState(false);
  const [inputValues, setInputValues] = useState({});

    
  const [preguntas, setPreguntas] = useState([])
  const [pregunta, setPregunta] = useState({
    codigo:     '',
    respuesta:  '',
    dificultad: '',
    enunciado:  ''
  })
  
const [currentPage, setCurrentPage] = useState(0);

const paginatedPreguntas = preguntas.slice(currentPage * 2, (currentPage * 2) + 2);

const [answers, setAnswers] = useState([]);

const [final, setFinal] = useState([])

const [respuestasCorrectas, setRespuestasCorrectas] = useState([])
const [respuestasIncorrectas, setRespuestasIncorrectas] = useState([])


 
const handleInputChange = (event, index) => {
  setAnswers([...answers, [index, event.target.value]])
  console.log(answers)
  setInputValues({
    ...inputValues,
    [index]: event.target.value,
});
};
  
  const d = props.d
  const verCorreccion = props.verCorreccion
 
  useEffect(() => {
    PreguntaService.getPreguntas(d)
    .then(response => {
      const preguntasConId = response.data.map((pregunta, index) => ({
        ...pregunta,
        id: index + 1  // o cualquier otro valor que quieras usar para el ID
      }))
      setPreguntas(preguntasConId)
      console.log("verCorreccion", verCorreccion)
    })
    .catch(error => {
      console.log(error)
    })
  }, [d])


  function name(params) {
    let valores_x = {};
    for (let i = 0; i < answers.length; i++) {
      let x = answers[i][0];
      let valor = answers[i][1];
      valores_x[x] = valor; // Esto sobrescribirá cualquier valor anterior de x
  }
   setAnswers(Object.entries(valores_x)); 
  }

  useEffect(() => {

    if (verCorreccion) {
      let valores_x = {};

    for (let i = 0; i < answers.length; i++) {
        let x = answers[i][0];
        let valor = answers[i][1];
        valores_x[x] = valor; // Esto sobrescribirá cualquier valor anterior de x
    }

    let pares = Object.entries(valores_x);
    console.log(pares);

      /* Comparar preguntas.id con answer[0] */
      /* Si son iguales, comparar preguntas.respuesta con answer[1] */
      /* Si son iguales, agregar a un array de respuestas correctas */
      /* Si no son iguales, agregar a un array de respuestas incorrectas */
      /* Mostrar los arrays de respuestas correctas e incorrectas */
      console.log("verCorreccion", verCorreccion)
      console.log("answers", answers)
      console.log("preguntas", preguntas)
      const respuestasCorrectas = []
      const respuestasIncorrectas = []
      preguntas.forEach(pregunta => {
        pares.forEach(par => {
          if (pregunta.id === Number(par[0])) {
            if (pregunta.respuesta === par[1]) {
              respuestasCorrectas.push(pregunta.id)
            } else {
              respuestasIncorrectas.push(pregunta.id)
            }
          }
        })
      })
      setRespuestasCorrectas(respuestasCorrectas)
      setRespuestasIncorrectas(respuestasIncorrectas)

      /* 4 - 1   7/4 */

      const puntajeCorrectas = respuestasCorrectas.length * 7
      const puntajeIncorrectas = respuestasIncorrectas.length * 1
      const puntaje = puntajeCorrectas + puntajeIncorrectas
      const promedio = puntaje / preguntas.length

      localStorage.setItem("puntaje", puntaje)
      localStorage.setItem("promedio", promedio)

    }
  }, [verCorreccion, answers, preguntas])

  


    const finishedLoadingAndShow = !loading && verCorreccion;



    return (
        <div className={Style.div}>
        {paginatedPreguntas.map((pregunta, index) =>
          <div key={pregunta.id} className = {Style.boxPregunta}>
            <h2>{pregunta.enunciado}</h2>
            <SyntaxHighlighter className={Style.pregunta} language="python" style={theme} wrapLines={true}>
              {pregunta.codigo}
            </SyntaxHighlighter>
              <div className = {Style.divResultado}>
              <input 
            type="text"
            value={inputValues[pregunta.id] || ''}
            placeholder= {finishedLoadingAndShow ? pregunta.respuesta : "Escriba su respuesta"}
            onChange={(event) => handleInputChange(event, pregunta.id)} // handleInputChange is a function you would need to implement to handle the change in input value.
             />
             { finishedLoadingAndShow && respuestasCorrectas.includes(pregunta.id)  &&  <p>holupe</p>}
             { finishedLoadingAndShow && respuestasIncorrectas.includes(pregunta.id)  &&  <p>malardo</p>}
            </div>
          </div>
        )}
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 0}> Anterior</button>
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={(currentPage + 1) * 2 >= preguntas.length}> Siguiente </button>
      </div>
    
  );

}