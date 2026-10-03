import { MdBolt, MdWaterDrop, MdEco, MdRecycling } from "react-icons/md";
import Logo from "./Logo";

function Footer() {
  return (
    <div className="app-footer">
      <div className="footer-brand">
        <Logo size={32} />
        <div>
          <h2>ECOGENIX</h2>
          <p className="subtext">
            Smarter Decisions &nbsp;|&nbsp; Greener Campuses &nbsp;|&nbsp; A Sustainable Future
          </p>
        </div>
      </div>

      <div className="footer-icons">
        <div className="footer-icon-item">
          <span className="footer-icon-circle"><MdBolt /></span>
          <p>Save Energy</p>
        </div>
        <div className="footer-icon-item">
          <span className="footer-icon-circle"><MdWaterDrop /></span>
          <p>Conserve Water</p>
        </div>
        <div className="footer-icon-item">
          <span className="footer-icon-circle"><MdEco /></span>
          <p>Reduce Emissions</p>
        </div>
        <div className="footer-icon-item">
          <span className="footer-icon-circle"><MdRecycling /></span>
          <p>Build a Better Tomorrow</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;