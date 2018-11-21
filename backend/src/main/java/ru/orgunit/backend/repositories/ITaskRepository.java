package ru.orgunit.backend.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.orgunit.backend.entities.TaskEntity;

import java.util.List;

@Repository
public interface ITaskRepository extends CrudRepository<TaskEntity, Long> {

    @Query(value = "select * from task", nativeQuery = true)
    List<TaskEntity> selectAll ();

}
