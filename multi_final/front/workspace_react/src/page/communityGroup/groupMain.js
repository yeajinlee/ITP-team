import React from 'react';
import MainCarousel from '../../components/main/MainCarousel';

import GroupBoard from './groupBoard';

const communicationMain = () => {
    return (
        <div>
            <MainCarousel />
            <br />
            <GroupBoard />
        </div>
    );
};

export default communicationMain;