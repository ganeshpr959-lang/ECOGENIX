import parkingArea from "../assets/parking-area.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const peakData = [
  { time: "8 AM", value: 30 },
  { time: "10 AM", value: 55 },
  { time: "12 PM", value: 70 },
  { time: "2 PM", value: 100 },
  { time: "4 PM", value: 65 },
  { time: "6 PM", value: 40 },
];

function ParkingPage() {
  const occupied = 68;

  return (
    <div className="page-box">
      <div className="page-header">
        <div>
          <h1>Parking & Traffic</h1>
          <p className="subtext">Manage parking slots and monitor traffic flow.</p>
        </div>

        <div className="total-box">
          <p>Available Slots</p>
          <h2>33 / 105</h2>
          <span className="trend trend-up">31% free</span>
        </div>
      </div>

      <div className="row-split-even">
        <div className="chart-box gauge-box">
          <h2>Parking Occupancy</h2>
          <div className="gauge-wrap">
            <svg viewBox="0 0 120 120" className="gauge-svg">
              <circle cx="60" cy="60" r="52" className="gauge-bg" />
              <circle
                cx="60"
                cy="60"
                r="52"
                className="gauge-fill occupancy-fill"
                style={{
                  strokeDasharray: `${2 * Math.PI * 52}`,
                  strokeDashoffset: `${
                    2 * Math.PI * 52 * (1 - occupied / 100)
                  }`,
                }}
              />
            </svg>
            <div className="gauge-center">
              <h1>{occupied}%</h1>
            </div>
          </div>
          <p className="subtext gauge-caption">72 / 105 occupied</p>
        </div>

        <div className="chart-box">
          <h2>Peak Hour Analysis</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={peakData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#c6f135" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="chart-box" style={{ marginTop: "20px" }}>
        <h2>Traffic Heatmap</h2>
       <div className="parking-map-crop">
  <img
    src={parkingArea}
    alt="Parking Area"
    className="parking-map-img"
  />

  {/* Low Traffic - Top Left Parking */}
  <span
    className="traffic-dot low"
    style={{
      top: "11%",
      left: "58%",
    }}
  ></span>

  {/* Medium Traffic - Near Parking Sign */}
  <span
    className="traffic-dot medium"
    style={{
      top: "40%",
      left: "43%",
    }}
  ></span>

  {/* High Traffic - Main Internal Road */}
  <span
    className="traffic-dot high"
    style={{
      top: "11%",
      left: "28%",
    }}
  ></span>
</div>
 
        <div className="aqi-legend" style={{ flexDirection: "row", gap: "18px" }}>
          <div className="legend-item">
            <span className="legend-dot" style={{ background: "#c6f135" }}></span>
            Low
          </div>
          <div className="legend-item">
            <span className="legend-dot" style={{ background: "#facc15" }}></span>
            Medium
          </div>
          <div className="legend-item">
            <span className="legend-dot" style={{ background: "#ff5470" }}></span>
            High
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParkingPage;