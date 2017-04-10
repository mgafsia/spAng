package com.mga;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
public class SpAngApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpAngApplication.class, args);
	}
	//TODO(MGA) : add a mongoDB database
	//TODO(MGA) : use swagger
	//TODO(MGA) : add spring bean !!
	//TODO(MGA) : add elastic search
	//TODO(MGA) : add more hibernate
    //TODO(MGA) : add test for nG
    //TODO(MGA) : add spock tests
    //TODO(MGA) : more spring Bean
    //TODO(MGA) : security of http://localhost:4200/src/api/hikes.json
    //TODO(MGA) : jasmine
    //TODO(MGA) : CV(1) : Angular2/4 - GitHub - nodeJS ? - JQuery ? - Spring Boot - Spring Data Rest - test Ang - Spok
    //TODO(MGA) : CV(2) : JAVA8 - MongoDB - elasticSearch - Cloud - Docker - Rancher - AMS - Jenkins - Swagger - TypeScript
    //TODO(MGA) : CV(3) : SpringIoC
    //TODO(MGA) : CV(6) : REST : model / Repository /

    @Bean
    public Docket swaggerSettings() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.any())
                .paths(PathSelectors.any())
                .build()
                .pathMapping("/");
    }
}
