package com.finalp.tech;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;



@Mapper
public interface techMapper {
	
	@Select("select * from itp_tech order by t_no desc")
	public List<techDTO> getTechListAll();
	

	@Select("SELECT * FROM itp_tech where t_tag=#{tag} order by t_no desc")
	public List<techDTO> getTechList(@Param("tag") String tag);
	
	@Insert("insert into itp_tech(t_tag, t_name, t_content) values(#{t_tag}, #{t_name}, #{t_content})")
	public int insertTech(@Param("t_tag") String t_tag,
									@Param("t_name") String t_name,
									@Param("t_content") String t_content);
	
	@Update("update itp_tech set t_content=#{content} where t_no = #{no}")
	public int updateTech(@Param("content") String content, @Param("no") int no);
	
	
	@Delete("delete from itp_tech where t_no = #{no}")
	public int deleteTech(@Param("no") int no);
	
}


