----------------------------- 모임찾기
create table itp_group(
    g_no int primary key auto_increment not null,
    g_name varchar(200) not null,
    g_title varchar(200) not null,
    g_subtitle varchar(200) not null,
    g_content varchar(3000) not null,
    g_img varchar(3000) not null,
    g_tag varchar(200) not null
    );
insert into itp_group values(1,'Maple','java프로젝트 구해요!','초보자도 환영합니다!','java프로젝트 중급 1명 초급1명 구하고 있습니다.','https://cdn.discordapp.com/attachments/946306018705563671/953159160688680980/002d941d11a3f521.png','프로젝트');
insert into itp_group values(2,'Mary','정보처리기사자격증 같이 준비하실분','2회차 시험 준비중입니다','같이 합격할 수 있게 열심히 하고 싶어요!!','https://cdn.discordapp.com/attachments/946306018705563671/953159083479941141/2_.png','스터디');
insert into itp_group values(3,'Carrie','함꼐 사이드프로젝트 진행할 개발자분 구합니다','같이 화이팅해요!','사이트 프로젝트 진행할 백엔드, 프론트엔드 개발자 3명씩 구하고 있습니다.','https://cdn.discordapp.com/attachments/946306018705563671/953159160688680980/002d941d11a3f521.png','프로젝트');
insert into itp_group values(4,'Frank','자율공부 스터디','스터디원구해요','각자 공부한 내용 체크','https://cdn.discordapp.com/attachments/946306018705563671/953159083479941141/2_.png','스터디');
insert into itp_group values(5,'Dennis','토이프로젝트 함께 만들 팀원 구합니다','백엔드, 프론트엔드 모두 환영합니다','토이프로젝트 같이 주제 정해서 진행하고 싶습니다. ','https://cdn.discordapp.com/attachments/946306018705563671/953159160688680980/002d941d11a3f521.png','프로젝트');
insert into itp_group values(6,'Donald','새벽에 같이 공부하실분 구해요','새벽 스터디','새벽에 같이 공부하실 분 구합니다.','https://cdn.discordapp.com/attachments/946306018705563671/953159083479941141/2_.png','스터디');
insert into itp_group values(7,'Kale','포트폴리오 같이 만드실분 ','같이 화이팅해요!','포트폴리오 정보 공유하고 싶습니다.','https://cdn.discordapp.com/attachments/946306018705563671/953159083479941141/2_.png','스터디');
insert into itp_group values(8,'Margaret','개발자 면접 스터디 모집','같이 화이팅해요!','개발자 면접은 처음이라 스터디 준비하려고 합니다. 3명정도 생각하고 있습니다.','https://cdn.discordapp.com/attachments/946306018705563671/953159083479941141/2_.png','스터디');
insert into itp_group values(9,'Emerald','신입개발자 이직 스터디','같이 화이팅해요!','1년차 이직하려고 하는데 같이 스터디 하실분 찾아요','https://cdn.discordapp.com/attachments/946306018705563671/953159083479941141/2_.png','스터디');
insert into itp_group values(10,'Ryan','서울 지역 초급개발자 모임하고 싶어요','같이 화이팅해요!','초급 개발자끼리 서로 정보공유하고 싶습니다','https://cdn.discordapp.com/attachments/946306018705563671/953159083479941141/2_.png','스터디');
insert into itp_group values(11,'Grace','스프링부트 프로젝트 하실분 계신가요','스프링부트','스프링부트 이용해서 프로젝트 함께 완성하실분 구합니다.','https://cdn.discordapp.com/attachments/946306018705563671/953159160688680980/002d941d11a3f521.png','프로젝트');
insert into itp_group values(12,'Donald','상반기 코테 스터디원 모집해요','코딩테스트 준비','언어는 파이썬, 자바로 할 예정이며 4명 구하고 있습니다.','https://cdn.discordapp.com/attachments/946306018705563671/953159083479941141/2_.png','스터디');
insert into itp_group values(13,'Carrie','풀스택 개발 스터디 하실분 계신가요','java,spring boot, react.js','풀스택 개발 스터디원 모집합니다.','https://cdn.discordapp.com/attachments/946306018705563671/953159083479941141/2_.png','스터디');
insert into itp_group values(14,'Mary','자바의 정석 스터디 같이해요','스터디원 구합니다!','자바의 정석 책으로 스터디 같이 하실분 구합니다.','https://cdn.discordapp.com/attachments/946306018705563671/953159083479941141/2_.png','스터디');
insert into itp_group values(15,'Ryan','프론트엔드 개발자 1명 충원해요','React.js','리액트와 스프링부트 이용해서 프로젝트 진행중입니다. 프론트엔드 개발자 한명 충원하려고 합니다.','https://cdn.discordapp.com/attachments/946306018705563671/953159160688680980/002d941d11a3f521.png','프로젝트');
insert into itp_group values(16,'Kale','unity 프로젝트준비해봐요','unity','unity 사용하는 프로젝트 같이 진행하실분 4명 구합니다.','https://cdn.discordapp.com/attachments/946306018705563671/953159160688680980/002d941d11a3f521.png','프로젝트');
insert into itp_group values(17,'Margaret','이직을 위한 면접 스터디 준비합니다','같이 화이팅해요!','이직 준비중인 개발자 입니다. 면접스터디, 정보공유하고 싶습니다.','https://cdn.discordapp.com/attachments/946306018705563671/953159083479941141/2_.png','스터디');
insert into itp_group values(18,'Kale','백엔드개발자 2명 충원해요','같이 화이팅해요!','리액트와 스프링부트 이용해서 프로젝트 진행중입니다. 프론트엔드 개발자 한명 충원하려고 합니다.','https://cdn.discordapp.com/attachments/946306018705563671/953159160688680980/002d941d11a3f521.png','프로젝트');
insert into itp_group values(19,'Ryan','앱개발 같이 하실분','같이 화이팅해요!','안드로이드 앱개발 3명 모집합니다','https://cdn.discordapp.com/attachments/946306018705563671/953159160688680980/002d941d11a3f521.png','프로젝트');
insert into itp_group values(20,'Kale','포트폴리오 준비 정보공유해요','2명모집해요','포트폴리오 준비하려고합니다. 서로 정보 공유하면서 준비해보고 싶어요','https://cdn.discordapp.com/attachments/946306018705563671/953159083479941141/2_.png','스터디');
insert into itp_group values(21,'Dennis','리액트 네이티브 스터디 모집','같이 화이팅해요!','리액트와 스프링부트 이용해서 프로젝트 진행중입니다. 프론트엔드 개발자 한명 충원하려고 합니다.','https://cdn.discordapp.com/attachments/946306018705563671/953159160688680980/002d941d11a3f521.png','프로젝트');
insert into itp_group values(22,'Grace','신입개발자 스터디','자바, 스프링프레임워크','신입개발자 스터디 모집합니다','https://cdn.discordapp.com/attachments/946306018705563671/953159083479941141/2_.png','스터디');
insert into itp_group values(23,'Kale','당근마켓 클론코딩 프로젝트 인원충원합니다','3명모집해요','당근마켓 클론코딩 웹으로 하고있습니다. 3명 인원 충원하려고 합니다.','https://cdn.discordapp.com/attachments/946306018705563671/953159160688680980/002d941d11a3f521.png','프로젝트');
insert into itp_group values(24,'Maple','앱개발 같이 하실분','안드로이드','안드로이드 스튜디오 이용해서 앱개발 하려고 합니다.','https://cdn.discordapp.com/attachments/946306018705563671/953159160688680980/002d941d11a3f521.png','프로젝트');
insert into itp_group values(25,'Grace','부산 초급개발자 모임하고 싶어요','5명모집해요','서울 지역 초급개발자 모임하고 싶어요. 5명 모집합니다.','https://cdn.discordapp.com/attachments/946306018705563671/953159083479941141/2_.png','스터디');

