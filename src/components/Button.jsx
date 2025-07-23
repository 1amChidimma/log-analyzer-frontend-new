import React from "react";
import '../styles/Button.css';


const Button = ({children, variant = "primary", onClick, type = "button"}) => {
    return(
        <>
        <button className={`btn ${variant}`} onClick={onClick} type={type}>{children}</button>
        </>
    )
}

export default Button;