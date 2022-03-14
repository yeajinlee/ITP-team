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
//		@GetMapping("/itTech")
//		public List<techDTO> gettechListAll() {
//			return mapper.gettechListAll();
//		}

		@GetMapping("/itTech/forum/{tag}")
		public List<techDTO> getTechList(@PathVariable("tag") int tag) {
			return mapper.getTechList(tag);
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
					String date = titleLink.substring(6, 16).replace("/", "-");
					System.out.println(date);
					System.out.println(title);
					System.out.println(titleLink);
					//리액트로 보낼 데이터
					Map<String, String> titleMap = new HashMap<String, String>();
					titleMap.put("title", title);
					titleMap.put("titleLink", titleLink);
					titleMap.put("date", date);
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
		
		@GetMapping("/itTech/main")
		public Map<String, Object> getTechMain() {
			Map<String, Object> mainMap = new HashMap<String, Object>();
			ArrayList<Object> reactArray = new ArrayList<Object>();
			ArrayList<Object> springArray = new ArrayList<Object>();
			ArrayList<Object> vueArray = new ArrayList<Object>();
			try {
				Document doc = Jsoup.connect("https://ko.reactjs.org/blog/all.html").get();
				Element element = doc.select("body h2").get(0);
				String title = element.text();
				String titleLink = element.html().replaceAll("<a class=\"css-m6cbzp\" href=\"", "");
				titleLink = titleLink.substring(0, titleLink.indexOf("\""));
				Map<String, String> reactTitleMap = new HashMap<String, String>();
				reactTitleMap.put("title", title);
				reactTitleMap.put("titleLink", titleLink);
				reactArray.add(reactTitleMap);
				mainMap.put("reactArticles", reactArray);
				
				//spring
				doc = Jsoup.connect("https://spring.io/blog").get();
				element = doc.select("body h2").get(0);
				title = element.text();
				titleLink = element.html().replaceAll("<a href=\"", "");
				titleLink = titleLink.substring(0, titleLink.indexOf("\""));
				title = title.replace(",", " ");
				Map<String, String> springTitleMap = new HashMap<String, String>();
				springTitleMap.put("title", title);
				springTitleMap.put("titleLink", titleLink);
				springArray.add(springTitleMap);
				mainMap.put("springArticles", springArray);
				
				//vue
				doc = Jsoup.connect("https://news.vuejs.org/archive").get();
				element = doc.getElementsByClass("issue-title").get(0);
				title = element.text();
				element = doc.getElementsByAttributeValueStarting("href", "/issues/").get(0);
				titleLink = element.attr("href");
				title = title.replace(",", " ");
				Map<String, String> vueTitleMap = new HashMap<String, String>();
				vueTitleMap.put("title", title);
				vueTitleMap.put("titleLink", titleLink);
				vueArray.add(vueTitleMap);
				mainMap.put("vueArticles", vueArray);
				
				System.out.println(mainMap);
			} catch (Exception e) {
				// TODO: handle exception
			}
			
			return mainMap;
		}
		
		
	}