------------------------------------------- 소통공간
create table itp_com(
c_no int primary key auto_increment,
c_name varchar(200) not null,
c_title varchar(200) not null,
c_content varchar(3000) not null,
c_date date default (current_date) );

insert into itp_com values(1,'Grace','유망 분야가 어디일까요?','안녕하세요 이제 막 대학에 입학한 컴공 전공 새내기인데요 여기에 선배님들이 많이 계시다고 해서 질문드립니다!',default);
insert into itp_com values(2,'Maple','퇴사 고민중입니다','회사에선 더이상 저에게 일을 주지 않겟다고 하였고 저 역시 그렇다면 더이상 이 회사에 있을 필요가 없겟다고 판단하여 청내공이 입금되는대로 즉시 사직서를 내고 나갈생각입니다.',default);
insert into itp_com values(3,'Donald','안드로이드 어플','제가 안드로이드 어플을 만들고 싶은데 만들고 싶은건 배달의민족처럼 배달어플을 만들고싶어요.',default);
insert into itp_com values(4,'Dennis','오픈 소스를 구현해보는게 도움이 될까요?','그냥 아는 지식 선에서 만들어 보다가 오픈 소스 사용한게 이번이 처음인데 진짜 편하고 신세계네요.',default);
insert into itp_com values(5,'Kale','인텔리제이가 그렇게 좋은가요?','주기적인 구독료가 부담이어서 이클립스 쓰는데 얼마나 좋은가요?',default);
insert into itp_com values(6,'Maple','요즘 자바 공부중인데 어렵네요','자바 공부한지 1달정도 되어가는데 아직 너무 어렵네요',default);
insert into itp_com values(7,'Margaret','국비교육 노트북 맥북에어 m1 괜찮을까요??','4월부터 국비교육 들으려고 하는데요  프로젝트나 과제용으로 사용하려고 하는데 맥북에어 m1 괜찮을지요..찾아보니 전문가용으론 좀 부족하다는 의견들이 많던데 학원 실습용으로는 괜찮을까요?',default);
insert into itp_com values(8,'Emerald','href를 herf로 써놓고 왜 안되지 했던 나 이대로 괜찮은걸까? ','저거 오타 찾는데 1시간 걸렸어요 저 어떡하죠?',default);
insert into itp_com values(9,'Donald','인강추천 좀 해주세요.','비전공자이고 백엔드쪽에 대해서 공부하고 그쪽으로 취업을 하기 원하는데 좋은 인강이나 사이트 알려주시면 감사하겠습니다.',default);
insert into itp_com values(10,'Carrie','한가지 언어 배울때 걸리는 시간','보통 자바나 코틀린처럼 한가지의 언어를 독학으로 배우는데 걸리는 기간은 얼마나 걸릴까요?',default);
insert into itp_com values(11,'Mary','그램17 인거같은데 개발용으로 괜찮나요?','중고나라에 올라온건데 이 제품이에요! 가격은108만원이구요',default);
insert into itp_com values(12,'Maple','모두 화이팅!!!','모두 화이팅! 해서 열공하자구여!!',default);
insert into itp_com values(13,'Dennis','개발자님들 사용하는 모니터','개발자님들 데스크를 보면 피벗해서 많이 사용들 하시는데 보통 어떤 모니터를 많이 사용하나요?',default);
insert into itp_com values(14,'Donald','게임개발자로 이직 하고싶습니다.','어디서부터 어떻게 공부 해야 할지 방향 제시와 현직 게임 개발자분 조언 좀 부탁드립니다.',default);
insert into itp_com values(15,'Frank','요즘 트랜드 언어를 공부하면서 느낀점','라떼보다 쉽네...쉬워...jsp 날코딩하던게 엊그제 같은데... IE 왼쪽하단에 노란 삼각형 느낌표만 보고 JS파일에 alert를 줄마다 찍던게 엊그제 같은디...',default);
insert into itp_com values(16,'Donald','SQLD 시험 난이도좀 알려주세요 ㅠㅠ','내일 SQLD 시험보러갑니다 ㅎㅎ 떨리네요..공부는 한달 반 했고, 책은 노랭이만 공부했어요.',default);
insert into itp_com values(17,'Carrie','국비교육학원 추천해주세요.','비전공자이고 백엔드쪽에 대해서 공부하고 그쪽으로 취업을 하기 원하는데 국비교육 헉원 추천부탁드려요.',default);
insert into itp_com values(18,'Kale','금융권 it','금융권 it 가고 싶은데 뭘 우선적으로 준비해야 될까요?',default);
insert into itp_com values(19,'Dennis','리액트랑 뷰 고민되네요','리액트랑 뷰 중에 뭘 배우는게 더 좋을까요?',default);
insert into itp_com values(20,'Frank','신입은 백엔드 맡을일이 없나요?','서버 개발자로 역량을 깊게 그리고 오래 키워가고 싶은데 질문이 있어 글을 남겨봅니다.',default);
insert into itp_com values(21,'Margaret','개발자 이직 하고싶어요','이직 면접은 어떻게 준비해야 할까요',default);
insert into itp_com values(22,'Carrie','자바 vs 코틀린','안녕하세요! 요즘 코틀린이 보편화가 되었다는 이야기가 들리고 있습니다. 정말로 기업들에서 자바 보다 코틀린으로 더 많이 채택하나요 ㅠ.ㅠ..?',default);
insert into itp_com values(23,'Frank','풀스택 개발채용은 다 작은 기업인가요?','제대로된 개발자 몇 없는  작은 기업일까요? 보통 IT가 아닌 웹서버가 필요한 회사가 많을까요?',default);
insert into itp_com values(24,'Dennis','자바스크립트 인강추천 좀 해주세요.','자바스크립트 관련 좋은 인강이나 사이트 알려주시면 감사하겠습니다.',default);
insert into itp_com values(25,'Ryan','자바 책 추천 부탁드려요','자바 공부하려는데 책 어떤책이 좋을까요?',default);


