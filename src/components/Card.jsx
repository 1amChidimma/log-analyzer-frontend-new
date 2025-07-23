import React from "react";
import '../styles/Card.css';

const Card = ({variant = 'one', heading, children, className = '' }) => {
    return (
        <>
        <div className={`card ${variant} ${className}`}>
            <div className="card-heading">
                {heading}
            </div>
            <div className="card-content">
            {children}
            </div>

        </div>
        </>
    )
}

export default Card;