import { MdLightbulb } from "react-icons/md";
import campusMap from "../assets/campus-map.png";

function SidePanel() {
  return (
    <div className="side-panel">
      <div className="map-card">
        <div className="map-header">
          <h3>Campus Overview</h3>
        </div>
       <img src={campusMap} alt="Campus Map" className="campus-map-img" />
      </div>

      <div className="ai-rec-card">
        <MdLightbulb className="rec-icon" />
        <div>
          <p>
            Reduce AC usage in Library Block between 2 PM – 4 PM to save ~12%
            energy.
          </p>
          <button className="rec-btn">View All</button>
        </div>
      </div>
    </div>
  );
}

export default SidePanel;