import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation,Pagination } from "swiper/modules";
function Slide() {
  return (
    <>
      <div className="bg_white">
          <div className="reviews">
            <div className="review_left">
              <p className="subtitle">- Our Reviews</p>
              <p className="title">What our Customers are Saying</p>
            </div>
            <div className="review_right">
              <div className="swiper-container">
              <Swiper
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                // pagination={true}
                modules={[Navigation,Pagination]}
              
      pagination={{ clickable: true }}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src="slideImages/1.png" alt="" />
                  <p className="name">Amy Smith</p>
                  <p>
                    This is the best website I have ordered something from. I
                    highly recommend.
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                <img src="slideImages/2.png" alt="" />
                  <p className="name">Anna Clarke</p>
                  <p>
                  It’s quite a nice product and I am really satisfied with the quality of it.
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                <img src="slideImages/1.png" alt="" />
                  <p className="name">Amy Smith</p>
                  <p>
                    This is the best website I have ordered something from. I
                    highly recommend.
                  </p>
                </SwiperSlide>
              </Swiper>
              <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
              </div>
             
       
            </div>
          </div>
        </div>
      
    </>
  );
}

export default Slide;
