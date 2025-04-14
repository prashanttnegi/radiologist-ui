import React from 'react';
import { Link } from 'react-router-dom';
import dummyCases from '../data/dummyCases';
import '../styles/Dashboard.css';


const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Radiologist Dashboard</h1>
      <table className="cases-table">
        <thead>
          <tr>
            <th>Case ID</th>
            <th>Patient Name</th>
            <th>Status</th>
            <th>Case Review</th>
          </tr>
        </thead>
        <tbody>
          {dummyCases.map((caseItem) => (
            <tr key={caseItem.id}>
              <td>{caseItem.id}</td>
              <td>{caseItem.patientName}</td>
              <td>{caseItem.status}</td>
              <td>
                <Link to={`/cases/${caseItem.id}`} className="view-link">
                  View Case
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;