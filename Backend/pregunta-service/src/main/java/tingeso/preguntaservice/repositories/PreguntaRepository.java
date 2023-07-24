package tingeso.preguntaservice.repositories;

import tingeso.preguntaservice.entities.PreguntaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PreguntaRepository extends JpaRepository<PreguntaEntity, Integer> {

    @Query(value = "Select p.id, p.codigo, p.dificultad, p.enunciado, p.respuesta" +
            " from pregunta as p " +
            "where p.dificultad = :dificultad" +
            " order by random()"+
            "limit 4",
            nativeQuery = true)
    List<PreguntaEntity> getPreguntasbyDificultad(@Param("dificultad")String dificultad);

}
