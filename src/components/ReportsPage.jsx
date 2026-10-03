import { useState } from "react";
import { MdBolt, MdWaterDrop, MdEco, MdRecycling, MdDownload } from "react-icons/md";

const tabs = ["Daily", "Weekly", "Monthly"];

const reportStats = [
  {
    icon: <MdBolt />,
    label: "Energy Savings",
    value: "12%",
    caption: "vs last week",
  },
  {
    icon: <MdWaterDrop />,
    label: "Water Saving",
    value: "8%",
    caption: "vs last week",
  },
  {
    icon: <MdEco />,
    label: "Carbon Reduction",
    value: "15%",
    caption: "vs last week",
  },
  {
    icon: <MdRecycling />,
    label: "Waste Recycled",
    value: "22%",
    caption: "vs last week",
  },
];

function ReportsPage() {
  const [active, setActive] = useState("Daily");

  return (
    <div className="page-box">
      <div className="page-header">
        <div>
          <h1>Reports</h1>
          <p className="subtext">View and download facility reports.</p>
        </div>
      </div>

      <div className="filter-row">
        {tabs.map((t) => (
          <button
            key={t}
            className={`filter-btn ${active === t ? "active" : ""}`}
            onClick={() => setActive(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="chart-box">
        <div className="report-top-row">
          <p className="subtext">16 Apr 2025</p>
          <button className="rec-btn">Generate Report</button>
        </div>

        <h2 style={{ marginTop: "20px" }}>Sustainability Report</h2>

        <div className="report-grid">
          {reportStats.map((s, i) => (
            <div className="report-stat" key={i}>
              <span className="report-icon">{s.icon}</span>
              <div>
                <h2>{s.value}</h2>
                <p className="subtext">
                  {s.label} <br /> {s.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button className="download-btn">
          <MdDownload /> Download PDF
        </button>
      </div>
    </div>
  );
}

export default ReportsPage;