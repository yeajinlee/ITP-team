package com.finalp.itTrend;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.Reader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URI;
import java.net.URL;
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
import org.hibernate.service.spi.InjectService;
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
import com.google.gson.JsonObject;
import com.sun.xml.bind.api.impl.NameConverter.Standard;



@RestController
public class ItTrendController {
	Object topObject = new Object();
	Map<String, Object> trendDetail = new HashMap<String, Object>();
	Map articlesMap = new HashMap();
	String content = null;
	String summary = null;
	String jsonInputString = null;
	
	//트렌드메인 api 두 번 호출해야하는 부분 수정 예정
//	@GetMapping("/itTrend")
//	public Object getTrend() {
//		URI uri = UriComponentsBuilder
//				.fromUriString("https://newsapi.org/")
//				.path("v2/top-headlines")
//				.queryParam("country", "kr")
//				.queryParam("category", "technology")
//				.queryParam("pageSize", 13)
//				.queryParam("page", 1)
//				.queryParam("apiKey", "334118d2023245d0833e4be5c2581862")
//				.encode(Charset.forName("utf-8"))
//				.encode()
//				.build()
//				.toUri();
//		RequestEntity<Void> req = RequestEntity
//								.get(uri)
//								.build();
//		RestTemplate restTemplate = new RestTemplate();
//		ResponseEntity<Object> result = restTemplate.exchange(req, Object.class);
//		return result.getBody();
//		
//	}
	
	
	@GetMapping("/article1")
	public Object getArticle1() {
		// 실제 api 호출 부분
			URI uri = UriComponentsBuilder
					.fromUriString("https://newsapi.org/")
					.path("v2/top-headlines")
					.queryParam("country", "kr")
					.queryParam("category", "technology")
					.queryParam("pageSize", 3)
					.queryParam("page", 1)
					.queryParam("q", "it")
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
				.queryParam("q", "it")
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
			content.replaceAll("\"", " ");
			if (content.length() > 2000) {
				content = content.substring(0, 1950);
			}
			System.out.println(content);
			getSummary(content);
			
			//Map에 데이터 추가
			trendDetail.put("title", articlesMap.get("title"));
			trendDetail.put("urlToImage", articlesMap.get("urlToImage"));
			trendDetail.put("content", content);
			trendDetail.put("summary", summary);
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
			articleElements = article.select("[itemprop=articleBody] p");
			if (url.contains("asiatime.co.kr")) articleElements = article.select("body div p");
			if (url.contains("tokenpost.kr")) articleElements = article.select(".viewArticle p");
			if (url.contains("coinreaders")) articleElements = article.select("#textinput");
			if (url.contains("etoday.co.kr")) articleElements = article.select(".view_contents");
			if (url.contains("dispatch.co.kr")) articleElements = article.select("article");
			if (url.contains("news.nate.com")) articleElements = article.select("#articleContetns");
			if (url.contains("news.samsung.com")) articleElements = article.select(".text_cont");
			if (url.contains("autopostkorea.com")) articleElements = article.select("[itemprop=text] p");
			content = articleElements.text();
			if (url.contains("youtube.com") || url.contains("biz.chosun.com") || articleElements.hasText() == false) {
				content = "본문보기가 제공되지 않는 기사입니다.";
			}
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}
	
	//요약 api
	public void getSummary(String content) throws Exception {
		System.out.println("getSummary content: " + content);
		StringBuilder response = new StringBuilder();
		URL url = new URL("https://naveropenapi.apigw.ntruss.com/text-summary/v1/summarize");
		HttpURLConnection conn = (HttpURLConnection) url.openConnection();
		conn.setRequestMethod("POST");
		conn.setRequestProperty("X-NCP-APIGW-API-KEY-ID", );
		conn.setRequestProperty("X-NCP-APIGW-API-KEY", );
		conn.setRequestProperty("Content-Type", "application/json; utf-8");
		conn.setDoOutput(true);
		jsonInputString = "{\r\n" + 
				"  \"document\": {\r\n" + 
				"    \"content\": \" " + content + " \"\r\n " +
				"  },\r\n" + 
				"  \"option\": {\r\n" + 
				"    \"language\": \"ko\",\r\n" + 
				"    \"model\": \"news\",\r\n" + 
				"    \"tone\": 0,\r\n" + 
				"    \"summaryCount\": 2\r\n" + 
				"  }\r\n" + 
				"}";
		
		try {
			OutputStream os = conn.getOutputStream();
			byte[] input = jsonInputString.getBytes("utf-8");
			os.write(input, 0, input.length);

			BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream(), "utf-8"));

			String responseLine = null;
			while ((responseLine = br.readLine()) != null) {
				response.append(responseLine.trim());
			}
			System.out.println(response.toString());

			os.close();
			
			summary = response.toString();
		} catch (Exception e) {
			e.printStackTrace();
//			String sContent = new String(content.getBytes(), 0, 3000);
//			try {
//				getSummary(sContent);
//			} catch (Exception e2) {
				summary = " ";
				
//			}
			
		}
		
		
	
	}
	
}
