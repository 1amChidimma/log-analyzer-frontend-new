import React, { useEffect, useState } from "react";
import Button from "./Button";
import "../styles/UploadModal.css";
import { FileIcon, X } from "lucide-react";
import documentPic from "../assets/documents-vector.svg"
import { useNavigate } from "react-router-dom";

import { useToast } from "./ToastContext";


const UploadModal = ({ isOpen, onClose, onFileSelect }) => {
    const [file, setFile] = useState(null);
    const [isDragOver, setIsDragOver] = useState(false);
    const navigate = useNavigate();
    const {showToast} = useToast();
    
    useEffect(() => {
        if (isOpen === false) {
            setFile(null);
            setIsDragOver(false);
        }
    }, [isOpen]);
    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragOver(true);
    };
    const handleDragLeave = () => {
        setIsDragOver(false);
    };
    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragOver(false);
        const selected = e.dataTransfer.files[0];
        setFile(selected);
        onFileSelect(selected);
    };
    const handleBrowse = (e) => {
        const selected = e.target.files[0];
        setFile(selected);
        onFileSelect(selected);
    };
    const handleRemove = () => setFile(null);    
    if (!isOpen) return null;


    const onAnalyze = async () => {
        console.log("Clicked!");
        if (!file) {
            showToast("Please upload a file.");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await fetch("http://localhost:8080/analyze-log/analysis", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Analysis failed");
            }

            const result = await response.json();
            localStorage.setItem("analysisResult", JSON.stringify(result));
            console.log("Analysis result:", result);
            
            navigate('/dashboard');
        } catch (error) {
            console.error("Error uplaoding file: ", error);
            showToast("Error uploading file. Please try again.");
        }

        
    };

    return (
        <div className="modal-overlay">
            <div className="modal-card">
                <div className="modal-top">
                    <div className="modal-title">
                        <h2>Upload log file to attach</h2>
                    </div>
                    <div
                        className="file-dropzone"
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        >
                            <p>Drag and drop file here<br/>or</p>
                            <div>
                                <input
                                type="file" id="fileInput" style={{display: "none"}}
                                onChange={handleBrowse}
                                />
                                <Button className="browse-btn" onClick={() => document.getElementById("fileInput").click()} type="file">Browse</Button>
                            </div>
                        
                    </div>
                </div>

                <div className="uploaded-preview">

                    <h2>Uploaded File</h2>
                    
                    <div className="uploaded-preview-content">
                    {file?(
                        <div className="file-preview">
                            <div className="file-name">
                            <FileIcon size={20} />
                            <span>{file.name}</span>
                            </div>
                            <X size={18} className="remove-icon" onClick={handleRemove} />
                        </div>
                        ):(
                            <div className="upload-placeholder">
                                <img src={documentPic} alt="placeholder" />
                                <p>The file you upload will appear here.</p>
                            </div>
                    )}

                    </div>
                </div>

                <div className="modal-actions">
                        <Button variant="secondary" onClick={onClose} className="cancel-btn">Cancel</Button>
                        <Button className="analyze-btn" onClick={onAnalyze}>Analyze</Button>
                    </div>
                    

            </div>
        </div>
    )
}; 

export default UploadModal;