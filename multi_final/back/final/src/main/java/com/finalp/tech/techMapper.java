package com.finalp.tech;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;



@Mapper
public interface techMapper {
	
	@Select("select * from tech order by no desc")
	public List<techDTO> getTechListAll();
	

	@Select("SELECT * FROM itp_tech where t_tag=#{tag}")
	public List<techDTO> getTechList(@Param("tag") int tag);

	
}