-------------------------------------------------- 댓글
create table itp_replygroup(
rg_rno int primary key auto_increment,
rg_no int not null,
rg_content varchar(3000) not null,
rg_name varchar(200) not null,
rg_date date default(current_date),
foreign key(rg_rno) references itp_group(g_no) on DELETE CASCADE);


insert into itp_replygroup values(1,25,'저도 부산살아요! 같이 하고 싶습니다! Carrie@naver.com','Carrie',default);
insert into itp_replygroup values(2,23,'참여하고싶습니다. Ryan@naver.com ','Ryan',default);
insert into itp_replygroup values(3,22,'참여 원합니다! Margaret@naver.com','Margaret',default);
insert into itp_replygroup values(4,20,'참여 원합니다 Mary@gmail.com','Mary',default);
insert into itp_replygroup values(5,14,'어껗게 진행하실 예정이신가요?','Donald',default);
insert into itp_replygroup values(6,23,'저도 참여 가능할까요 ','Grace',default);
insert into itp_replygroup values(7,22,'신입개발자입니다. 참여원해요','Dennis',default);
insert into itp_replygroup values(8,20,'참여 원합니다 Mary@gmail.com','Mary',default);
insert into itp_replygroup values(9,14,'참여하고 싶어요','Donald',default);
insert into itp_replygroup values(10,15,'저도 참여 가능할까요 ','Grace',default);
insert into itp_replygroup values(11,9,'참여원해요','Dennis',default);


