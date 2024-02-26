import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Apiservice } from "../services/api_services";
import axios from "axios";
import { connect } from "react-redux";
import Swal from "sweetalert2";

function Step1({ nextStep,API_IMAGE }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/products/cart/")
      .then((response) => {
        console.log(response);
        setCartItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  }, []);
  
  // function handleChangeLogin() {
  //   axios
  //     .post(`http://127.0.0.1:8000/accounts/login/`, formData)
  //     .then((res) => {
  //       console.log(res);
  //       localStorage.setItem("token", res.data.tokens.access);
  //       localStorage.setItem("refresh", res.data.tokens.refresh);
  //       const tokens = res.data.tokens.access;
  //       const userid = JSON.parse(atob(tokens.split(".")[1])).user_id;
  //       console.log(userid);
  //       localStorage.setItem("usersID", userid);
  //       navigate("/");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   console.log("first");
  // }
  return (
    <div className="checkout_inner">
      <div className="step1">
        <form
          action="
                "
        >
          <p className="checkdetails">Details</p>
          <label htmlFor="email">Email Address</label>
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

          <button className="login_btn" onClick={nextStep}>
            Continue
          </button>
        </form>
        <div className="checkout_right">
          <p className="myCart">My Cart</p>
          {cartItems?.items &&
                cartItems?.items?.map((item) => (
                  <div key={item.id} className="cartItem">
                    <div className="itemImage">
                      <img
                        src={`http://127.0.0.1:8000${item?.product_image}`}
                        alt={item.name}
                      />
                    </div>
                    <div className="itemDetails">
                      <div className="commonData">
                      <p className="itemTitle">{item?.product_title}</p>
                      
                      <div className="title">
                        {/* <p>{item.quantity}</p> */}

                        {item?.price !== item?.total_price ? (
                          <p className="oldprice">${item?.price}</p>
                        ) : null}
                        <p className="newprice"> ${item?.total_price}</p>
                      </div>
                      </div>
                      
                      <button
                          className="removeBtn"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <span className="removeBtnIcon">X</span>
                        </button>
        </div>
        
      </div>
      
      ))}
      <div className="data total">
                  <p>Total:</p>
                  <span>${cartItems.total_price}</span>
                </div>
    </div>
    </div>
    </div>
  )
                }
const t=(a)=>a;
export default (t) (Step1);
