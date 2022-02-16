import MainTopNavber from "../components/main/MainTopNavber";
import MainBottomNavber from "../components/main/MainBottomNavber";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";


const nav = () => {
    return (
        <div>
            <MainTopNavber />
            <MainBottomNavber />
        </div>
    );
};

export default nav;