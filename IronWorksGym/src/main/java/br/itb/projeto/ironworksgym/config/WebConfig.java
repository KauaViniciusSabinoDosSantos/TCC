package br.itb.projeto.ironworksgym.config;

import java.rmi.registry.Registry;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import jakarta.servlet.http.WebConnection;

@Configuration
public class WebConfig implements WebMvcConfigurer{
	
	public void addCorsMappings(CorsRegistry corsRegistry) {
		corsRegistry.addMapping("/**")
			.allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD", "TRACE", "CONNECT")
			.allowCredentials(false).maxAge(3600);
			
	}
}
