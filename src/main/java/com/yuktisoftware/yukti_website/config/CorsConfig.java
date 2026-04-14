package com.yuktisoftware.yukti_website.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                // local environment
//                registry.addMapping("/**")
//                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
//                        .allowedHeaders("*")
//                        .allowCredentials(false);

                registry.addMapping("/**")
                        .allowedOrigins("https://www.yuktisoftware.com")
                        .allowedMethods("GET", "POST")
                        .allowedHeaders("*")
//                        .allowedHeaders("Content-Type", "Authorization")
                        .allowCredentials(false);
            }
        };
    }
}