import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/ReportGeneration.css";

const SECTION_TYPES = [
  "Dentition (Missing Teeth)",
  "Implant Details",
  "Alveolar Bone Observations",
  "Clinical Impressions",
  "Additional Findings",
  "Sinuses",
  "Periodontal Assessment",
  "Temporomandibular Joints (TMJ)",
  "Orthodontic Assessment",
  "Nerve and Canal Observations",
  "Pathology / Other Anomalies"
];

const ReportGeneration = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState("");
  const [sections, setSections] = useState([]);

  const handleAddSection = () => {
    if (selectedSection) {
      setSections((prev) => [...prev, { type: selectedSection, text: "" }]);
      setSelectedSection("");
    }
  };

  const handleTextChange = (index, newText) => {
    const updated = [...sections];
    updated[index].text = newText;
    setSections(updated);
  };

  const handleSave = () => {
    console.log("Saved:", sections);
    alert("Report saved.");
  };

  const handleSubmit = () => {
    console.log("Submitted:", sections);
    alert("Report submitted.");
    navigate("/");
  };

  return (
    <div className="report-container">

      <h1 className="report-title">Report</h1>

      {/* Controls */}
      <div className="controls">
        <button className="btn add-section-btn" onClick={handleAddSection}>+ Add Section</button>
        <select
          value={selectedSection}
          onChange={(e) => setSelectedSection(e.target.value)}
        >
          <option value="">Select Section</option>
          {SECTION_TYPES.map((section, idx) => (
            <option key={idx} value={section}>{section}</option>
          ))}
        </select>
        <span className="section-hint"></span>
      </div>

      {/* Dynamic Sections */}
      <div className="sections-container">
        {sections.map((section, idx) => (
          <div key={idx} className="section">
            <h3>{section.type}</h3>
            <textarea
              placeholder="Enter text..."
              value={section.text}
              onChange={(e) => handleTextChange(idx, e.target.value)}
            />
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button onClick={() => alert("Attach Screenshot clicked")} className="btn attach-btn">Attach Screenshot</button>
        <button onClick={handleSave} className="btn save-btn">Save</button>
        <button onClick={handleSubmit} className="btn submit-btn">Submit (back to Dashboard)</button>
      </div>
    </div>
  );
};

export default ReportGeneration;