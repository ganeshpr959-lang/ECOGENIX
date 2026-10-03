import { useState } from "react";

const complaints = [
  { id: "#C-101", title: "AC not working", block: "Block A - Room 204", status: "Open", date: "28 Sep" },
  { id: "#C-102", title: "Water leakage in bathroom", block: "Boys' Hostel - Floor 2", status: "In Progress", date: "27 Sep" },
  { id: "#C-103", title: "Broken chair", block: "Library", status: "Resolved", date: "25 Sep" },
  { id: "#C-104", title: "Wifi not working", block: "Block B - Room 110", status: "Open", date: "29 Sep" },
  { id: "#C-105", title: "Light flickering", block: "Auditorium", status: "In Progress", date: "26 Sep" },
  { id: "#C-106", title: "Dustbin overflow", block: "Canteen", status: "Resolved", date: "24 Sep" },
];

const tabs = ["All", "Open", "In Progress", "Resolved"];

function ComplaintsPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? complaints : complaints.filter((c) => c.status === active);

  const statusClass = (status) => {
    if (status === "Open") return "status-full";
    if (status === "In Progress") return "status-pending";
    return "status-resolved";
  };

  return (
    <div className="page-box">
      <div className="page-header">
        <div>
          <h1>Complaints</h1>
          <p className="subtext">Track and resolve facility complaints.</p>
        </div>

        <div className="total-box">
          <p>Open Complaints</p>
          <h2>{complaints.filter((c) => c.status === "Open").length}</h2>
          <span className="trend trend-up">Needs attention</span>
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
        <table className="schedule-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Issue</th>
              <th>Location</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c, i) => (
              <tr key={i}>
                <td>{c.id}</td>
                <td>{c.title}</td>
                <td>{c.block}</td>
                <td>{c.date}</td>
                <td>
                  <span className={`status-pill ${statusClass(c.status)}`}>
                    {c.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ComplaintsPage;