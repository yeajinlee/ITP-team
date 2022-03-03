import React from 'react';
import MainCarousel from '../../components/main/MainCarousel';
import CommunicationBoard from '../communityCommunication/communicationBoard';

const communicationMain = () => {
    return (
        <div>
            <MainCarousel />
            <br />
            <CommunicationBoard />
        </div>
    );
};

export default communicationMain;