package com.finalp.tech;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Data
public class techDTO {
	private int no;//번호
	private String title;//제목
	private String subtitle;//부제목
	private String content;//내용
	private String img;//이미지
	
	public techDTO() {
		// TODO Auto-generated constructor stub
	}
	public techDTO(int no, String title, String subtitle,String content,String img) {
		this.no=no;
		this.title=title;
		this.subtitle=subtitle;
		this.content=content;
		this.img=img;
	}
}
