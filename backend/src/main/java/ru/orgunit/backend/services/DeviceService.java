package ru.orgunit.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.orgunit.backend.dto.devices.ApplianceDto;
import ru.orgunit.backend.dto.devices.FullDevicesInfoDto;
import ru.orgunit.backend.dto.devices.ScriptDto;
import ru.orgunit.backend.dto.devices.TaskDto;
import ru.orgunit.backend.entities.ApplianceEntity;
import ru.orgunit.backend.entities.ScriptEntity;
import ru.orgunit.backend.entities.TaskEntity;
import ru.orgunit.backend.repositories.IApplienceRepository;
import ru.orgunit.backend.repositories.IScriptRepository;
import ru.orgunit.backend.repositories.ITaskRepository;

import java.util.List;
import java.util.stream.Collectors;

@Transactional
@Service
public class DeviceService {

    @Autowired
    private IApplienceRepository applienceRepository;

    @Autowired
    private ITaskRepository taskRepository;

    @Autowired
    private IScriptRepository scriptRepository;

    public FullDevicesInfoDto getAllDevices () {

        List<ApplianceEntity> applianceEntityList = applienceRepository.selectAll();

        List<TaskEntity> taskEntityList = taskRepository.selectAll();

        List<ScriptEntity> scriptEntityList = scriptRepository.selectAll();

        List<ApplianceDto> applianceDtoList = applianceEntityList.stream().map((elm) -> {
            return new ApplianceDto(elm);
        }).collect(Collectors.toList());

        List<TaskDto> taskDtoList = taskEntityList.stream().map((elm) -> {
            return new TaskDto(elm);
        }).collect(Collectors.toList());

        List<ScriptDto> scriptDtoList = scriptEntityList.stream().map((elm) -> {
            return new ScriptDto(elm);
        }).collect(Collectors.toList());

        FullDevicesInfoDto result = new FullDevicesInfoDto();
        result.setApplianceDtoList(applianceDtoList);
        result.setScriptDtoList(scriptDtoList);
        result.setTaskDtoList(taskDtoList);

        return result;
    }

    public ApplianceDto setValueToAppliance (ApplianceDto applianceDto) {

        if (applianceDto.getId() == null || applianceDto.getActive() == null) {
            throw new RuntimeException("Переданы не верные данные");
        }

        ApplianceEntity applianceEntity = applienceRepository.getApplianceEntityById(applianceDto.getId());
        applianceEntity.setActive(applianceDto.getActive());

        if (applianceDto.getValue() != null) {
            applianceEntity.setValue(applianceDto.getValue());
        }

        applienceRepository.save(applianceEntity);

//        result.setError(false);
        return new ApplianceDto(applianceEntity);
    }

    public List<ApplianceDto> getAppliencesInfo () {
        List<ApplianceEntity> applianceEntityList = applienceRepository.selectAll();

        return applianceEntityList.stream().map((elm) -> {
            return new ApplianceDto(elm);
        }).collect(Collectors.toList());
    }



}
