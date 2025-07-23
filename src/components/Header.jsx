import React from "react";
import { BarChart2, Bell } from "lucide-react";
import '../styles/Header.css';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
        localStorage.clear();
    };

    return (
        <>
        <div className="header">
            <div className="header-title">
                <div className="header-icon">
                    <BarChart2 onClick={goHome}/>
                </div>
                <div className="header-text">
                    LOG ANALYZER
                </div>
            </div>
            <div className="notification-icon">
                <Bell />
            </div>
        </div>
        </>

    )
}

export default Header;