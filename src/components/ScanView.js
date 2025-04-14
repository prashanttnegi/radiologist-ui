import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/ScanView.css';

const ScanView = () => {
  const { id } = useParams();

  return (
    <div className="scan-container">
      <h2>Scan View for Case ID: {id}</h2>
      <div className="scan-placeholder">
        <p>Scan Image Placeholder</p>
      </div>
      <Link to={`/cases/${id}/report`} className="report-button">Go to Report Generation</Link>
    </div>
  );
};

export default ScanView;