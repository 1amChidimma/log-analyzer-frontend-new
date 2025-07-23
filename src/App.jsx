import React, { useState } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import LiveDashboardPage from './pages/LiveDashboardPage';
import { ToastProvider } from './components/ToastContext';



function App() {

  	return (
    	<>
		<ToastProvider>
		<Router>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/dashboard' element={<DashboardPage />} />
				<Route path='/live-dashboard' element={<LiveDashboardPage />} />
			</Routes>
		</Router>
		</ToastProvider>
		</>
		
  	)
}

export default App;
