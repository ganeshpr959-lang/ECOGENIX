import { NavLink } from "react-router-dom";
;
import {
  MdDashboard,
  MdElectricBolt,
  MdWaterDrop,
  MdWarningAmber,
  MdSettings,
  MdApartment,
  MdDelete,
  MdAir,
  MdDirectionsCar,
   MdAssessment,
} from "react-icons/md";
import Logo from "./Logo";

const menuItems = [
  { icon: <MdDashboard />, label: "Dashboard", path: "/dashboard" },
  { icon: <MdApartment />, label: "Buildings", path: "/buildings" },
  { icon: <MdWarningAmber />, label: "Complaints", path: "/complaints" },
  { icon: <MdWarningAmber />, label: "Alerts", path: "/alerts" },
  { icon: <MdElectricBolt />, label: "Energy", path: "/energy" },
  { icon: <MdWaterDrop />, label: "Water", path: "/water" },
  { icon: <MdDelete />, label: "Waste", path: "/waste" },
  { icon: <MdSettings />, label: "Settings", path: "/settings" },
  { icon: <MdAir />, label: "Air Quality", path: "/air-quality" },
  { icon: <MdDirectionsCar />, label: "Parking & Traffic", path: "/parking" },
  { icon: <MdAssessment />, label: "Reports", path: "/reports" },
];
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <Logo size={28} />
        <h2>ECOGENIX</h2>
      </div>

      <ul>
        {menuItems.map((item, i) => (
          <NavLink
            to={item.path}
            key={i}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li>
              <span className="icon">{item.icon}</span>
              {item.label}
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;