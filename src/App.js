import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CaseDescription from './components/CaseDetail';
import ScanView from './components/ScanView';
import ReportGeneration from './components/ReportGeneration';
import Header from './components/Header'; // ✅ import the header

const App = () => {
  return (
    <Router>
      <Header /> {/* ✅ consistent header across all pages */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cases/:id" element={<CaseDescription />} />
        <Route path="/cases/:id/scan" element={<ScanView />} />
        <Route path="/cases/:id/report" element={<ReportGeneration />} />
      </Routes>
    </Router>
  );
};

export default App;
