import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Article1 from './Article1.js';
import Article2 from './Article2.js';
import './itTrendMain.scss'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      AI 서비스를 기반으로 요약된 IT 뉴스를 제공합니다.
    </Tooltip>
  );

const itTrendMain = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth()+1;
    const date = today.getDate();
    return (
      <div id="trendAll">
        <div className="time">
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <p>
            {year}.{month}.{date} IT 뉴스
          </p>
        </OverlayTrigger>
        </div>
        
        <div className="todayTrend">
          <Article1 />
        </div>
        <div id="passTrend">
          <p>이전 뉴스</p>
          <Article2 />
        </div>
      </div>
    );
};

export default itTrendMain;