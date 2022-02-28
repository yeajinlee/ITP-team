import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddNotice = () => {
  const navigate = useNavigate();
  const BackToNotice = () => {
      navigate("/notice");
  }
  return (
    <div>
      <h3>공지사항</h3>
      제목
      <input type="text" />
      <br/>
      내용<textarea></textarea>
      <br/>
      <input type="button" value="취소" onClick={BackToNotice}/>
      <input type="submit" value="등록" />
    </div>
  );
};

export default AddNotice;