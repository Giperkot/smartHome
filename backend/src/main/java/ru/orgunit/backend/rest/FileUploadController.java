package ru.orgunit.backend.rest;

import org.apache.commons.io.IOUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStream;

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


    @GetMapping(value = {"/style/fonts/**", "/style/assets/**.png"}, produces = {"image/png", "font/tiff"})
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

        if (uri.contains("svg") || uri.contains("png") || uri.contains("ttf")) {
            InputStream in = getClass()
                    .getResourceAsStream("/templates" + uri);

            return IOUtils.toByteArray(in);
        }

        return null;
    }

    @GetMapping(value = {"/style/assets/**.svg", "/style/assets/Icons/**.svg"}, produces = {"image/svg+xml"})
    @ResponseBody
    public byte[] sereSvg(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String uri = request.getRequestURI();

        if (uri.contains("svg")) {
            InputStream in = getClass()
                    .getResourceAsStream("/templates" + uri);

            return IOUtils.toByteArray(in);
        }

        return null;
    }

    @GetMapping(value = "/index.js", produces = "application/javascript;charset=UTF-8")
    @ResponseBody
    public byte[] serveScripts(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String uri = request.getRequestURI();

        response.setHeader("Content-Type", "application/javascript; charset=UTF-8");

        if (uri.contains("js")) {
            InputStream in = getClass()
                    .getResourceAsStream("/templates" + uri);

            return IOUtils.toByteArray(in);
        }

        return null;
    }

//    @GetMapping("{filePath:.*}{filename:.+}")
    @GetMapping("/**")
    public String getStaticFiles (HttpServletRequest request, HttpServletResponse response) throws IOException {

        String uri = request.getRequestURI();
        if (uri.contains(".js")) {
            response.addHeader("Content-type", "application/javascript;charset=UTF-8");
        }

        return  request.getRequestURI();

    }


}
