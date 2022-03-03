import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from './Accordion';
import { accordionData } from './FAQ_List';

const FAQ = () => {
  return (
    <div>
      <h1>자주 묻는 질문</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;