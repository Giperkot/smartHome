package ru.orgunit.backend;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.CacheControl;
import org.springframework.web.servlet.config.annotation.*;

import java.util.concurrent.TimeUnit;

/**
 * Config раздающий статику
 */

@Configuration

public class MvcConfig implements WebMvcConfigurer {
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        /*registry
                .addResourceHandler("/**")
                .addResourceLocations("/templates/");*/

        /*registry
                .addResourceHandler("/style/assets/**")
                .addResourceLocations("/templates/style/assets/");*/

        /*registry.addResourceHandler("/style/assets/**").addResourceLocations("/style/assets?")
                .setCacheControl(CacheControl.maxAge(2, TimeUnit.HOURS).cachePublic());*/

    }

    /*@Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/img/**")
                .addResourceLocations("file://" + uploadPath + "/");
        registry.addResourceHandler("/static/**")
                .addResourceLocations("classpath:/static/");
    }*/

/*    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/*").allowedOrigins("http://localhost:3000");
            }
        };
    }*/
}
