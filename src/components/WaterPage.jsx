import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const trendData = [
  { day: "12 Apr", value: 15 },
  { day: "13 Apr", value: 18 },
  { day: "14 Apr", value: 14 },
  { day: "15 Apr", value: 22 },
  { day: "16 Apr", value: 18 },
];

function WaterPage() {
  const tankPercent = 72;

  return (
    <div className="page-box">
      <div className="page-header">
        <div>
          <h1>Water Management</h1>
          <p className="subtext">Monitor usage, detect leaks and save water.</p>
        </div>

        <div className="total-box">
          <p className="subtext">Total Consumption (Today)</p>
          <h2>18,200 L</h2>
          <span className="trend trend-down">↓ 8% vs yesterday</span>
        </div>
      </div>

      <div className="row-split-even">
        <div className="chart-box gauge-box">
          <h2>Water Tank Level</h2>
          <div className="gauge-wrap">
            <svg viewBox="0 0 120 120" className="gauge-svg">
              <circle cx="60" cy="60" r="52" className="gauge-bg" />
              <circle
                cx="60"
                cy="60"
                r="52"
                className="gauge-fill"
                style={{
                  strokeDasharray: `${2 * Math.PI * 52}`,
                  strokeDashoffset: `${
                    2 * Math.PI * 52 * (1 - tankPercent / 100)
                  }`,
                }}
              />
            </svg>
            <div className="gauge-center">
              <h1>{tankPercent}%</h1>
            </div>
          </div>
          <p className="subtext gauge-caption">Capacity: 50,000 L</p>
        </div>

        <div className="chart-box">
          <h2>Usage Trend</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#38bdf8"
                strokeWidth={3}
                dot={{ r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="row-split-even">
        <div className="alert-box critical">
          <div className="alert-left">
            <span className="alert-emoji">💧</span>
            <div>
              <h3>Leak Detection</h3>
              <p>Leak suspected in Hostel 2 - Block B (Floor 1). Flow rate is 3.5x higher than normal.</p>
            </div>
          </div>
          <button className="alert-btn">View Details</button>
        </div>

        <div className="alert-box info">
          <div className="alert-left">
            <span className="alert-emoji">💡</span>
            <div>
              <h3>Water Saving Suggestion</h3>
              <p>Fix the leak to save ~1,200L/month.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WaterPage;