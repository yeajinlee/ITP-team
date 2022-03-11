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
			Map<String, Object> reactMap = new HashMap<String, Object>();
			ArrayList<Object> reactArray = new ArrayList<Object>();
			
//			Document doc = Jsoup.connect("https://ko.reactjs.org/blog/all.html").get();
			try {
				Document reactDoc = Jsoup.connect("https://ko.reactjs.org/blog/all.html").get();
				Element reactEl;
				
				for(int i = 0; i <= 2; i++) {
					reactEl = reactDoc.select("body h2").get(i);
					String title = reactEl.text();
					String titleLink = reactEl.html().replaceAll("<a class=\"css-m6cbzp\" href=\"", "");
					titleLink = titleLink.substring(0, titleLink.indexOf("\""));
					System.out.println(title);
					//리액트로 보낼 데이터
					Map<String, String> titleMap = new HashMap<String, String>();
					titleMap.put("title", title);
					titleMap.put("titleLink", titleLink);
					reactArray.add(i, titleMap);
					System.out.println(reactArray);
					reactMap.put("articles", reactArray);
				}
			
				System.out.println(reactMap);
			} catch (IOException e) {
				e.printStackTrace();
			}
			return reactMap;
		}
		
		@GetMapping("/itTech/spring")
		public Map<String, Object> getSpringArticle() {
			Map<String, Object> springMap = new HashMap<String, Object>();
			ArrayList<Object> springArray = new ArrayList<Object>();
			try {
				Document springDoc = Jsoup.connect("https://spring.io/blog").get();
				Element springEl;
				
				for(int i = 0; i <= 2; i++) {
					springEl = springDoc.select("body h2").get(i);
					String title = springEl.text();
					String titleLink = springEl.html().replaceAll("<a href=\"", "");
					titleLink = titleLink.substring(0, titleLink.indexOf("\""));
					title = title.replace(",", " ");
					System.out.println(title);
					//리액트로 보낼 데이터
					Map<String, String> titleMap = new HashMap<String, String>();
					titleMap.put("title", title);
					titleMap.put("titleLink", titleLink);
					springArray.add(i, titleMap);
					System.out.println(springArray);
					springMap.put("articles", springArray);
				}
			
				System.out.println(springMap);
			} catch (IOException e) {
				e.printStackTrace();
			}
		
			return springMap;
		}
		
		@GetMapping("/itTech/vue")
		public Map<String, Object> getVueArciles() {
			Map<String, Object> vueMap = new HashMap<String, Object>();
			ArrayList<Object> vueArray = new ArrayList<Object>();
			try {
				Document vueDoc = Jsoup.connect("https://news.vuejs.org/archive").get();
				Element vueEl;
				
				for(int i = 0; i <= 2; i++) {
					vueEl = vueDoc.getElementsByClass("issue-title").get(i);
					String title = vueEl.text();
					vueEl = vueDoc.getElementsByAttributeValueStarting("href", "/issues/").get(i);
					String titleLink = vueEl.attr("href");
//					titleLink = titleLink.substring(0, titleLink.indexOf("\""));
					title = title.replace(",", " ");
					System.out.println(title);
					System.out.println(titleLink);
					//리액트로 보낼 데이터
					Map<String, String> titleMap = new HashMap<String, String>();
					titleMap.put("title", title);
					titleMap.put("titleLink", titleLink);
					vueArray.add(i, titleMap);
					System.out.println(vueArray);
					vueMap.put("articles", vueArray);
				}
			
				System.out.println(vueMap);
			} catch (IOException e) {
				e.printStackTrace();
			}
			
			return vueMap;
		}
	}


