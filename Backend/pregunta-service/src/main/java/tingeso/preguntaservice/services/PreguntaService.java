package tingeso.preguntaservice.services;

import tingeso.preguntaservice.entities.PreguntaEntity;
import tingeso.preguntaservice.repositories.PreguntaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PreguntaService {
    @Autowired
    private PreguntaRepository preguntaRepository;
    public String guardarPregunta(String dificultad, String codigo, String respuesta){
        PreguntaEntity nPregunta = new PreguntaEntity();
        nPregunta.setDificultad(dificultad);
        nPregunta.setCodigo(codigo);
        nPregunta.setRespuesta(respuesta);
        preguntaRepository.save(nPregunta);
        return "Se cargo el proveedor con exito";

    }
    public List<PreguntaEntity> listarTodasLasPreguntas(){
        return (List<PreguntaEntity>) preguntaRepository.findAll();
    }

    public List<PreguntaEntity>  listar4PreguntasbyDificultad(String dificultad){
        return preguntaRepository.getPreguntasbyDificultad(dificultad);
    }


}
