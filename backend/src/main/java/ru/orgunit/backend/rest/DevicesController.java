package ru.orgunit.backend.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.orgunit.backend.dto.SimpleResultDto;
import ru.orgunit.backend.dto.UserDto;
import ru.orgunit.backend.dto.devices.ApplianceDto;
import ru.orgunit.backend.dto.devices.FullDevicesInfoDto;
import ru.orgunit.backend.services.DeviceService;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController()
public class DevicesController {


    @RequestMapping("/api/public/getDevicesInfo")
    public FullDevicesInfoDto getDevicesInfo () {
        return null;
    }

    @RequestMapping("/api/public/getAppliencesInfo")
    public List<ApplianceDto> getAppliencesInfo () {
        return null;
    }

    @RequestMapping("/api/public/setValueToAppliance")
    public ApplianceDto setValueToAppliance (@RequestBody ApplianceDto applianceDto) {
        return null;
    }

}
