import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from './Accordion';
import { accordionData } from './FAQ_List';
import './FAQ.scss';

const FAQ = () => {
  return (
    <div id='FaqAll'>
      <p>자주 묻는 질문</p>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;