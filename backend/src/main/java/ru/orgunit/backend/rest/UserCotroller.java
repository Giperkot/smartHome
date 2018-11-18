package ru.orgunit.backend.rest;


import org.springframework.web.bind.annotation.*;
import ru.orgunit.backend.dto.UserDto;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

@CrossOrigin(origins = "*")
@RestController()
public class UserCotroller {

    @RequestMapping("/api/public/login")
    public UserDto login () {
        UserDto result = new UserDto();
        result.setFirstName("Толик");

        return result;
    }
}
