import { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Greeting from "./components/Greeting";
import Dashboard from "./components/Dashboard";
import Alerts from "./components/Alerts";
import SidePanel from "./components/SidePanel";
import Chart from "./components/Chart";
import Insights from "./components/Insights";
import Login from "./components/Login";
import EnergyPage from "./components/EnergyPage";
import WaterPage from "./components/WaterPage";
import WastePage from "./components/WastePage";
import AirQualityPage from "./components/AirQualityPage";
import ParkingPage from "./components/ParkingPage";
import AlertsPage from "./components/AlertsPage";
import ReportsPage from "./components/ReportsPage";
import Footer from "./components/Footer";
import BuildingsPage from "./components/BuildingsPage";
import ComplaintsPage from "./components/ComplaintsPage";
import SettingsPage from "./components/SettingsPage";

function DashboardHome() {
  return (
    <>
      <Greeting />
      <Dashboard />
      <div className="row-split">
        <Alerts />
        <SidePanel />
      </div>
      <Chart />
      <Insights />
    </>
  );
}

function Layout({ theme, toggleTheme }) {
  return (
    <div className={`container ${theme}`}>
      <Sidebar />
      <div className="main">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<Layout theme={theme} toggleTheme={toggleTheme} />}>
        <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="/energy" element={<EnergyPage />} />
        <Route path="/water" element={<WaterPage />} />
        <Route path="/waste" element={<WastePage />} />
        <Route path="/air-quality" element={<AirQualityPage />} />
        <Route path="/parking" element={<ParkingPage />} />
        <Route path="/alerts" element={<AlertsPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/buildings" element={<BuildingsPage />} />
        <Route path="/complaints" element={<ComplaintsPage />} />
        <Route path="/settings" element={<SettingsPage />} /> 
      </Route>
    </Routes>
  );
}

export default App;