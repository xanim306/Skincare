import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios";
import { connect } from 'react-redux';

function Step3({nextStep,prevStep}) {
const [rememberMe,setRememberMe]=useState(false)
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
  return (
    <>
    <div className="checkout_inner">
    <div className="step1">
      <form action="">
      <p className='checkdetails'>Billing Details</p>
      <div className="accept">
      <input
              type="checkbox"
              id="remember"
              name="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />

            <label htmlFor="remember">Same as shipping address</label>
      </div>
    



        <button  className='login_btn'
        onClick={nextStep}>Continue</button> 
        <button className='back_btn' onClick={prevStep}>Back</button>
   
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
      </div>
      </div>
    </div>
   
    
    </>
  )
}
const t=(a)=>a;
export default (t) (Step3);