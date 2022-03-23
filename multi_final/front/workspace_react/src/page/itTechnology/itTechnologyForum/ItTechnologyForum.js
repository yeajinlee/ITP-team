import React, { useState , useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import ItTechnologyWrite from '../ItTechnologyWrite';
import styled from 'styled-components';
import { BsChevronRight } from 'react-icons/bs';

const TopCategory = styled.h5`
text-align: center;
margin-top: 30px;
`
const TopLink = styled(Link)`
text-decoration: none;
color: black;
margin-right: 10px;
margin-left: 10px;
`

const Reply = styled.div`
  justify-content: center;
  width: 1024px; // 2560(QHD), 1920(FHD), 1680, 1440
  margin: 0 auto;
  overflow: hidden;
  input {
    width: 900px;
    border-radius: 5px;
    border: 1px solid black;
    height: 60px;
    margin-bottom: 15px;
  }

  #editBtn, #delBtn {
    margin-left: 8px;
    width: 45px;
    border: 1px solid #3b9d9d;
    background-color: #3b9d9d;
    color: white;
    border-radius: 5px;
    outline: 0;
  }
  #editRight {
    width: 120px;
    flex-direction: column;
  }
  #editBtns {
      float:right;
      margin-bottom: 8px;
  }
  

  #doneBtn, #cancelBtn {
    margin-left: 8px;
    height: 26px;
    width: 45px;
    border: 1px solid #3b9d9d;
    background-color: #3b9d9d;
    color: white;
    border-radius: 5px;
    outline: 0;
    
  }

`;
const Content = styled.div`
margin-top: 20px;
margin-bottom: 5px;
display: flex;

`
const ReplyTag = styled.p`
font-weight: bold;
width: 128px;
`
const ReplyContent = styled.p`
width: 700px;
line-height: 25px;
`

const ReplyNameAndDate = styled.p`
width: 410px;
text-align: right;
span{
    margin-left: 10px;
}
`

const ItTechnologyForum = () => {
    const {tag} = useParams();
    const {no} = useParams();
    const [techForum, setTechForum] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [editClicked, setEditClicked] = useState(false);
    const [content, setContent] = useState(null);
    let [editNo, setEditNo] = useState('');
    const[contentCnt, setContentCnt] = useState(null);
    const[forumCnt, setForumCnt] = useState('0');

    const handleContent = (e) => {
        setContent(e.target.value);
        console.log(content);
        setContentCnt(e.target.value.length);
    }

    const editCancel = (e) => {
        setEditClicked(false);
        setContentCnt(null);
    }

    useEffect(() => {
        const fetchForumCnt = async() => {
            setLoading(true);
            try {
                const response = await axios.get('http://localhost:8085/itTech/forum/count');
                setForumCnt(response.data);
                console.log(response);
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        };
        fetchForumCnt();
    }, []);


    useEffect(() => {
        const fetchForum = async() => {
            setLoading(true);
            try {
                if(tag == null) {
                    const response = await axios.get('http://localhost:8085/itTech/forum');
                    setTechForum(response.data);
                    console.log(response);
                    console.log(response.data.length);
                }
                else {
                    const response = await axios.get(`http://localhost:8085/itTech/forum/${tag}`)
                    setTechForum(response.data);
                    console.log(response);
                }
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        };
        fetchForum();
    }, [tag, no]);

    const editComment = (content, no) => {
        console.log(content);
        setEditClicked(true);
        console.log(no);
        setEditNo(no);
        console.log(editNo);
    }

    const doneEdit = (no) => {
        console.log(no);
        if (document.getElementById('editInput') === null) {
            alert("내용을 입력하세요.");
        } else {
            axios.put(`http://localhost:8085/itTech/forum/updateTech/${no}`, null,{params: {'content': content}})
            .then(document.location.href='/itTech/forum')
            .catch(error => {
                console.log(error);
            })
        }
    }

    const deleteComment = (no) => {
        console.log(no);
        if(window.confirm("댓글을 삭제할까요?")){
            axios.delete(`http://localhost:8085/itTech/forum/deleteTech/${no}`)
            .then(document.location.href='/itTech/forum')
            .catch(error => {
            console.log(error);
            })
        } else {
            console.log("삭제 취소");
        }
        
    }
    

    if(loading) return <div>댓글을 가져오는중</div>;
    if(error) return <div>오류가 발생했습니다. 관리자에게 문의해주세요.</div>
    if(!techForum) return <div>작성된 댓글이 없습니다.</div>
    

    return (
      <div>
        <div className='itTechPageTitle'> <BsChevronRight/> 기술 포럼</div>
        
        <TopCategory>
        {(window.location.pathname === "/itTech/forum" ? <b><TopLink to="/itTech/forum">전체 ({forumCnt.allCount})</TopLink></b> : <TopLink to="/itTech/forum">전체 ({forumCnt.allCount})</TopLink>)}|
        {(window.location.pathname === "/itTech/forum/React" ? <b><TopLink to="/itTech/forum/React">React ({forumCnt.React})</TopLink></b> : <TopLink to="/itTech/forum/React">React ({forumCnt.React})</TopLink>)}|
        {(window.location.pathname === "/itTech/forum/Spring" ? <b><TopLink to="/itTech/forum/Spring">Spring ({forumCnt.Spring})</TopLink></b> : <TopLink to="/itTech/forum/Spring">Spring ({forumCnt.Spring})</TopLink>)}|
        {(window.location.pathname === "/itTech/forum/Vue" ? <b><TopLink to="/itTech/forum/Vue">Vue ({forumCnt.Vue})</TopLink></b> : <TopLink to="/itTech/forum/Vue">Vue ({forumCnt.Vue})</TopLink>)}
        </TopCategory>
        <br />
        <ItTechnologyWrite />
        <br />
        {techForum.map((techForum, t_no) => (
            <Reply key={t_no}>
                {editClicked && techForum.t_no === editNo ? (
                    <Content>
                        <ReplyTag>{techForum.t_tag}</ReplyTag>
                            <input type="text" id="editInput" defaultValue={techForum.t_content} onChange={(e) => handleContent(e)}></input>
                                <div id="editRight">
                                    <div id='editBtns'>
                                        <button id="doneBtn" onClick={() => doneEdit(techForum.t_no)}>
                                        수정
                                        </button>
                                        <button id='cancelBtn' onClick={() => editCancel()}>취소</button>
                                    </div>
                                    <span style={{color:'grey'}}>&nbsp; {contentCnt}/900</span>
                                </div>
                    </Content>
                ) : (
                    <Content>
                        <ReplyTag>{techForum.t_tag}</ReplyTag>
                        {/* <p>{techForum.t_parentno}</p> */}
                        <ReplyContent>{techForum.t_content}</ReplyContent>
                        <ReplyNameAndDate>{techForum.t_name} | {techForum.t_date}
                        {sessionStorage.getItem('m_name') === techForum.t_name || localStorage.getItem('m_name') === techForum.t_name 
                            || sessionStorage.getItem('m_name') === 'manager' || localStorage.getItem('m_name') === 'manager'
                        ? (
                            <span>
                                <button id="editBtn" onClick={() => editComment(techForum.t_content, techForum.t_no)}>
                                    수정
                                </button>
                                <button id="delBtn" onClick={() => deleteComment(techForum.t_no)}>
                                    삭제
                                </button>
                            </span>
                        ) : (
                            null
                        )}
                        </ReplyNameAndDate>
                        
                        {/* <button id="replyBtn">답글</button> */}
                    </Content>
                )
            }


            <hr />
          </Reply>
        ))}
      </div>
    );
}

export default ItTechnologyForum;