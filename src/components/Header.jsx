import { MdNotifications, MdAccountCircle, MdDarkMode, MdLightMode, MdExpandMore, MdLocationOn } from "react-icons/md";

function Header({ theme, toggleTheme }) {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="topbar">
      <div className="location-select">
        <MdLocationOn />
        <span>Aexvora Institute of Technology (AIT)</span>
        <MdExpandMore />
      </div>

      <div className="topbar-right">
        <span className="date">{today}</span>

        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
        </button>

        <div className="notif-wrap">
          <MdNotifications className="header-icon" />
          <span className="notif-badge">3</span>
        </div>

        <div className="admin-tag">
          <MdAccountCircle className="header-icon" />
          <span>Admin</span>
        </div>
      </div>
    </div>
  );
}

export default Header;