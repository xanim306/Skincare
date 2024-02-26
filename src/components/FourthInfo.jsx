// import { useState } from "react";
function FourthInfo({ formData,errors,handleChange,rememberMe,setRememberMe }) {
  
 const handleSubmit=(e)=>{
e.preventDedault();

  
 }
//  const [rememberMe, setRememberMe] = useState(false);
  console.log(rememberMe);
  return (
    <>
      <div className="fourth_info">
        <form onSubmit={handleSubmit}
          action=" 
        "
          
        >
          <label htmlFor="age">Age</label>
          <div className="age_inp">
            <input
            name="age"
              type="text"
              id="age"
              placeholder="Your age"
              value={formData.age}
              onChange={handleChange
              }
            />
            {errors.age && <p style={{color:"red"}}>{errors.age}</p>}
          </div>

          <label htmlFor="country">Country</label>
          <div className="cn_input">
            <input
            name="country"
              id="country"
              type="text"
              placeholder="Your country"
              value={formData.country}
              onChange={handleChange
              }
            />
            {errors.country && <p style={{color:"red"}}>{errors.country}</p>}
          </div>

          <div className="accept">
            <input
              type="checkbox"
              id="accept"
              name="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />

            <label htmlFor="accept">
              I have read and agree to <span>terms & conditions</span>
            </label>
          </div>
        </form>
      </div>
    </>
  );
}

export default FourthInfo;
