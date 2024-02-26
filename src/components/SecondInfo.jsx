function SecondInfo({ formData, errors, handleChange }) {
  return (
    <div className="second_info">
      <form
        action="
      "
      >
        <label htmlFor="email">Email</label>
        <div className="em_inp">
          <input
            type="text"
            name="email"
            placeholder="johnsmith@gmail.com"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <label htmlFor="email_confirm">Confirm Email</label>
        <div className="ce_inp">
          <input
            type="text"
            name="email_confirm"
            placeholder="Confirm email"
            value={formData.email_confirm}
            onChange={handleChange}
          />
          {errors.email_confirm && (
            <p style={{ color: "red" }}>{errors.email_confirm}</p>
          )}
        </div>
      </form>
    </div>
  );
}

export default SecondInfo;
