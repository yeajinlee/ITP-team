package com.finalp.tech;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;



@Mapper
public interface techMapper {
	
	@Select("select * from itp_tech order by t_no desc")
	public List<techDTO> getTechListAll();
	

	@Select("SELECT * FROM itp_tech where t_tag=#{tag}")
	public List<techDTO> getTechList(@Param("tag") String tag);
	
	

	
}


