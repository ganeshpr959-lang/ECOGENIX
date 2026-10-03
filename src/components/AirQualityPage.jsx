import campusMap from "../assets/campus-map.png";
const pollutants = [
  { label: "PM2.5", value: "28", unit: "µg/m³" },
  { label: "PM10", value: "52", unit: "µg/m³" },
  { label: "Temperature", value: "28", unit: "°C" },
  { label: "Humidity", value: "64", unit: "%" },
];

const legend = [
  { label: "Good", range: "0-50", color: "#c6f135" },
  { label: "Moderate", range: "51-100", color: "#facc15" },
  { label: "Unhealthy", range: "101-150", color: "#fb923c" },
  { label: "Very Unhealthy", range: "151-200", color: "#ff5470" },
  { label: "Hazardous", range: "201+", color: "#a855f7" },
];

function AirQualityPage() {
  return (
    <div className="page-box">
      <div className="page-header">
        <div>
          <h1>Air Quality</h1>
          <p className="subtext">
            Monitor air quality and environmental conditions.
          </p>
        </div>

        <div className="total-box">
          <p>Current AQI</p>
          <h2>68</h2>
          <span className="trend trend-down">Good</span>
        </div>
      </div>

      <div className="row-split-even">
        <div className="chart-box">
          <h2>Pollutant Levels</h2>
          <div className="pollutant-grid">
            {pollutants.map((p, i) => (
              <div className="pollutant-item" key={i}>
                <p className="subtext">{p.label}</p>
                <h2>
                  {p.value}
                  <span className="pollutant-unit">{p.unit}</span>
                </h2>
              </div>
            ))}
          </div>
        </div>

        <div className="chart-box">
          <h2>AQI Map</h2>
          <div className="parking-map-crop">
  <img src={campusMap} alt="AQI Map" className="parking-map-img" />
  <span className="map-pin" style={{ top: "35%", left: "30%" }}>📍</span>
  <span className="map-pin" style={{ top: "55%", left: "60%" }}>📍</span>
  <span className="map-pin" style={{ top: "70%", left: "40%" }}>📍</span>
</div>
          <div className="aqi-legend">
            {legend.map((l, i) => (
              <div className="legend-item" key={i}>
                <span
                  className="legend-dot"
                  style={{ background: l.color }}
                ></span>
                {l.label} <span className="subtext">({l.range})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AirQualityPage;