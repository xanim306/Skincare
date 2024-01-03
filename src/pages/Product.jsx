import Slide from "../components/Slide";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import Newsletter from "../components/Newsletter";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Product({ API_IMAGE }) {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  // const filterProduct = products?.results?.filter((p) => p.id === +id);
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/products/detail/${id}/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((a) => a.json())
      .then((a) => {
        setDetails(a);
      });
  }, [id]);
  return (
    <>
      <div className="container">
        <div className="filtered_wrapper">
          <section className="detail">
            <div className="product">
              <div className="images">
                {details?.images?.map((d) => {
                  return (
                    <div className="single_image">
                      <img src={`${API_IMAGE}/${d?.image}`} alt="" />
                    </div>
                  );
                })}
              </div>
              <div className="image">
                <img
                  src={`${API_IMAGE}/${details?.images?.at(0)?.image}`}
                  alt=""
                />
              </div>
              <div className="titles">
                <p className="subtitle">- Selling Fast</p>
                <p>{details?.name}</p>
                {/* <div className="title">SFD.total_price ? (
                    <p className="oldprice">${details.price}</p>
                  ) : null}
                  <p className="newprice">${details.total_price}</p>
                </div> */}
                <span className="sku">SKU: </span>
                <span className="sku_num">{details.sku}</span>
                <div className="adding">
                  <a href="" className="count">
                    <i className="fa-solid fa-chevron-left"></i>
                    <span>1</span>
                    <i className="fa-solid fa-chevron-right"></i>
                  </a>
                  <a href="">Add to Cart</a>
                  <a className="heart">
                    <i className="fa-regular fa-heart"></i>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="explore_feauture">
            <div className="feature_left">
              <p className="subtitle">- Product Features</p>
              <p className="title">Explore the Features</p>
            </div>
            <div className="feature_right">
              <div className="single_feature">
                <div className="feature_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="25"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M15.9931 2L23.7756 10.2034C25.3147 11.8247 26.3631 13.8907 26.7881 16.1402C27.2131 18.3896 26.9957 20.7213 26.1634 22.8405C25.331 24.9596 23.9211 26.771 22.112 28.0454C20.3029 29.3198 18.1759 30 16 30C13.8241 30 11.6971 29.3198 9.88798 28.0454C8.07888 26.771 6.66899 24.9596 5.83664 22.8405C5.00429 20.7213 4.78687 18.3896 5.21189 16.1402C5.63692 13.8907 6.68528 11.8247 8.22438 10.2034L15.9931 2Z"
                      stroke="black"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="feature_info">
                  <p>Natural</p>
                  <p>
                    We are using natural ingredients only when creating our
                    products.
                  </p>
                </div>
              </div>
              <div className="single_feature">
                <div className="feature_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="25"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M16 30C16 30 27 24.4 27 16V6.2L16 2L5 6.2V16C5 24.4 16 30 16 30Z"
                      stroke="black"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="feature_info">
                  <p>Full Protection</p>
                  <p>
                    This product provides broad spectrum SPF 50 and blue light
                    protection.
                  </p>
                </div>
              </div>
              <div className="single_feature">
                <div className="feature_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="15"
                    viewBox="0 0 32 19"
                    fill="none"
                  >
                    <path
                      d="M30 2L17.9091 13.875L11.5455 7.625L2 17"
                      stroke="black"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 2H30V9.99997"
                      stroke="black"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="feature_info">
                  <p>Trending</p>
                  <p>
                    It is one of our most popular products that we have on
                    offer.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <Slide />
          <section className="related_products">
            <p className="subtitle">- Explore More</p>
            <p className="title">Related Products</p>
            <div className="products">
              {details?.related_products?.map((p) => {
                return (
                  <Link to={`/${p.id}/product`} className="product" key={p.id}>
                    {p.discount_percent ? (
                      <button className="discount_percent">{`${p.discount_percent}% OFF`}</button>
                    ) : null}
                    <div className="image">
                      <img src={`${API_IMAGE}${p.images.image}`} alt="" />
                    </div>
                    <div className="titles">
                      <p>{p.name}</p>
                      <div className="title">
                        <p>{p.category.name}</p>
                        {p.discount_percent ? (
                          <p className="oldprice">${p.price}</p>
                        ) : null}
                        {p.discount_percent ? (
                          <p className="newprice">
                            $
                            {Math.floor(
                              p.price - (p.price * p.discount_percent) / 100
                            )}
                          </p>
                        ) : (
                          <p className="newprice">${p.price}</p>
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })}
              ;
            </div>
          </section>
        </div>
      </div>
      <Newsletter />
    </>
  );
}

const t = (a) => a;
export default connect(t)(Product);
