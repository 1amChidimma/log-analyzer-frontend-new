import React from "react";
import { Search } from "lucide-react";
import '../styles/Searchbox.css';

const Searchbox = ({ searchTerm, setSearchTerm }) => {
    return (
        <>
        <div className="search-box">
            <div className="search-icon">
                <Search/>
            </div>
            <input className="search-input"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for Endpoint or Path"            
            />
        </div>
        </>
    )
}

export default Searchbox;