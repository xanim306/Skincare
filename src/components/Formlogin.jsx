import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Apiservice } from "../services/api_services";
import axios from "axios";
import Swal from "sweetalert2";
function Formlogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);

  function handleChangeLogin() {
    // Apiservice.login(formData)
    //   .then((res) => {
    //     console.log(res);
    //     navigate("/");
    //   })
    //   .catch((err) => {
    //     console.log("eeeee");
    //   });
    axios
      .post(`http://127.0.0.1:8000/accounts/login/`, formData)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.tokens.access);
        localStorage.setItem("refresh", res.data.tokens.refresh);
        const tokens = res.data.tokens.access;
        const userid = JSON.parse(atob(tokens.split(".")[1])).user_id;
        console.log(userid);
        localStorage.setItem("usersID", userid);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("first");
  }

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
          <Link className="login_btn" onClick={handleChangeLogin}>
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
