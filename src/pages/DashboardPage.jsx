import React, { useEffect, useState } from "react";
import "../styles/DashboardPage.css";
import Header from "../components/Header";
import AnalysisDetailCard from "../components/AnalysisDetailCard";
import AnalysisTableCard from "../components/AnalysisTableCard";

const DashboardPage = () => {
    const [selectedEndpoint, setSelectedEndpoint] = useState();
    const [tableData, setTableData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const savedData = localStorage.getItem("analysisResult");
        if (savedData) {
            setTableData(JSON.parse(savedData));
        }
    }, []);

    
    // ✅ Filter data based on search term
    const filteredData = tableData.filter((row) =>
        row.endpoint.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
        <div className="dashboard-page">
            <Header />
            <div className="dashboard-content">

                <div className="dashboard-text">
                    <div className="dashboard-title"> Dashboard</div>
                    <div className="dashboard-decription">
                        Welcome! This dashboard gives you insights to data in your log file.
                        <br />Monitor incoming requests, review endpoint activity, and track system performance.
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
                        data={filteredData} 
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

export default DashboardPage;