import React from 'react';
import Sidebar from '../sidebar';
import BoardTop from './myPageBoard';
import "./myPageCommunityBoard.scss";

function myPageCommunityBoard(props) {
    return (
        <div className='myList'>
            <Sidebar />
            <BoardTop />

        </div>
    );
}

export default myPageCommunityBoard;
