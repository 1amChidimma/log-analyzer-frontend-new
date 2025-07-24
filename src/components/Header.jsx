import React from "react";
import { BarChart2, Bell, Home } from "lucide-react";
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
                    <BarChart2 />
                </div>
                <div className="header-text">
                    LOG ANALYZER
                </div>
            </div>
            <div className="side-icons">
                <Home onClick={goHome} className="home-icon"/>
                <Bell className="notification-icon" />
            </div>
        </div>
        </>

    )
}

export default Header;