// import { useState } from "react"
// import { Link } from "react-router-dom";
import Form from "../components/Form";
function Signup() {
//     const[email,setEmail]=useState("");
//     const[password,setPassword]=useState("")
//     const validateForm=()=>{
// if(email.length===0){
//     alert("Invalid Form, Email Address can not be empty")
//     return;
// }
// if(password.length<8){
// alert("Invalid Form, Password must contain greater than or equal to 8 characters.")
// return;
// }
//     }
  return (
    <>
    <section className="signup">
        <div className="container">
        <p className="subtitle">- Sign Up</p>
   <p className="title"> Create Account</p>
   <Form/>
   {/* <form action="">
    <div>
    <label htmlFor="email">Email Address</label>
    <div className="email_inp">
    <input type="email" id="email" onChange={(e)=>setEmail(e.target.value)} placeholder="johnsmith@gmail.com" />
    </div>
    </div>
    <div>
        <label htmlFor="password">Create Password</label>
        <div className="password_inp">
        <input type="password" id="password" onChange={(e)=>setPassword(e.target.value)} placeholder="************"/>
        </div>
        
    </div>
   
    
    
   </form> */}
        </div>

    </section>
   
    
    </>
  )
}

export default Signup