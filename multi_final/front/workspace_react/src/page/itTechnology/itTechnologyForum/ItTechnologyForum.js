import React, { useState , useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import ItTechnologyWrite from '../ItTechnologyWrite';
import styled from 'styled-components';

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

const Reple = styled.div`
justify-content: center;
  width: 1024px; // 2560(QHD), 1920(FHD), 1680, 1440
  margin: 0 auto;
  overflow: hidden;
  input {
      width: 864px;
      border-radius: 5px;
      border: 1px solid black;
      height: 40px;
      margin-right: 16px;
  }

  button {
      margin-right: 8px;
      width: 40px;
      border: 1px solid #3b9d9d;
      background-color: #3b9d9d;
      color: white;
      border-radius: 5px;
      outline: 0;
    }

`
const Content = styled.div`
display: flex;

`
const RepleTag = styled.p`
font-weight: bold;
width: 128px;
`
const RepleContent = styled.p`
width: 512px;
`

const RepleNameAndDate = styled.p`
width: 512px;
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

    const handleContent = (e) => {
        setContent(e.target.value);
        console.log(content);
    }

    useEffect(() => {
        const fetchForum = async() => {
            setLoading(true);
            try {
                if(tag == null) {
                    const response = await axios.get('http://localhost:8085/itTech/forum');
                    setTechForum(response.data);
                    console.log(response);
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
        if (content === null) {
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
        axios.delete(`http://localhost:8085/itTech/forum/deleteTech/${no}`)
        .then(document.location.href='/itTech/forum')
        .catch(error => {
            console.log(error);
        })
    }
    

    if(loading) return <div>댓글을 가져오는중</div>;
    if(error) return <div>오류가 발생했습니다. 관리자에게 문의해주세요.</div>
    if(!techForum) return <div>작성된 댓글이 없습니다.</div>
    

    return (
      <div>
        <TopCategory>
        <TopLink to="/itTech/forum">전체</TopLink>|
        <TopLink to="/itTech/forum/React">React</TopLink>|
        <TopLink to="/itTech/forum/Spring">Spring</TopLink>|
        <TopLink to="/itTech/forum/Vue">Vue</TopLink>
        </TopCategory>
        <br />
        <ItTechnologyWrite />
        <br />
        {techForum.map((techForum, t_no) => (
            <Reple key={t_no}>
                {editClicked && techForum.t_no === editNo ? (
                    <Content>
                        <RepleTag>{techForum.t_tag}</RepleTag>
                        <input type="text" defaultValue={techForum.t_content} onChange={(e) => handleContent(e)}></input>
                        <button id="doneBtn" onClick={() => doneEdit(techForum.t_no)}>
                            수정
                        </button>
                        <button id='cancelBtn' onClick={() => setEditClicked(false)}>취소</button>
                    </Content>
                ) : (
                    <Content>
                        <RepleTag>{techForum.t_tag}</RepleTag>
                        {/* <p>{techForum.t_parentno}</p> */}
                        <RepleContent>{techForum.t_content}</RepleContent>
                        <RepleNameAndDate>{techForum.t_name} | {techForum.t_date}
                        {sessionStorage.getItem('m_name') === techForum.t_name || localStorage.getItem('m_name') === techForum.t_name ? (
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
                        </RepleNameAndDate>
                        
                        {/* <button id="replyBtn">답글</button> */}
                    </Content>
                )
            }


            <hr />
          </Reple>
        ))}
      </div>
    );
}

export default ItTechnologyForum;