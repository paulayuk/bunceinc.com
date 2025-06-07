import './App.css';
import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

// Phase 2 - Public Routes
import LandingPage from './pages/index';

function App() {
  return (
    <div>
      <Routes>
        {/* Default redirect */}
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}

        {/* Phase 2 - Public Routes */}
        <Route path="/" element={<LandingPage />} />
       
      </Routes>
    </div>
  );
}

export default App;