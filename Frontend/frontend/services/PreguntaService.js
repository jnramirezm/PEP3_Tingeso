import axios from 'axios'

const API_URL = 'http://localhost:8080/pregunta'

class PreguntaService {

    cargarAcopios(dificultad, codigo, respuesta){
        return axios.post(API_URL, dificultad, codigo, respuesta)
    }
    
    getPreguntas(dificultad){
        return axios.get(API_URL+ "/" + dificultad)
    }

}

const instance = new PreguntaService();
export default new PreguntaService()