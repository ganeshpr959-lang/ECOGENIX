const bins = [
  { label: "Full", percent: 100, color: "red" },
  { label: "70%", percent: 70, color: "orange" },
  { label: "40%", percent: 40, color: "green" },
  { label: "20%", percent: 20, color: "blue" },
];

const schedule = [
  { block: "Block A", day: "Today", time: "10:00 AM", status: "Pending" },
  { block: "Block B", day: "Today", time: "1:00 PM", status: "Full" },
  { block: "Block C", day: "Tomorrow", time: "10:00 AM", status: "Pending" },
  { block: "Sports", day: "Tomorrow", time: "10:00 AM", status: "Pending" },
];

function WastePage() {
  return (
    <div className="page-box">
      <div className="page-header">
        <div>
          <h1>Waste Management</h1>
          <p className="subtext">Track bin levels and collection schedule.</p>
        </div>

        <div className="total-box">
          <p>Total Bins</p>
          <h2>12</h2>
          <span className="trend trend-up">3 full</span>
        </div>
      </div>

      <div className="chart-box">
        <h2>Bin Fill Level</h2>
        <div className="bin-row">
  {bins.map((bin, i) => (
    <div className="bin-item" key={i}>
      <div className="bin-icon-wrap">
        <svg viewBox="0 0 60 70" className="bin-icon-svg">
          <defs>
            <clipPath id={`binClip${i}`}>
              <path d="M12 18 L15 65 Q15 68 18 68 L42 68 Q45 68 45 65 L48 18 Z" />
            </clipPath>
          </defs>

          {/* Bin outline */}
          <path
            d="M12 18 L15 65 Q15 68 18 68 L42 68 Q45 68 45 65 L48 18 Z"
            className="bin-outline"
          />
          {/* Fill level, clipped to bin shape */}
          <rect
            x="10"
            y={68 - (bin.percent / 100) * 50}
            width="40"
            height={(bin.percent / 100) * 50}
            className={`bin-fill-svg bin-${bin.color}`}
            clipPath={`url(#binClip${i})`}
          />
          {/* Lid */}
          <rect x="8" y="12" width="44" height="6" rx="2" className="bin-outline" />
          {/* Handle */}
          <rect x="24" y="6" width="12" height="6" rx="2" className="bin-outline" />
        </svg>
      </div>
      <span>{bin.label}</span>
    </div>
  ))}
</div>
      </div>

      <div className="chart-box" style={{ marginTop: "20px" }}>
        <h2>Collection Schedule</h2>
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Block</th>
              <th>Day</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((row, i) => (
              <tr key={i}>
                <td>{row.block}</td>
                <td>{row.day}</td>
                <td>{row.time}</td>
                <td>
                  <span
                    className={`status-pill ${
                      row.status === "Full" ? "status-full" : "status-pending"
                    }`}
                  >
                    {row.status}
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

export default WastePage;