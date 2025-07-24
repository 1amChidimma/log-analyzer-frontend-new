import React from "react";
import Card from "./Card";
import Searchbox from "./Searchbox";
import Button from "./Button";
import Table from "./Table";
import '../styles/AnalysisTableCard.css';

import { useToast } from "./ToastContext";

const AnalysisTableCard = ({ data, onRowClick, searchTerm, setSearchTerm }) => {

    const { showToast } = useToast();

    const handleDownload = async () => {
        try {
            const response = await fetch("http://localhost:8080/analyze-log/upload-csv", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to download analysis.");
                showToast("Error fetching live data!");
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = url;
            link.download = "analysis.csv";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

        } catch (error) {
            console.error("Download error:", error);
            showToast("Download error:", error);
        }
    }

    return(
        <>
        <Card variant="three" heading='Log Analysis'>
            <div className='analysis-table-card'>
            <div className="analysis-search">
                <div className="search-analysis-box">
                    <Searchbox 
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                    />
                </div>
                <Button onClick={handleDownload}>DOWNLOAD ANALYSIS</Button>
            </div>
            <div>
            <Table data={data} onRowClick={onRowClick}/>
            </div>
            </div>
        </Card>
        </>
    )
};

export default AnalysisTableCard;