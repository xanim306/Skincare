import Newsletter from "../components/Newsletter";

function About() {
  return (
    <>
      <div className="about">
        <div className="container">
          <div className="about_inner">
            
          <span>Home <i class="fa-solid fa-chevron-right"></i>Navigation <i class="fa-solid fa-chevron-right"></i> About</span>
            <p className="subtitle">- Learn More</p>
            <p className="title">All About Us</p>

            <div className="about_bg"></div>
            <section className="about_info">
              <div className="about_left">
                <p className="subtitle">- How it has Started</p>
                <p className="title">How and When it has All Started</p>
                <div className="info_bg"></div>
              </div>
              <div className="about_right">
                <h3>
                  <span></span>Natural Ingredients Only
                </h3>
                <p>
                  10 years ago, when one of the co-founders came up with the
                  idea of making skincare and beauty products using only natural
                  ingredients, he did not even think twice.
                </p>
                <h3>
                  <span></span>Affordable Pricing Strategy
                </h3>
                <p>
                  One of our main goals from the start was to offer high quality
                  products that would also have affordable prices. We just can’t
                  believe that we have finally achieved this and now we are
                  proud of it.
                </p>
              </div>
            </section>
            <section className="why_choose">
              <p className="subtitle">- Company Values</p>
              <p className="title">Our Core Values</p>
              <div className="choose_cols">
                <div className="choose_col">
                  <div className="choose_icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="19"
                      viewBox="0 0 32 19"
                      fill="none"
                    >
                      <path
                        d="M30 2L17.9091 13.875L11.5455 7.625L2 17"
                        stroke="black"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22 2H30V9.99997"
                        stroke="black"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <p>Great Innovation</p>
                  <span>
                    We are always focusing on making all our products as
                    innovative as possible.
                  </span>
                </div>
                <div className="choose_col">
                  <div className="choose_icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M16 3L20.326 11.5573L30 12.938L23 19.5952L24.652 29L16 24.5573L7.348 29L9 19.5952L2 12.938L11.674 11.5573L16 3Z"
                        stroke="black"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p>High Quality</p>
                  <span>
                    One of our main values is the quality of the products that
                    we sell to the customers.
                  </span>
                </div>
                <div className="choose_col">
                  <div className="choose_icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="32"
                      viewBox="0 0 28 32"
                      fill="none"
                    >
                      <path
                        d="M26 30V27C26 25.4087 25.3679 23.8826 24.2426 22.7574C23.1174 21.6321 21.5913 21 20 21H8C6.4087 21 4.88258 21.6321 3.75736 22.7574C2.63214 23.8826 2 25.4087 2 27V30"
                        stroke="black"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 14C17.3137 14 20 11.3137 20 8C20 4.68629 17.3137 2 14 2C10.6863 2 8 4.68629 8 8C8 11.3137 10.6863 14 14 14Z"
                        stroke="black"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p>Teamwork Matters</p>
                  <span>
                    We believe that being a successful company is all about
                    being a team.
                  </span>
                </div>
              </div>
              <a href="" className="view_btn">View Jobs</a>
            </section>
            
          </div>
        </div>
      </div>
      <Newsletter />
    </>
  );
}

export default About;
