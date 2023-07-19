package com.project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@SpringBootApplication
//@SpringBootApplication(exclude={DataSourceAutoConfiguration.class})
public class ProjectmgmtApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjectmgmtApplication.class, args);
		System.out.println("The Project management project has been executed successfully");
	}

}
