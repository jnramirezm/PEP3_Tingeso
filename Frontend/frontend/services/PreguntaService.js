import axios from 'axios'

const API_URL = 'http://localhost:8080/pregunta'

class PreguntaService {

    cargarPregunta(codigo, dificultad, enunciado, respuesta){
        return axios.post(`${API_URL}?codigo=${codigo}&dificultad=${dificultad}&enunciado=${enunciado}&respuesta=${respuesta}`)
    }
    
    getPreguntas(dificultad){
        return axios.get(API_URL+ "/" + dificultad)
    }

}

const instance = new PreguntaService();
export default new PreguntaService()