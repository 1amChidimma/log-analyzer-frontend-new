import React, { useState } from "react";
import UploadModal from "../components/UploadModal"; // Make sure path is correct
import AnalysisDetailCard from "../components/AnalysisDetailCard";

const TestPage = () => {
	const sampleData = [
  		{
    	endpoint: "/api/users",
    	totalRequests: 58,
    	successfulCalls: 45,
    	failedCalls: 13,
    	successRate: 77.6,
    	failureRate: 22.4,
  		},
  		{
    	endpoint: "/api/login",
    	totalRequests: 102,
    	successfulCalls: 98,
    	failedCalls: 4,
    	successRate: 96.1,
    	failureRate: 3.9,
  		},
	];


	const [selectedRow, setSelectedRow] = useState(null);

	return (
		<div style={{ padding: "2rem" }}>
      		<h2>Click a row to see analysis</h2>

	  		<AnalysisDetailCard data={selectedRow} onClose={() => setSelectedRow(null)} />
			<br /> <br />
      

      		<table border="1" cellPadding="10" style={{ marginTop: "1rem" }}>
        		<thead>
          			<tr>
            			<th>Endpoint</th>
            			<th>Total Requests</th>
          			</tr>
        		</thead>
        		<tbody>
          			{sampleData.map((row, idx) => (
            			<tr
              				key={idx}
              				style={{ cursor: "pointer" }}
              				onClick={() => setSelectedRow(row)}
            			>
              				<td>{row.endpoint}</td>
              				<td>{row.totalRequests}</td>
            			</tr>
          			))}
        		</tbody>
      		</table>

	  
    	</div>
  	);







  	{/*
  	const [isModalOpen, setIsModalOpen] = useState(false);
  	const [selectedFile, setSelectedFile] = useState(null);

  	const openModal = () => setIsModalOpen(true);
  	const closeModal = () => setIsModalOpen(false);

	const handleFileSelect = (file) => {
    	setSelectedFile(file);
    	console.log("Selected file:", file.name);
  	};

  	return (
    	<div style={{ height: "100vh", background: "#f8f8f8", display: "flex", justifyContent: "center", alignItems: "center" }}>
      		<button onClick={openModal} style={{ padding: "10px 20px", fontSize: "1rem" }}>
        		Open Upload Modal
      		</button>

      		<UploadModal isOpen={isModalOpen} onClose={closeModal} onFileSelect={handleFileSelect} />
    	</div>
  	);*/}

};

export default TestPage;
