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

    @Bean
    public Docket swaggerSettings() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.any())
                .paths(PathSelectors.any())
                .build()
                .pathMapping("/");
    }

    //TODO(MGA) : add a mongoDB database
    //TODO(MGA) : add spring bean !!
    //TODO(MGA) : add elastic search
    //TODO(MGA) : add more hibernate
    //TODO(MGA) : add test for nG
    //TODO(MGA) : add spock tests
    //TODO(MGA) : more spring Bean
    //TODO(MGA) : security of http://localhost:4200/src/api/hikes.json
    //TODO(MGA) : api/hikes and /hikes still exists !!! how about security ??
    //TODO(MGA) : hikes: Hike[]; in HikeListComponent , why hike has not been initialised  and used directly this.hikes = hikes ?
    //TODO(MGA) : jasmine
    //TODO(MGA) : change this : spring.datasource.url=jdbc:hsqldb:file:~/work/java/workspace/spAng/
    //TODO(MGA) : add spock for java
    //TODO(MGA) : ccs_class varchar(255) by default - change this
    //TODO(MGA) : bootstrap css is available only with internet connection !
}
