function FirstInfo({ formData, errors, handleChange }) {
  return (
    <>
      <div className="first_info">
        <form
          action="
        "
        >
          <label htmlFor="firstname">First Name</label>
          <div className="fn_inp">
            <input
              id="firstname"
              type="text"
              name="name"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />

            {errors.firstName && (
              <p style={{ color: "red" }}>{errors.firstName}</p>
            )}
          </div>
          <label htmlFor="lastname">Last Name</label>
          <div className="ln_inp">
            <input
              id="lastname"
              type="text"
              name="surname"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <p style={{ color: "red" }}>{errors.lastName}</p>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
export default FirstInfo;
