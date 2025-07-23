import React from "react";
import '../styles/HomeLeftPanel.css';
import vector from '../assets/statistics-vector.svg';

const HomeLeftPanel = () => {
    return(
        <>
        <div className="left-panel">
            <img src={vector} alt="Illustration" className="vector-image" />
            <div className="left-panel-text">
                <p>
                    <em>Log Analyzer</em> <br/>
                    Monitor, analyze, and visualize server logs in real-time.<br />
                    Instantly view endpoint activity, success rates, and error trends<br />
                    — all in one place.
                </p>
            </div>
        </div>
        </>
    )
};

export default HomeLeftPanel;