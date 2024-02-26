import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
function Step4({ nextStep, prevStep }) {
  const [shippingData, setShippingData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    country: "",
    zipCode: "",
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
  return (
    <div>
       <div className="checkout_inner">
       <div className="step1">
        <form
          action="
         "
        >
          <p className="checkdetails">Payment Details</p>
          <div>
            <label htmlFor="">Card Number</label>
            <div className="em_inp">
              {" "}
              <input
                type="number"
                placeholder="1234 9876 4321 6789"
                value={shippingData.cardNumber}
                onChange={(e) =>
                  setShippingData({
                    ...shippingData,
                    cardNumber: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="house">
            <div>
            <label htmlFor="">Expiry Date</label>
            <div className="em_inp">
              <input
                type="text"
                placeholder="06/21"
                value={shippingData.expiryDate}
                onChange={(e) =>
                  setShippingData({
                    ...shippingData,
                    expiryDate: e.target.value,
                  })
                }
              />
            </div>
            </div>
            
            <div>
            <label htmlFor="">CVV</label>
            <div className="em_inp">
              <input
                type="text"
                placeholder="123"
                value={shippingData.cvv}
                onChange={(e) =>
                  setShippingData({ ...shippingData, cvv: e.target.value })
                }
              />
            </div>
            </div>
           
          </div>
          <div className="house">
            <div>
            <label htmlFor="">Country</label>
            <div className="em_inp">
              <input
                type="text"
                placeholder="USA"
                value={shippingData.country}
                onChange={(e) =>
                  setShippingData({ ...shippingData, country: e.target.value })
                }
              />
            </div>
            </div>
            
            
            <div>
              <label htmlFor="">ZIP Code</label>
              <div className="em_inp">
                <input
                  type="text"
                  placeholder="123 987"
                  value={shippingData.zipCode}
                  onChange={(e) =>
                    setShippingData({
                      ...shippingData,
                      zipCode: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>

          <button className="login_btn">
            Place Order
          </button>
          <button className="back_btn" onClick={prevStep}>
            Back
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
        </div>
      </div>
       </div>
     
    </div>
  );
}

export default Step4;
