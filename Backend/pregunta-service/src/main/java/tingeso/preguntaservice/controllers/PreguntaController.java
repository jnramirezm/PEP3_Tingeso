package tingeso.preguntaservice.controllers;

import tingeso.preguntaservice.entities.PreguntaEntity;
import tingeso.preguntaservice.services.PreguntaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/pregunta")
public class PreguntaController {
    @Autowired
    private PreguntaService preguntaService;

    @PostMapping
    private ResponseEntity preguntaUpload ( @RequestParam("dificultad") String dificultad,
                                            @RequestParam("codigo") String codigo,
                                            @RequestParam("respuesta") String respuesta,
                                            @RequestParam("enunciado") String enunciado){
        preguntaService.guardarPregunta(dificultad, codigo, respuesta, enunciado);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/getAll")
    private ResponseEntity<List<PreguntaEntity>> listarProveedores(){
        List<PreguntaEntity> proveedores;
        proveedores = preguntaService.listarTodasLasPreguntas();
        return ResponseEntity.ok(proveedores);
    }


    @GetMapping("/{dificultad}")
    private ResponseEntity<List<PreguntaEntity>> get4Preguntas(@PathVariable("dificultad") String dificultad){
        return ResponseEntity.ok(preguntaService.listar4PreguntasbyDificultad(dificultad));
    }

}
