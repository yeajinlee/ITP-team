package com.finalp.itTrend;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.Reader;
import java.net.URI;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.tomcat.util.json.JSONParser;
import org.apache.tomcat.util.json.ParseException;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.jackson.JsonObjectDeserializer;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.google.gson.Gson;
import com.sun.xml.bind.api.impl.NameConverter.Standard;


@RestController
public class ItTrendController {
	LocalDate now = LocalDate.now();
	LocalDate twodaysago = now.minusDays(2);
	LocalDate weekago = now.minusDays(7);
	Object topObject = new Object();
	Map<String, Object> trendDetail = new HashMap<String, Object>();
	Map articlesMap = new HashMap();
	String content = null;
	
	@GetMapping("/article1")
	public Object getArticle1() {
		// 실제 api 호출 부분
			URI uri = UriComponentsBuilder
					.fromUriString("https://newsapi.org/")
					.path("v2/top-headlines")
					.queryParam("country", "kr")
					.queryParam("category", "technology")
//					.queryParam("q", "테크")
					.queryParam("pageSize", 3)
					.queryParam("page", 1)
					.queryParam("apiKey", "334118d2023245d0833e4be5c2581862")
					.encode(Charset.forName("utf-8"))
					.encode()
					.build()
					.toUri();
			RequestEntity<Void> req = RequestEntity
									.get(uri)
									.build();
			RestTemplate restTemplate = new RestTemplate();
			ResponseEntity<Object> result = restTemplate.exchange(req, Object.class);
			topObject = result.getBody();

		//dummy api 부분
//		try {
//			ObjectMapper om = new ObjectMapper();
//			om.enable(SerializationFeature.INDENT_OUTPUT);
//			topObject = om.readValue(new File("dummyApi/dummyApi1.json"), Object.class);
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
		
		
		return topObject;
	}
	
	
	@GetMapping("/article2")
	public Object getArticle2() {
		URI uri = UriComponentsBuilder
				.fromUriString("https://newsapi.org/")
				.path("v2/top-headlines")
				.queryParam("country", "kr")
				.queryParam("category", "technology")
				.queryParam("pageSize", 13)
				.queryParam("page", 1)
				.queryParam("apiKey", "334118d2023245d0833e4be5c2581862")
				.encode(Charset.forName("utf-8"))
				.encode()
				.build()
				.toUri();
		RequestEntity<Void> req = RequestEntity
								.get(uri)
								.build();
		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<Object> result = restTemplate.exchange(req, Object.class);
		return result.getBody();
		
	}
	
	@GetMapping("/itTrend/{title}")
	public Map<String, Object> getTrendDetail(@PathVariable("title") String urlTitle) {
		
		//반환할 Map
		
		String oriTitle = urlTitle.replaceAll("-", " ");
		System.out.println(oriTitle);
		try {
			URI uri = UriComponentsBuilder
					.fromUriString("https://newsapi.org/")
					.path("v2/top-headlines")
					.queryParam("country", "kr")
					.queryParam("category", "technology")
					.queryParam("q", oriTitle)
					.queryParam("pageSize", 1)
					.queryParam("page", 1)
					.queryParam("apiKey", "334118d2023245d0833e4be5c2581862")
					.encode(Charset.forName("utf-8"))
					.encode()
					.build()
					.toUri();
			RequestEntity<Void> req = RequestEntity
									.get(uri)
									.build();
			RestTemplate restTemplate = new RestTemplate();
			ResponseEntity<Object> result = restTemplate.exchange(req, Object.class);
			//api 검색결과 객체
			Object trendInfo = result.getBody();
			//Map으로 변환
			ObjectMapper om = new ObjectMapper();
			Map trendMap = om.convertValue(trendInfo, Map.class);
			//Map내의 실제 데이터부분 articles를 ArrayList로
			ArrayList articles = (ArrayList) trendMap.get("articles");
			//ArrayList안에 Map으로 데이터가 들어있는 구조
			articlesMap = (Map) articles.get(0);
			
			String url = articlesMap.get("url").toString();
			getContent(url);
			
			//Map에 데이터 추가
			trendDetail.put("title", articlesMap.get("title"));
			trendDetail.put("urlToImage", articlesMap.get("urlToImage"));
			trendDetail.put("content", content);
			trendDetail.put("description", articlesMap.get("description"));
			trendDetail.put("url", url);
			 
		} catch (Exception e) {
			e.printStackTrace();
			content = "오류가 발생했습니다. 관리자에게 문의해주세요.";
		}

		return trendDetail;
	}
	
	public void getContent(String url){
		Document article;
		
		try {
			article = Jsoup.connect(url).get();
			Elements articleElements = new Elements();

			// 본문텍스트 추출
			articleElements = article.select("[itemprop=articleBody]");
			if (url.contains("asiatime.co.kr")) articleElements = article.select("body div p");
			if (url.contains("tokenpost.kr")) articleElements = article.select(".viewArticle p");
			if (url.contains("coinreaders")) articleElements = article.select("#textinput");
			if (url.contains("etoday.co.kr")) articleElements = article.select(".view_contents");
			if (url.contains("dispatch.co.kr")) articleElements = article.select("article");
			if (url.contains("news.nate.com")) articleElements = article.select("#articleContetns");
			if (url.contains("news.samsung.com")) articleElements = article.select(".text_cont");
			content = articleElements.text();
			if (url.contains("youtube.com") || url.contains("biz.chosun.com") || articleElements.hasText() == false) {
				content = null;
			}
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}
	
	
}
