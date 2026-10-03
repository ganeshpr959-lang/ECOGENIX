import { MdElectricBolt, MdWaterDrop, MdAir, MdDelete } from "react-icons/md";

const stats = [
  {
    icon: <MdElectricBolt />,
    label: "Energy Usage",
    value: "2,480 kWh",
    trend: "-12% vs yesterday",
    down: true,
  },
  {
    icon: <MdWaterDrop />,
    label: "Water Usage",
    value: "18,200 L",
    trend: "-8% vs yesterday",
    down: true,
  },
  {
    icon: <MdAir />,
    label: "Air Quality",
    value: "AQI 68",
    trend: "Good",
    down: false,
  },
  {
    icon: <MdDelete />,
    label: "Waste Bins",
    value: "3 / 12 full",
    trend: "Next collection: 2h",
    down: false,
  },
];

function Dashboard() {
  return (
    <div className="dashboard">
      {stats.map((s, i) => (
        <div className="card" key={i}>
          <div className="card-icon">{s.icon}</div>
          <h2>{s.label}</h2>
          <h1>{s.value}</h1>
          <span className={`trend ${s.down ? "trend-down" : "trend-up"}`}>
            {s.trend}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;