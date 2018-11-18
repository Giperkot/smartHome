package ru.orgunit.backend.rest;

import org.apache.commons.io.IOUtils;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.util.stream.Collectors;

@Controller
public class FileUploadController {

    @GetMapping("/")
    public String listUploadedFiles() throws IOException {

        /*model.addAttribute("files", storageService.loadAll().map(
                path -> MvcUriComponentsBuilder.fromMethodName(FileUploadController.class,
                        "serveFile", path.getFileName().toString()).build().toString())
                .collect(Collectors.toList()));*/

        return "index";
//        return "/index.html";
    }


    @GetMapping({"/style/fonts/**", "/style/assets/**", "/index.js"})
    @ResponseBody
    public byte[] serveFile(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String uri = request.getRequestURI();
//        Resource file = new UrlResource("template" + uri);


//        InputStream in = getClass().getResourceAsStream("/file.txt");

        /*try {
            new File("exampleFile.txt").createNewFile();
        } catch (IOException e) {
            e.printStackTrace();
        }*/

        if (uri.contains("svg") || uri.contains("png") || uri.contains("ttf") || uri.contains("js")) {
            InputStream in = getClass()
                    .getResourceAsStream("/templates" + uri);
            return IOUtils.toByteArray(in);
        }

        return null;

/*        return ResponseEntity.ok().header(HttpHeaders.CONTENT_DISPOSITION,
                "attachment; filename=\"" + file.getFilename() + "\"").body(file);*/

//return null;

    }

//    @GetMapping("{filePath:.*}{filename:.+}")
    @GetMapping("/**")
    public String getStaticFiles (HttpServletRequest request, HttpServletResponse response) throws IOException {

        String uri = request.getRequestURI();
/*
        if (uri.contains(".js")) {
            response.addHeader("Content-type", "application/javascript;charset=UTF-8");
        }*/

        return  request.getRequestURI();

    }


}
