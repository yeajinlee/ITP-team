package com.finalp.tech;

import java.util.List;

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
	}


