package com.finalp.notice;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;


@Mapper
public interface NoticeMapper {
	@Select("select * from itp_notice")
	public List<NoticeDTO> getnoticeListAll();
	
	@Select("SELECT * FROM itp_notice where n_no=#{n_no}")
	public List<NoticeDTO> getnoticeList(@Param("n_no") String n_no);
}
