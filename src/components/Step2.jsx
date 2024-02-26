import React from 'react'
import { useState,useEffect } from 'react';
import axios from "axios";
import { connect } from 'react-redux';
function Step2({nextStep,prevStep}) {
  // const navigate = useNavigate();
  const [shippingData, setShippingData] = useState({
    fullName: "",
    streetName: "",
    houseNumber:"",
    city:"",
    country:"",
    zipCode:""
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
    <>
    <div className="checkout_inner">
    <div className='step1'>

   
<form
   action="
         "
 >
   <p className="checkdetails">Shipping Details</p>
   <label htmlFor="">Full Name</label>
   <div className="em_inp">
     <input
       type="text"
       placeholder="John Smith"
       value={shippingData.fullName}
       onChange={(e) =>
         setShippingData({ ...shippingData, fullName: e.target.value })
       }
     />
   </div>
   <label htmlFor="">Street Name</label>
   <div className="ps_inp">
     <input
       type="text"
       placeholder="123 Street Name"
       value={shippingData.streetName}
       onChange={(e) =>
         setShippingData({ ...shippingData, strretNumber: e.target.value })
       }
     />
   </div>
  <div className="house">
  <div>
  <label htmlFor="">House Number</label>
  <div className='em_inp'>
  <input type="text"
        placeholder="123"
        value={shippingData.houseNumber}
        onChange={(e) =>
          setShippingData({ ...shippingData, houseNumber: e.target.value })
        }
     />
  </div>
   
     </div>
     <div>
     <label htmlFor="">City</label>
     <div className='em_inp'>  <input type="text"
        placeholder="San Francisco"
        value={shippingData.city}
        onChange={(e) =>
          setShippingData({ ...shippingData, city: e.target.value })
        }
     /></div>
   
  </div>
     
     </div>
     <div className="house">

     <div>
     <label htmlFor="">Country</label>
     <div className='em_inp'>
     <input type="text"
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
     <div className='em_inp'>
     <input type="text"
        placeholder="123 987"
        value={shippingData.zipCode}
        onChange={(e) =>
          setShippingData({ ...shippingData, zipCode: e.target.value })
        }
     />
     </div>
    
     </div>
    
     </div>
  


   <button className="login_btn" onClick={nextStep}>
     Continue
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
    
    </>
  )
}
const t=(a)=>a;
export default(t) (Step2)