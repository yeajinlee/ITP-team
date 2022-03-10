package com.finalp.tech;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
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
		@GetMapping("/itTech")
		public List<techDTO> gettechListAll() {
			return mapper.gettechListAll();
		}

		@GetMapping("/itTech/{no}")
		public List<techDTO> getnoticeList(@PathVariable("no") int no) {
			return mapper.gettechList(no);
		}
		
		@GetMapping("/itTech/react")
		public Map<String, Object> getReactArticle() {
			Map<String, Object> articlesMap = new HashMap<String, Object>();
			ArrayList<Object> articlesArray = new ArrayList<Object>();
			Map<String, String> titleMap = new HashMap<String, String>();
//			Document doc = Jsoup.connect("https://ko.reactjs.org/blog/all.html").get();
			try {
				Document reactDoc = Jsoup.connect("https://ko.reactjs.org/blog/all.html").get();
				Element titleE;
				
				for(int i = 0; i <= 2; i++) {
					titleE = reactDoc.select("body h2").get(i);
					String title = titleE.text();
					String titleLink = titleE.html().replaceAll("<a class=\"css-m6cbzp\" href=\"", "");
					titleLink = titleLink.substring(0, titleLink.indexOf("\""));
					System.out.println(title);
					//리액트로 보낼 데이터
					titleMap.put("title", title);
					titleMap.put("titleLink", titleLink);
					articlesArray.add(titleMap);
					articlesMap.put("articles", articlesArray);
				}
			
				System.out.println(articlesMap);
			} catch (IOException e) {
				e.printStackTrace();
			}
			
			
			
			
			return articlesMap;
		}
	}


