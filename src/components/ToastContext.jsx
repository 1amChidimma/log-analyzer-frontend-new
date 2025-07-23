import React, { createContext, useContext, useState } from "react";
import "../styles/ToastContext.css";

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);



export const ToastProvider = ({ children }) => {
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);

  const showToast = (msg) => {
    setMessage(msg);
    setVisible(true);
    setTimeout(() => setVisible(false), 10000); // hide after 3s
    console.log("TOAST RENDERED: ", message, visible);

  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {visible && <div className="toast-error">{message}</div>}
    </ToastContext.Provider>
  );
};