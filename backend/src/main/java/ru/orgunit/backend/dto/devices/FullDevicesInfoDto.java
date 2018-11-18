package ru.orgunit.backend.dto.devices;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class FullDevicesInfoDto {

    @JsonProperty(value = "appliances")
    private List<ApplianceDto> applianceDtoList;

    @JsonProperty(value = "tasks")
    private List<TaskDto> taskDtoList;

    @JsonProperty(value = "scripts")
    private List<ScriptDto> scriptDtoList;

    public List<ApplianceDto> getApplianceDtoList() {
        return applianceDtoList;
    }

    public void setApplianceDtoList(List<ApplianceDto> applianceDtoList) {
        this.applianceDtoList = applianceDtoList;
    }

    public List<TaskDto> getTaskDtoList() {
        return taskDtoList;
    }

    public void setTaskDtoList(List<TaskDto> taskDtoList) {
        this.taskDtoList = taskDtoList;
    }

    public List<ScriptDto> getScriptDtoList() {
        return scriptDtoList;
    }

    public void setScriptDtoList(List<ScriptDto> scriptDtoList) {
        this.scriptDtoList = scriptDtoList;
    }
}
