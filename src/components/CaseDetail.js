import { useParams, useNavigate } from "react-router-dom";
import dummyCases from "../data/dummyCases";
import '../styles/CaseDetail.css';

const CaseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const caseData = dummyCases.find((c) => c.id === parseInt(id));

  return (
    <div className="case-desc-container">
      <h2 className="text-xl font-semibold">Case Detail - Patient: {caseData.patientName}</h2>
      <p className="case-info">{caseData.caseDescription}</p>
      <button
        onClick={() => navigate(`/cases/${id}/scan`)}
        className="view-scan-button"
      >
        View Scan
      </button>
    </div>
  );
};

export default CaseDetail;