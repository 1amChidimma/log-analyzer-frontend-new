import React, { useState } from "react";
import "../styles/HomePage.css";
import HomeLeftPanel from "../components/HomeLeftPanel";
import HomeRightPanel from "../components/HomeRightPanel";
import Header from "../components/Header";
import UploadModal from "../components/UploadModal";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [uploadedFile, setUploadedFile] = useState(null);
    const navigate = useNavigate();

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
    const handleFileSelect = (file) => setUploadedFile(file);

    const onView = () => navigate('/live-dashboard');

    
    return (
        <>
        <div className="home-page">
            
            <div className="home-content">
                <Header />
                <div className={`home-panels ${isModalOpen ? "blurred": ""}`}>
                    <HomeLeftPanel />
                    <HomeRightPanel onUpload={handleOpenModal} onLiveView={onView}  />
                </div>
            </div>
        </div>

        <UploadModal 
            className="upload-modal"
            isOpen={isModalOpen}
            onClose={handleCloseModal} 
            onFileSelect={handleFileSelect}
        />
        
        </>
    );
};

export default HomePage;
