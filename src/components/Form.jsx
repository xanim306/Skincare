import { useState } from "react";
import FirstInfo from "../components/FirstInfo";
import SecondInfo from "../components/SecondInfo";
import ThirdInfo from "../components/ThirdInfo";
import FourthInfo from "../components/FourthInfo";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Apiservice } from "../services/api_services";
import Swal from "sweetalert2";
function Form() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    email_confirm: "",
    password: "",
    password_confirm: "",
    age: "",
    country: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    surname: "",
    email: "",
    email_confirm: "",
    password: "",
    password_confirm: "",
    age: "",
    country: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  // const handleSubmit = () => {
  //   let formErrors = {};

  //   if (page === 0) {
  //     if (formData.name=== "") {
  //       formErrors.name = "Please provide a first name";
  //     }

  //     if (formData.surname === "") {
  //       formErrors.surname = "Please provide a last name";
  //     }
  //   } else if (page === 1) {
  //     if (formData.email === "") {
  //       formErrors.email= "Please provide an email";
  //     }
  //     if (formData.email_confirm === "") {
  //       formErrors.email_confirm = "Please confirm an email";
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

    if (name === "name") {
      newErrors.name = value.length < 3 ? "First name is too short" : "";
    }
    if (name === "surname") {
      newErrors.surname = value.length < 3 ? "Last name is too short" : "";
    }
    if (name === "email") {
      newErrors.email = !/\S+@\S+\.\S+/.test(value)
        ? "Invalid email format"
        : "";
    }
    if (name === "email_confirm") {
      newErrors.email_confirm =
        value !== formData.email ? "Emails do not match" : "";
    }
    if (name === "password") {
      newErrors.password = value.length < 8 ? "Password is too short" : "";
    }
    if (name === "password_confirm") {
      newErrors.password_confirm =
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

  function handleSignUp() {
    Apiservice.register(formData).then((res) => {
      console.log(res);
      // res.uuid store add
      // window.open(`http://127.0.0.1:8000/accounts/activate/OQ/${res.uuid}`);
      Swal.fire({
        title: "Accounts Activate Code Email",
        input: "text",
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        confirmButtonText: "Submit",
        showLoaderOnConfirm: true,
        confirmButtonColor: "green",
        allowOutsideClick: () => !Swal.isLoading(),
      }).then((result) => {
        console.log(result);
        if (result.value) {
          axios
            .post(`http://127.0.0.1:8000/accounts/activate/${res.uuid}/`, {
              code: result.value,
            })
            .then((res) => {
              navigate("/login");
            });
        }
      });
    });
  }

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
                          formData.name &&
                          formData.surname &&
                          newErrors.name === "" &&
                          newErrors.surname === ""
                        ) {
                          setPage((currPage) => currPage + 1);
                          break;
                        } else {
                          console.log(formData.name.length);
                          // console.log(newErrors.surname.length);
                          newErrors.name =
                            formData.name.length < 3
                              ? "First name is too short"
                              : "";
                          newErrors.surname =
                            formData.surname.length < 3
                              ? "Last name is too short"
                              : "";
                          setErrors(newErrors);
                        }
                      case 1:
                        if (
                          formData.email &&
                          formData.email_confirm &&
                          newErrors.email === "" &&
                          newErrors.email_confirm === ""
                        ) {
                          setPage((currPage) => currPage + 1);
                          break;
                        }
                      case 2:
                        if (
                          formData.password &&
                          formData.email_confirm &&
                          newErrors.password === "" &&
                          newErrors.password_confirm === ""
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
                          // navigate("/login");
                          break;
                        }
                    }
                  }
                  {
                    page == 3 && handleSignUp();
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
