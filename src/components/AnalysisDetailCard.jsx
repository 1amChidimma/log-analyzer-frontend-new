import React from "react";
import Card from "./Card";
import "../styles/AnalysisDetailCard.css";
import { X } from "lucide-react";

const AnalysisDetailCard = ({ data, onClose }) => {
    if (!data) return null;

    return (
        <div className="analysis-detail-overlay">
            <Card variant="one" heading={`Endpoint Path: ${data.endpoint}`} className="analysis-detail-card">
                    <div className="close-btn" onClick={onClose}>
                        <X size = {20} />
                    </div>

                    <div className="analysis-detail-content">
                    <div className="circle-container">
                        <div className="circle">
                            <span className="big">{data.totalRequests}</span>
                            <span className="small">Total Requests</span>      
                        </div>
                    </div>

                    <ul className="detail-list">
                        <li>{data.success} successful requests</li>
                        <li>{data.failure} failed requests</li>
                        <li>{data.successRate}% success rate</li>
                    </ul>
                        
                        
                    <ul className="detail-list">
                        <li>{data.failureRate}% failure rate</li>
                        <li>{data.uniqueIps} unique IPs</li>
                        <li>Last called: {new Date(data.lastRequestTime).toLocaleString()}</li>
                    </ul>
                    </div>

                </Card>
        </div>
    )
}

export default AnalysisDetailCard;