import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const buildingData = [
  { name: "Admin", value: 820 },
  { name: "Academic", value: 760 },
  { name: "Library", value: 690 },
  { name: "Hostel", value: 520 },
  { name: "Sports", value: 380 },
  { name: "Others", value: 240 },
];

const trendData = [
  { day: "10 Apr", value: 30 },
  { day: "11 Apr", value: 45 },
  { day: "12 Apr", value: 38 },
  { day: "13 Apr", value: 60 },
  { day: "14 Apr", value: 52 },
  { day: "15 Apr", value: 70 },
  { day: "16 Apr", value: 65 },
];

function EnergyPage() {
  return (
    <div className="page-box">
      <div className="page-header">
        <div>
          <h1>Energy Monitoring</h1>
          <p className="subtext">
            Track and analyze electricity consumption across buildings.
          </p>
        </div>

        <div className="total-box">
          <p className="subtext">Total Consumption (Today)</p>
          <h2>2,480 kWh</h2>
          <span className="trend trend-down">↓ 12% vs yesterday</span>
        </div>
      </div>

      <div className="row-split-even">
        <div className="chart-box">
          <h2>Building-wise Consumption</h2>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={buildingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#c6f135" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-box">
          <h2>7-Day Trend</h2>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#c6f135"
                strokeWidth={3}
                dot={{ r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="predict-box">
        <span className="predict-icon">🔆</span>
        <p>
          <strong>AI Prediction (Tomorrow):</strong> Energy consumption is
          expected to increase by 6% (~2,630 kWh).
        </p>
        <button className="rec-btn">View Details</button>
      </div>
    </div>
  );
}

export default EnergyPage;