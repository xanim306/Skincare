import Select from "react-select";
function Contact() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "2px solid #f6f7fb",
      borderRadius: "32px",
      width: "496px",
      height: `64px`,
      paddingTop: `16px`,
      paddingLeft: `24px`,
      paddingBottom: `16px`,
      paddingRight: `24px`,
    }),
  };
  return (
    <>
      <div className="contact">
        <div className="container">
          <span>
            Home Page <i className="fa-solid fa-chevron-right"></i>Navigation{" "}
            <i className="fa-solid fa-chevron-right"></i>Contact Us
          </span>
          <div className="name">
            <p className="subtitle">- Ask Questions</p>
            <p className="title">We are always here to help you</p>
          </div>

          <ul className="main">
            <li>
              <p>Customer Service</p>
              <p>
                Please send us an email at <span>customercare@hygge.com</span>
              </p>
            </li>
            <li>
              <p>Public Relations</p>
              <p>
                You can contact our media team by sending an email
                <span>media@hygge.com</span>
              </p>
            </li>
            <li>
              <p>Large Orders</p>
              <p>
                If you are thinking of making a very large order, please feel
                free to contact us at <span>sales@hygge.com </span>and we will
                give you a special discount
              </p>
            </li>
            <li>
              <p>Other Enquiries</p>
              <p>
                For all of your other questions, please send us an email at{" "}
                <span>general@hygge.com</span>
              </p>
            </li>
          </ul>
          <section className="contactForm">
            <div className="name">
              <p className="subtitle">- Reach Out to Us</p>
              <p className="title">Please fill out the contact form</p>
            </div>

            <form
              action="
            "
            >
              <label htmlFor="name">Full Name</label>
              <div className="input">
                <input type="text" placeholder="John Smith" id="name" />
              </div>

              <label htmlFor="email">Email Address</label>
              <div className="input">
                <input
                  type="email"
                  placeholder="johnsmith@gmail.com"
                  id="email"
                />
              </div>
              <label htmlFor="">Subject</label>
              <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={options[0]}
                name="color"
                options={options}
                styles={customStyles}
              />

              <label htmlFor="">Message</label>
              <div className="message">
                {/* <input
                  type="text"
                  placeholder="Hi, I am just wondering where can I find your refund policy?"
                /> */}
                <textarea name="" id="" >Hi, I am just wondering where can I find your refund policy?</textarea>
              </div>
              <a className="btn">Send</a>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}

export default Contact;
