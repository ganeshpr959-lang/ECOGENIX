import { MdWarningAmber } from "react-icons/md";

const alerts = [
  {
    title: "Water Leakage Detected",
    message: "Possible leak in Hostel 2 - Block B (Floor 1). Flow rate is 3.5x higher than normal.",
    level: "critical",
  },
];

function Alerts() {
  return (
    <div className="alerts">
      {alerts.map((a, i) => (
        <div className={`alert-box ${a.level}`} key={i}>
          <div className="alert-left">
            <MdWarningAmber className="alert-icon" />
            <div>
              <h3>{a.title}</h3>
              <p>{a.message}</p>
            </div>
          </div>
          <button className="alert-btn">View Details</button>
        </div>
      ))}
    </div>
  );
}

export default Alerts;