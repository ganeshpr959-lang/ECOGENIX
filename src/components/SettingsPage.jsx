import { useState } from "react";

function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [weeklyReport, setWeeklyReport] = useState(false);

  return (
    <div className="page-box">
      <div className="page-header">
        <div>
          <h1>Settings</h1>
          <p className="subtext">Manage your account and preferences.</p>
        </div>
      </div>

      <div className="chart-box">
        <h2>Account Information</h2>
        <div className="settings-form">
          <div className="settings-field">
            <label>Full Name</label>
            <input type="text" defaultValue="Admin User" />
          </div>
          <div className="settings-field">
            <label>Email</label>
            <input type="email" defaultValue="admin@ecogenix.com" />
          </div>
          <div className="settings-field">
            <label>Role</label>
            <input type="text" defaultValue="Administrator" disabled />
          </div>
        </div>
        <button className="rec-btn" style={{ marginTop: "16px" }}>
          Save Changes
        </button>
      </div>

      <div className="chart-box" style={{ marginTop: "20px" }}>
        <h2>Notifications</h2>
        <div className="toggle-row">
          <div>
            <p className="toggle-title">Push Notifications</p>
            <p className="subtext">Get real-time alerts on your device.</p>
          </div>
          <label className="switch">
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="toggle-row">
          <div>
            <p className="toggle-title">Email Alerts</p>
            <p className="subtext">Receive critical alerts via email.</p>
          </div>
          <label className="switch">
            <input
              type="checkbox"
              checked={emailAlerts}
              onChange={() => setEmailAlerts(!emailAlerts)}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="toggle-row">
          <div>
            <p className="toggle-title">Weekly Report Email</p>
            <p className="subtext">Get a sustainability summary every week.</p>
          </div>
          <label className="switch">
            <input
              type="checkbox"
              checked={weeklyReport}
              onChange={() => setWeeklyReport(!weeklyReport)}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;