package com.mga;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import static springfox.documentation.builders.PathSelectors.regex;

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

	@Bean
	public Docket newsApi() {
		return new Docket(DocumentationType.SWAGGER_2)
				.groupName("greetings")
				.apiInfo(apiInfo())
				.select()
				.paths(regex("/greeting.*"))
				.build();
	}

	private ApiInfo apiInfo() {
		return new ApiInfoBuilder()
				.title("Spring REST Sample with Swagger")
				.description("Spring REST Sample with Swagger")
				.license("Apache License Version 2.0")
				.version("2.0")
				.build();
	}
}
