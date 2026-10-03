import { useState } from "react";
import { MdWaterDrop, MdAir, MdDelete, MdBolt } from "react-icons/md";

const allAlerts = [
  {
    icon: <MdWaterDrop />,
    title: "Water Leakage",
    message: "Hostel 2 - Block B (Floor 1). Flow rate is 3.5x normal.",
    time: "12 min ago",
    level: "critical",
  },
  {
    icon: <MdAir />,
    title: "High AQI",
    message: "Near Canteen. AQI 142 (Unhealthy).",
    time: "1 hr ago",
    level: "critical",
  },
  {
    icon: <MdDelete />,
    title: "Waste Bin Full",
    message: "Block B (Floor 1). Bin is 100% full.",
    time: "2 hrs ago",
    level: "warning",
  },
  {
    icon: <MdBolt />,
    title: "Power Overload",
    message: "Academic Block. Load is 15% higher than normal.",
    time: "3 hrs ago",
    level: "warning",
  },
];

const tabs = ["All", "Critical", "Warning"];

function AlertsPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? allAlerts
      : allAlerts.filter((a) => a.level === active.toLowerCase());

  const criticalCount = allAlerts.filter((a) => a.level === "critical").length;
  const warningCount = allAlerts.filter((a) => a.level === "warning").length;

  return (
    <div className="page-box">
      <div className="page-header">
        <div>
          <h1>Alerts</h1>
          <p className="subtext">Immediate attention required.</p>
        </div>
      </div>

      <div className="filter-row">
        <button
          className={`filter-btn ${active === "All" ? "active" : ""}`}
          onClick={() => setActive("All")}
        >
          All ({allAlerts.length})
        </button>
        <button
          className={`filter-btn ${active === "Critical" ? "active" : ""}`}
          onClick={() => setActive("Critical")}
        >
          Critical ({criticalCount})
        </button>
        <button
          className={`filter-btn ${active === "Warning" ? "active" : ""}`}
          onClick={() => setActive("Warning")}
        >
          Warning ({warningCount})
        </button>
      </div>

      <div className="alerts-list-full">
        {filtered.map((a, i) => (
          <div className={`alert-box ${a.level === "critical" ? "critical" : "warning"}`} key={i}>
            <div className="alert-left">
              <span className="alert-emoji">{a.icon}</span>
              <div>
                <h3 className={a.level === "warning" ? "warning-title" : ""}>
                  {a.title}
                </h3>
                <p>{a.message}</p>
              </div>
            </div>
            <span className="alert-time subtext">{a.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlertsPage;