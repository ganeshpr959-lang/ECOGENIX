function Greeting() {
  return (
    <div className="greeting-row">
      <div>
        <h1>Good Morning, Ganesh 👋</h1>
       <p className="subtext">Here's what's happening at Aexvora Institute of Technology today.</p>
      </div>

      <div className="score-card">
        <span className="score-icon">🌿</span>
        <div>
          <p className="score-label">Sustainability Score</p>
          <h2>87 <span className="score-max">/ 100</span></h2>
        </div>
        <span className="score-badge">Excellent</span>
      </div>
    </div>
  );
}

export default Greeting;