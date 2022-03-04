package com.finalp.tech;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;



@Mapper
public interface techMapper {
	
	@Select("select * from tech")
	public List<techDTO> gettechListAll();
	

	@Select("SELECT * FROM tech where no=#{no}")
	public List<techDTO> gettechList(@Param("no") int no);

	
}