create table itp_reply(
r_rno int primary key auto_increment,
r_no int not null,
r_content varchar(3000) not null,
r_name varchar(200) not null,
r_date date default(current_date),
foreign key(r_rno) references itp_com(c_no) on DELETE CASCADE);

insert into itp_reply values(1,25,'자바의정석 추천합니다','Frank',default);
insert into itp_reply values(2,21,'저는 스터디 구해서 준비하려고 합니다','Carrie',default);
insert into itp_reply values(3,12,'화이팅!!!','Maple',default);
insert into itp_reply values(4,24,'저는 유튜브 검색해서 보고있습니다','Donald',default);
insert into itp_reply values(5,17,'멀티캠퍼스 추천이요!','Emerald',default);
insert into itp_reply values(6,17,'저도 멀티캠퍼스 추천합니다!','Kale',default);
insert into itp_reply values(7,21,'저는 코테 강의 들으면서 준비하고 있습니다','Mary',default);
insert into itp_reply values(8,21,'저는 인프런에서 강의 결제해서 듣고있어요','Grace',default);
insert into itp_reply values(9,16,'어려워요ㅠㅠㅠ','Maple',default);

-------------------------------------------------------------------------------------------- 신청현황
create table itp_apply(
a_ano int primary key auto_increment,
a_name varchar(200) not null,
a_email varchar(300) not null,
a_content varchar(3000) not null,
a_gno int not null,
g_name varchar(200) not null
);

insert into itp_apply values(1,'Maple','Maple@naver.com','신청해보고 싶어요! 프론트엔드개발자입니다',13,'Carrie');
insert into itp_apply values(2,'Frank','Frank@naver.com','정처기필기시험 준비중입니다 참여하고싶어요',2,'Mary');
insert into itp_apply values(3,'Mary','Mary@naver.com','참여하고싶어요',2,'Ryan');
commit;
drop table itp_apply;
select a.*,g.g_title from itp_apply a inner join itp_group g on a.a_gno=g.g_no where a_name='Frank';
select a.* from itp_apply a,itp_group g where a.a_gno=g.g_no;