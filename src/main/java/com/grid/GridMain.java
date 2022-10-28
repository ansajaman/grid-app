package com.grid;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.grid")
public class GridMain {
    public static void main(String[] args) {
        ConfigurableApplicationContext run = SpringApplication.run(GridMain.class, args);
        run.registerShutdownHook();
    }
}