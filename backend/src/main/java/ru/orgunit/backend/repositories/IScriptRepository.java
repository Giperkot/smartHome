package ru.orgunit.backend.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.orgunit.backend.entities.ApplianceEntity;
import ru.orgunit.backend.entities.ScriptEntity;
import ru.orgunit.backend.entities.TaskEntity;

import java.util.List;

@Repository
public interface IScriptRepository extends CrudRepository<ScriptEntity, Long> {

    @Query(value = "select * from script", nativeQuery = true)
    List<ScriptEntity> selectAll ();
}
