import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", energy: 65 },
  { day: "Tue", energy: 59 },
  { day: "Wed", energy: 80 },
  { day: "Thu", energy: 71 },
  { day: "Fri", energy: 56 },
  { day: "Sat", energy: 40 },
  { day: "Sun", energy: 30 },
];

function Chart() {
  return (
    <div className="chart-box">
      <h2>Weekly Energy Usage</h2>

      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="energyGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#c6f135" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#c6f135" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="energy"
            stroke="#c6f135"
            strokeWidth={3}
            fill="url(#energyGradient)"
            dot={{ r: 4, fill: "#c6f135" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;