import { connect } from "react-redux";
import { useState,useEffect } from "react";
function Newsletter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isModalOpen]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = (email) => {
    // A simple email validation pattern
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  }; 

  const handleSubscribe = async () => {
    if (!email) {
      setMessage('Please enter your email address.');
      setIsModalOpen(true);
    } else if (!validateEmail(email)) {
      setMessage('Please enter a valid email address.');
      setIsModalOpen(true);
    } else {
      try {
        // Make an HTTP POST request to your server to handle the subscription
        const response = await fetch('http://127.0.0.1:8000/products/news/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        // Handle the subscription request
        if (response.ok) {
          setMessage('Subscription successful!');
          setIsModalOpen(true);
        } else {
          setMessage('An error occurred. Please try again.');
          setIsModalOpen(true);
        }
      }
        
      catch (error) {
        setMessage('An error occurred. Please try again.');
        setIsModalOpen(true);
      }
    }
  };


  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="bg_white newsletter">
        
          <div className="letter_inner">
            <p className="subtitle">- Our Newsletter</p>
            <p className="title">Subscribe to our Newsletter</p>
            <div className="input_row">
              <div className="letter_input">
                <input type="email" placeholder="Your Email" value={email} onChange={handleEmailChange} />
              </div>
             
                <button onClick={handleSubscribe} className="btn">Subscribe</button>
              
                {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <h2>Subscription Message</h2>
            <p>{message}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
                
                
            </div>
            
          </div>
        
      </div>
    </>
  );
}
const t=(a)=>a;
export default connect(t) (Newsletter);
