import React, { useState , useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import ItTechnologyWrite from './ItTechnologyWrite';



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
        <Link to="/itTech/forum">전체</Link> |{' '}
        <Link to="/itTech/forum/React">React</Link> |{' '}
        <Link to="/itTech/forum/Spring">Spring</Link> |{' '}
        <Link to="/itTech/forum/Vue">Vue</Link>
        <br />
        <ItTechnologyWrite />
        <br />
        {techForum.map((techForum, t_no) => (
            <div key={t_no}>
                {editClicked && techForum.t_no === editNo ? (
                    <div>
                        <p>{techForum.t_tag}</p>
                        <textarea type="text" defaultValue={techForum.t_content} onChange={(e) => handleContent(e)}></textarea>
                        <button id="doneBtn" onClick={() => doneEdit(techForum.t_no)}>
                            수정
                        </button>
                        <button id='cancelBtn' onClick={() => setEditClicked(false)}>취소</button>
                    </div>
                ) : (
                    <div>
                        <p>{techForum.t_tag}</p>
                        <p>{techForum.t_parentno}</p>
                        <p>{techForum.t_content}</p>
                        <p>{techForum.t_name} | {techForum.t_date}</p>
                        <button id="editBtn" onClick={() => editComment(techForum.t_content, techForum.t_no)}>
                            수정
                        </button>
                        <button id="delBtn" onClick={() => deleteComment(techForum.t_no)}>
                            삭제
                        </button>
                        <button id="replyBtn">답글</button>
                    </div>
                )
            }


            <hr />
          </div>
        ))}
      </div>
    );
}

export default ItTechnologyForum;