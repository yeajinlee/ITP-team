package com.finalp.notice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
public class NoticeController {
	@Autowired
	private NoticeMapper mapper;
	
	@Autowired
	public NoticeController(NoticeMapper mapper) {
		this.mapper = mapper;
	}
	@GetMapping("/notice")
	public List<NoticeDTO> getnoticeListAll() {
		return mapper.getnoticeListAll();
	}

	@GetMapping("/notice/{n_no}")
	public List<NoticeDTO> getnoticeList(@PathVariable("n_no") String n_no) {
		return mapper.getnoticeList(n_no);
	}
}
