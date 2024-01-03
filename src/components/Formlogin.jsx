import { useState } from "react";
import { Link } from "react-router-dom";
function Formlogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  return (
    <>
      <div className="formlogin">
        <form
          action="
                "
        >
          <label htmlFor="email">Email</label>
          <div className="em_inp">
            <input
              type="text"
              placeholder="johnsmith@gmail.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <label htmlFor="password">Password</label>
          <div className="ps_inp">
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <div className="accept">
            
              <input
                type="checkbox"
                id="remember"
                name="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
           
            <label htmlFor="remember">Remember me</label>
          </div>
          <Link to="/login" className="login_btn">
            Login
          </Link>
          <ul>
            <li>
              <h4>
                <Link to="/signup" className="signup_btn">
                  Create Account
                </Link>
              </h4>
            </li>
            <li>
              <Link to="/login">Forgot Password?</Link>
            </li>
          </ul>
        </form>
      </div>
    </>
  );
}

export default Formlogin;
