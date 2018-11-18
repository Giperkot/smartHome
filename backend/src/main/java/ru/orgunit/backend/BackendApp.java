package ru.orgunit.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

/*@SpringBootApplication
@ComponentScan
@EntityScan
@EnableJpaRepositories
@Configuration
@EnableTransactionManagement
@EnableWebMvc
@EnableAutoConfiguration(exclude={DataSourceAutoConfiguration.class})*/

@SpringBootApplication
@ComponentScan
@EntityScan
@EnableJpaRepositories
@Configuration
@EnableTransactionManagement
@EnableAutoConfiguration
public class BackendApp {

    public static void main(String[] args) {
        SpringApplication.run(BackendApp.class, args);
    }

}
