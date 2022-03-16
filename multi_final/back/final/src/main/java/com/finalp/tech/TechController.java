package com.finalp.tech;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class TechController {

		private techMapper mapper;
		
		@Autowired
		public TechController(techMapper mapper) {
			this.mapper = mapper;
		}
		
		@Autowired
		private TechService service;
		

		@GetMapping("/itTech/forum/{tag}")
		public List<techDTO> getTechList(@PathVariable("tag") int tag) {
			return mapper.getTechList(tag);
		}
		
		@GetMapping("/itTech/react")
		public Map<String, Object> getReactArticle() {
			return service.getReactArticle();
		}
		
		@GetMapping("/itTech/spring")
		public Map<String, Object> getSpringArticle() {
			return service.getSpringArticle();
		}
		
		@GetMapping("/itTech/vue")
		public Map<String, Object> getVueArciles() {
			return service.getVueArciles();
		}
		
		
		@GetMapping("/itTech/main")
		public Map<String, Object> getTechMain() {
			return service.getTechMain();
		}
		
		
		
	}


