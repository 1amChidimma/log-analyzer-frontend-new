import React, { useEffect, useState } from "react";
import "../styles/DashboardPage.css";
import Header from "../components/Header";
import AnalysisDetailCard from "../components/AnalysisDetailCard";
import AnalysisTableCard from "../components/AnalysisTableCard";

const LiveDashboardPage = () => {
    const [selectedEndpoint, setSelectedEndpoint] = useState();
    const [liveData, setLiveData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        const fetchLiveData = async () => {
            try {
                const response = await fetch("http://localhost:8080/analyze-log/scheduled-stats");
                const result = await response.json();
                setLiveData(result);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching live data:", error);
                setLoading(false);
            }
        };

        fetchLiveData();
        const interval = setInterval(fetchLiveData, 300000);
        return () => clearInterval(interval);
    }, []);

    const filteredLiveData = liveData.filter((row) =>
        row.endpoint.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
        <div className="dashboard-page">
            <Header />
            <div className="dashboard-content">

                <div className="dashboard-text">
                    <div className="dashboard-title"> Live Dashboard</div>
                    <div className="dashboard-decription">
                        Welcome! This dashboard allows you to connect to a live log stream and monitor requests in real time.
                        <br />Track active endpoints, identify failures, and view live performance stats.
                    </div>
                </div>

                {/**Remember only when a row in the table is clicked...*/}

                {selectedEndpoint && (
                    <div className="analysis-extended">
                        <AnalysisDetailCard 
                            data={selectedEndpoint} 
                            onClose={() => setSelectedEndpoint(null)}
                        />
                    </div>
                )}

                <div className="dashboard-table">
                    <AnalysisTableCard 
                        data={filteredLiveData} 
                        onRowClick={setSelectedEndpoint}
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                    />
                </div>
            </div>
        </div>
        </>
    )
};

export default LiveDashboardPage;