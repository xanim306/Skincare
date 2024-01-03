function SecondInfo({ formData,errors,handleChange }) {
  return (
    <div className="second_info">
      <form action="
      ">
        <label htmlFor="email">Email</label>
        <div className="em_inp">
        <input
        type="text"
        name="email"
        placeholder="johnsmith@gmail.com"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <p style={{color:"red"}}>{errors.email}</p>}

        </div>
      
      <label htmlFor="confirmEmail">Confirm Email</label>
      <div className="ce_inp">
      <input
        type="text"
        name="confirmEmail"
        placeholder="Confirm email"
        value={formData.confirmEmail}
        onChange={handleChange
        }
      />
      {errors.confirmEmail && <p style={{color:"red"}}>{errors.confirmEmail}</p>}

      </div>
     
      </form>
     
    </div>
  );
}

export default SecondInfo;
