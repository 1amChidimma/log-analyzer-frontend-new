import React from "react";
import { Search } from "lucide-react";
import '../styles/Searchbox.css';

const Searchbox = () => {
    return (
        <>
        <div className="search-box">
            <div className="search-icon">
                <Search/>
            </div>
            <input className="search-input"
                placeholder="Search for Endpoint or Path"            
            />
        </div>
        </>
    )
}

export default Searchbox;