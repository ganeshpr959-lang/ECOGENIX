import { useState } from "react";
import {
  MdElectricBolt,
  MdWaterDrop,
  MdAir,
  MdDelete,
  MdDirectionsCar,
} from "react-icons/md";

const insightsData = [
  {
    category: "Energy",
    icon: <MdElectricBolt />,
    text: "Library energy usage increased by 18%. Compared to last week. Consider reducing non-essential lighting and AC usage.",
    time: "2h ago",
  },
  {
    category: "Water",
    icon: <MdWaterDrop />,
    text: "Hostel water consumption is unusually high. It's 3.5% higher than average. Possible leak detected.",
    time: "4h ago",
  },
  {
    category: "Air Quality",
    icon: <MdAir />,
    text: "Air quality is moderate near Canteen. AQI is 82. Consider improving ventilation and reducing outdoor activities.",
    time: "6h ago",
  },
  {
    category: "Waste",
    icon: <MdDelete />,
    text: "Waste bin near Block C is almost full. Collection recommended within 1 hour.",
    time: "8h ago",
  },
  {
    category: "Energy",
    icon: <MdDirectionsCar />,
    text: "Parking occupancy will peak at 2 PM. Consider redirecting traffic from Gate 2.",
    time: "10h ago",
  },
];

const filters = ["All", "Energy", "Water", "Air Quality", "Waste"];

function Insights() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? insightsData
      : insightsData.filter((i) => i.category === active);

  return (
    <div className="insights-box">
      <h2>AI Insights</h2>
      <p className="subtext">Insights to help you take action.</p>

      <div className="filter-row">
        {filters.map((f) => (
          <button
            key={f}
            className={`filter-btn ${active === f ? "active" : ""}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="insight-list">
        {filtered.map((item, i) => (
          <div className="insight-item" key={i}>
            <span className="insight-icon">{item.icon}</span>
            <p>{item.text}</p>
            <span className="insight-time">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Insights;