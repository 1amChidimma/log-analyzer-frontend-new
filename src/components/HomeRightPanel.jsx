import React from "react";
import { BarChart2 } from "lucide-react";
import Card from "./Card";
import '../styles/HomeRightPanel.css';
import Button from "./Button";

const HomeRightPanel = ({ onUpload, onLiveView }) => {
    return(
        <>
        <div className="right-panel">

            <div className="right-panel-top">

            <div><BarChart2 className="right-panel-icon"/></div>
            
            <div className="right-panel-text">
                <div className="right-panel-heading">
                    A Powerful Tool For Analyzing Application Logs
                </div>
                <div className="right-panel-description">
                    Upload logs or connect to live log streams to view request success rates, identify failing endpoints, and download analysis reports in one click.
                </div>
            </div>
            </div>

            <div className="right-panel-cards">

                <Card className="right-panel-card" variant="one" heading="UPLOAD LOG FILE">
                    <div className="upload-card-content">
                    Upload a log file from your system to get a detailed analysis of all endpoints, success rates, and errors.
                    </div>
                    <Button onClick={onUpload}>UPLOAD</Button>
                </Card>

                <Card className="right-panel-card" variant="one" heading="LIVE LOG STREAM">
                    <div className="live-card-content">
                    Connect to live log stream and track active endpoints, identify failures, and monitor requests in real time.
                    </div>
                    <Button onClick={onLiveView}>VIEW</Button>
                </Card>
                

            </div>

        </div>
        </>
    )
};

export default HomeRightPanel;