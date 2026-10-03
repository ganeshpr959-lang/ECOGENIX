import { MdApartment, MdBolt, MdPeople } from "react-icons/md";

const buildings = [
  { name: "Block A - Academic Building", type: "Academic", occupancy: "82%", energy: "820 kWh" },
  { name: "Block B - Academic Building", type: "Academic", occupancy: "76%", energy: "760 kWh" },
  { name: "Administration + Library", type: "Admin", occupancy: "64%", energy: "520 kWh" },
  { name: "Auditorium", type: "Common", occupancy: "30%", energy: "310 kWh" },
  { name: "Boys' Hostel", type: "Hostel", occupancy: "91%", energy: "690 kWh" },
  { name: "Girls' Hostel", type: "Hostel", occupancy: "88%", energy: "650 kWh" },
  { name: "Canteen / Cafeteria", type: "Common", occupancy: "55%", energy: "410 kWh" },
  { name: "Power Supply Building", type: "Utility", occupancy: "—", energy: "1,200 kWh" },
];

function BuildingsPage() {
  return (
    <div className="page-box">
      <div className="page-header">
        <div>
          <h1>Buildings</h1>
          <p className="subtext">Manage and monitor all campus buildings.</p>
        </div>

        <div className="total-box">
          <p>Total Buildings</p>
          <h2>{buildings.length}</h2>
          <span className="trend trend-up">All operational</span>
        </div>
      </div>

      <div className="building-grid">
        {buildings.map((b, i) => (
          <div className="building-card" key={i}>
            <div className="building-icon">
              <MdApartment />
            </div>
            <h3>{b.name}</h3>
            <span className="building-type">{b.type}</span>

            <div className="building-stats">
              <div className="building-stat">
                <MdPeople />
                <span>{b.occupancy} occupied</span>
              </div>
              <div className="building-stat">
                <MdBolt />
                <span>{b.energy}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BuildingsPage;