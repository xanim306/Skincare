function ThirdInfo({ formData, errors, handleChange }) {
  return (
    <>
      <div className="third_info">
        <form action="">
          <label htmlFor="password">Password</label>
          <div className="ps_inp">
            <input
              name="password"
              id="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}
          </div>
          <label htmlFor="con_password">Confirm Password</label>
          <div className="cps_inp">
            <input
              name="password_confirm"
              id="con_password"
              type="password"
              placeholder="Confirm Password"
              value={formData.password_confirm}
              onChange={handleChange}
            />
            {errors.password_confirm && (
              <p style={{ color: "red" }}>{errors.password_confirm}</p>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default ThirdInfo;
