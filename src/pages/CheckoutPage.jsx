import React from 'react'
import { useState,useEffect } from 'react';
import axios from "axios";
import { connect } from "react-redux";
import Step1 from '../components/Step1';
import Step2 from '../components/Step2';
import Step3 from '../components/Step3';
import Step4 from '../components/Step4';
const CheckoutPage = ({API_IMAGE}) => {
    const [currentStep, setCurrentStep] = useState(1);
  // ---------------
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

  // ---------------
    const nextStep = () => {
      setCurrentStep(currentStep + 1);
    };
  
    const prevStep = () => {
      setCurrentStep(currentStep - 1);
    };
    return (
        <div className="checkout-page">
          <div className="container">
          <span>
            Home Page {" "}
            <i class="fa-solid fa-chevron-right"></i> Shopping Cart <i class="fa-solid fa-chevron-right"></i> Checkout
          </span>
          <p className="subtitle">- Almost There</p>
          <span className="title">Checkout</span>
          <div className="step-indicator">
          
          <div className="step-wrapper">
          <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
            <div className="step-number">1</div>
          </div>
          <div className="line"></div>
        </div>
        <div className="step-wrapper">
          <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
            <div className="step-number">2</div>
          </div>
          <div className="line"></div>
        </div>
        <div className="step-wrapper">
          <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
            <div className="step-number">3</div>
          </div>
          <div className="line"></div>
        </div>
        <div className="step-wrapper">
          <div className={`step ${currentStep >= 4 ? 'active' : ''}`}>
            <div className="step-number">4</div>
          </div>
        </div>
          </div>
          <div className="checkout-form">
            {currentStep === 1 && (
              <Step1 nextStep={nextStep} />
            )}
            {currentStep === 2 && (
              <Step2 nextStep={nextStep} prevStep={prevStep} />
            )}
            {currentStep === 3 && (
              <Step3 nextStep={nextStep} prevStep={prevStep} />
            )}
            {currentStep === 4 && (
              <Step4 prevStep={prevStep} />
            )}
          </div>
        </div>
      </div>
         
    )
         
         
}



  // const Step2 = ({ nextStep, prevStep }) => {
  //   return (
  //     <div>
  //       <h2>Step 2</h2>
  //       {/* Your Step 2 form content goes here */}
  //       <button onClick={prevStep}>Previous</button>
  //       <button onClick={nextStep}>Continue</button>
  //     </div>
  //   );
  // };

  // const Step3 = ({ nextStep, prevStep }) => {
  //   return (
  //     <div>
  //       <h2>Step 3</h2>
  //       {/* Your Step 3 form content goes here */}
  //       <button onClick={prevStep}>Previous</button>
  //       <button onClick={nextStep}>Continue</button>
  //     </div>
  //   );
  // };

  // const Step4 = ({ prevStep }) => {
  //   return (
  //     <div>
  //       <h2>Step 4</h2>
  //       {/* Your Step 4 form content goes here */}
  //       <button onClick={prevStep}>Previous</button>
  //       <button>Finish</button>
  //     </div>
  //   );
  // };

const t=(a)=>a;
export default (t)(CheckoutPage);