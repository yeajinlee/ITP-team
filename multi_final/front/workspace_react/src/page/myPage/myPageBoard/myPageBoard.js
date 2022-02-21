import React from 'react';
import { Link } from 'react-router-dom';
import "./myPageBoard.scss";

function myPageCommunityBoard(props) {
    return (
        <div className='myList'>
            <div class="card">
            <div className='board'>
                <Link to="/myPageCommunityBoard" class="link-dark" style={{ textDecoration: 'none' }}>소통공간 </Link>ㅣ
                <Link to="/myPageGroupBoard" class="link-dark" style={{ textDecoration: 'none' }}> 모임찾기 </Link>
            </div>
            게시글 작성 내용
            </div>
        </div>
    );
}

export default myPageCommunityBoard;
