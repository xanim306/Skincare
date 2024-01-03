import { useState } from "react";
import FirstInfo from "../components/FirstInfo";
import SecondInfo from "../components/SecondInfo";
import ThirdInfo from "../components/ThirdInfo";
import FourthInfo from "../components/FourthInfo";
import { Link } from "react-router-dom";
function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
    age: "",
    country: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
    age: "",
    country: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  // const handleSubmit = () => {
  //   let formErrors = {};

  //   if (page === 0) {
  //     if (formData.firstName=== "") {
  //       formErrors.firstName = "Please provide a first name";
  //     }

  //     if (formData.lastName === "") {
  //       formErrors.lastName = "Please provide a last name";
  //     }
  //   } else if (page === 1) {
  //     if (formData.email === "") {
  //       formErrors.email= "Please provide an email";
  //     }
  //     if (formData.confirmEmail === "") {
  //       formErrors.confirmEmail = "Please confirm an email";
  //     }

  //   }

  //   if (Object.keys(formErrors).length > 0) {
  //     setErrors(formErrors);
  //   } else {
  //     setErrors({});
  //     // setPage(currPage + 1);
  //   }
  // };
  const newErrors = { ...errors };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (name === "firstName") {
      newErrors.firstName = value.length < 3 ? "First name is too short" : "";
    }
    if (name === "lastName") {
      newErrors.lastName = value.length < 3 ? "Last name is too short" : "";
    }
    if (name === "email") {
      newErrors.email = !/\S+@\S+\.\S+/.test(value)
        ? "Invalid email format"
        : "";
    }
    if (name === "confirmEmail") {
      newErrors.confirmEmail =
        value !== formData.email ? "Emails do not match" : "";
    }
    if (name === "password") {
      newErrors.password = value.length < 8 ? "Password is too short" : "";
    }
    if (name === "confirmPassword") {
      newErrors.confirmPassword =
        value !== formData.password ? "Passwords do not match" : "";
    }
    if (name === "age") {
      newErrors.age = value.length === 0 ? "This field is required" : "";
    }
    if (name === "country") {
      newErrors.country = value.length === 0 ? "This field is required" : "";
    }
    setErrors(newErrors);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <FirstInfo
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          handleChange={handleChange}
        />
      );
    } else if (page === 1) {
      return (
        <SecondInfo
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          handleChange={handleChange}
        />
      );
    } else if (page === 2) {
      return (
        <ThirdInfo
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          handleChange={handleChange}
        />
      );
    } else {
      return (
        <FourthInfo
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          handleChange={handleChange}
          rememberMe={rememberMe}
          setRememberMe={setRememberMe}
        />
      );
    }
  };
  return (
    <>
      <div className="form">
        <div className="form_container">
          <div className="body">{PageDisplay()}</div>
          <div className="footer">
            <div className="buttons">
              <button
                disabled={page === 0}
                onClick={() => {
                  setPage((currPage) => currPage - 1);
                }}
              >
                Prev
              </button>
              <button
                onClick={() => {
                  {
                    // handleSubmit()
                    switch (page) {
                      case 0:
                        if (
                          formData.firstName &&
                          formData.lastName &&
                          newErrors.firstName === "" &&
                          newErrors.lastName === ""
                        ) {
                          setPage((currPage) => currPage + 1);
                          break;
                        } else {
                          console.log(formData.firstName.length);
                          // console.log(newErrors.lastName.length);
                          newErrors.firstName =
                            formData.firstName.length < 3
                              ? "First name is too short"
                              : "";
                          newErrors.lastName =
                            formData.lastName.length < 3
                              ? "Last name is too short"
                              : "";
                          setErrors(newErrors);
                        }
                      case 1:
                        if (
                          formData.email &&
                          formData.confirmEmail &&
                          newErrors.email === "" &&
                          newErrors.confirmEmail === ""
                        ) {
                          setPage((currPage) => currPage + 1);
                          break;
                        }
                      case 2:
                        if (
                          formData.password &&
                          formData.confirmEmail &&
                          newErrors.password === "" &&
                          newErrors.confirmPassword === ""
                        ) {
                          setPage((currPage) => currPage + 1);
                          break;
                        }
                      case 3:
                        if (
                          formData.age &&
                          formData.country &&
                          newErrors.age === "" &&
                          newErrors.country === "" &&
                          rememberMe
                        ) {
                          alert("Form Submitted");
                          break;
                        }
                    }
                  }
                }}
              >
                {page === 3 ? "Submit" : "Next"}
              </button>
            </div>
          </div>
        </div>
        <div className="progressbar">
          <div
            style={{
              width:
                page === 0
                  ? "25%"
                  : page === 1
                  ? "50%"
                  : page === 2
                  ? "75%"
                  : "100%",
            }}
          ></div>
        </div>
        <ul>
          <li>
            <h4>
              <Link to="/signup" className="signup_btn">
                Create Account
              </Link>
            </h4>
          </li>
          <li>
            <h4>
              <Link to="/login" className="login_btn">
                Login
              </Link>
            </h4>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Form;
