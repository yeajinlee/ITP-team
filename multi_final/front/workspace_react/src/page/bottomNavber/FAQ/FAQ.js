import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from './Accordion';
import { accordionData } from './FAQ_List';
import './FAQ.scss';

const FAQ = () => {
  return (
    <div id='FaqAll'>
      <p>궁금한 점이 있으신가요?</p>
      <p>먼저 아래의 자주 묻는 질문 FAQ 리스트를 확인 해주세요 !</p>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;