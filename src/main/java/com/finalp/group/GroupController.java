package com.finalp.group;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;




@CrossOrigin("*")
@RestController
public class GroupController {
	@Autowired
	private GroupMapper mapper;
	
	@Autowired
	public GroupController(GroupMapper mapper) {
		this.mapper = mapper;
	}
	
	@GetMapping("/group")
	public int getgroupListAll() {
		return mapper.getgroupListAll();
	}
	
	@GetMapping("/group/{g_no}")
	public List<GroupDTO> getgroupdetailList(@PathVariable("g_no") int g_no) {
		return mapper.getgroupdetailList(g_no);
	}
	
	//전체내용조회
	@GetMapping("/group/listAll")
	public List<GroupDTO> getgroupList(){
		return mapper.getgroupListAlll();  
	}
	
	//페이징 조회
		@GetMapping("/group/list")
		public List<GroupDTO> getgroupList(@RequestParam("page") String page){
			return mapper.getgroupList(page);  
		}
		
			//추가
		@RequestMapping(value="/addgroup",method=RequestMethod.POST)
	     int insertGroup(
	    		 @RequestParam(value="g_name",required=false) String g_name,
				@RequestParam(value="g_title") String g_title,
				@RequestParam(value="g_subtitle",required=false) String g_subtitle,
				@RequestParam(value="g_content",required=false) String g_content,
				@RequestParam(value="g_img",required=false) String g_img,
				@RequestParam(value="g_tag",required=false) String g_tag
				) {
			
			return mapper.insertGroup(g_name,g_title,g_subtitle,g_content,g_img,g_tag);
		}
		
	//검색 제목으로
		@GetMapping("/group/list/searchbytitle")
		public List<GroupDTO> getGroupListSearch(@RequestParam("page") String page, @RequestParam(value="g_title",required=false) String g_title){
			return mapper.getGroupListSearch(page,g_title); 
		}
		
		@PutMapping("/updateGroup/{g_no}")
		public int updateGroup(@PathVariable("g_no") int g_no,
				@RequestParam(value="g_title",required=false) String g_title,
				@RequestParam("g_content") String g_content
		
				) { 
			return mapper.updateGroup(g_no,g_title,g_content);
		
		}
		

		@DeleteMapping("/deleteGroup/{g_no}")
		public int deleteGroup(@PathVariable("g_no") int g_no) {
			return mapper.deleteGroup(g_no);
		}

}
