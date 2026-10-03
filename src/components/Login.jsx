import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdPerson, MdLock, MdVisibility, MdVisibilityOff } from "react-icons/md";
import Logo from "./Logo";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <div className="login-brand">
          <Logo size={40} />
          <div>
            <h1>ECOGENIX</h1>
            <p>Smart Sustainable Campus for a Greener Tomorrow</p>
          </div>
        </div>
      </div>

      <div className="login-right">
        <div className="login-box">
          <div className="login-brand-small">
            <Logo size={22} />
            <h2>ECOGENIX</h2>
          </div>

          <h1>Welcome <span className="highlight">Back</span></h1>
          <p className="subtext">Sign in to your ECOGENIX account</p>

          <form onSubmit={handleLogin}>
            <label>Username</label>
            <div className="input-wrap">
              <MdPerson className="input-icon" />
              <input type="text" placeholder="Enter your username" required />
            </div>

            <label>Password</label>
            <div className="input-wrap">
              <MdLock className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
              />
              <span
                className="input-icon-right"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
              </span>
            </div>

            <div className="login-options">
              <label className="remember-me">
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#" className="forgot-link">Forgot password?</a>
            </div>

            <button type="submit" className="login-btn">
              Login →
            </button>

            <button type="button" className="admin-btn">
              Login as Administrator
            </button>
          </form>

          <p className="login-footer">
            <Logo size={14} /> Securing a sustainable campus together
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;