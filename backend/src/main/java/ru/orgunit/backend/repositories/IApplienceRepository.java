package ru.orgunit.backend.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.orgunit.backend.entities.ApplianceEntity;

import java.util.List;

@Repository
public interface IApplienceRepository extends CrudRepository<ApplianceEntity, Long> {

    @Query(value = "select * from appliance order by id limit 10", nativeQuery = true)
    List<ApplianceEntity> selectAll ();

    ApplianceEntity getApplianceEntityById(long id);

}