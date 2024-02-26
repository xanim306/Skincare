import { connect } from "react-redux";
import { lazy } from "react";
import { Link } from "react-router-dom";
const Slide = lazy(() => import("../components/Slide"));
const Newsletter = lazy(() => import("../components/Newsletter"));
function Home({ categories, products, API_IMAGE,words,lang}) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  console.log(products);

  return (
    <>
      <div className="bg_white">
        <div className="container">
          <section className="demo">
            <div className="demo_left">
              <h5 className="subtitle">- Skincare Products</h5>
              <p className="title">{words[lang].offer}</p>
              <a href="">Shop Now</a>
            </div>
            <div className="demo_img">
              <img
                src={`image/Image.png`}
                alt=""
              />
            </div>
          </section>
          <section className="by_category">
            <p className="subtitle">- The Categories</p>
            <p className="title">Browse by Category</p>
            {categories.length ? (
              <ul className="category_list">
                {categories[0].children.map((cat) => (
                  <Link
                    to={`/${cat.id}/category`}
                    key={cat.id}
                    onClick={handleScrollToTop}
                  >
                    <div className="category_icon">
                      <img src={`${API_IMAGE}${cat.icon}`} alt="" />
                      <p>{cat.name}</p>
                    </div>
                  </Link>
                ))}
              </ul>
            ) : (
              "No category yet..."
            )}
          </section>

          <section className="explore_products">
            <p className="subtitle">- Our Products</p>
            <p className="title">Explore our Products</p>
            <div className="products">
              {products?.results?.slice(0, 8).map((p) => {
                return (
                  <Link
                    to={`/${p?.id}/product`}
                    className="product"
                    key={p?.id}
                  >
                    {p?.discount_percent ? (
                      <button className="discount_percent">{`${p.discount_percent}% OFF`}</button>
                    ) : null}
                    <div className="image">
                      <img src={`${API_IMAGE}${p?.images.image}`} alt="" />
                    </div>
                    <div className="titles">
                      <p>{p?.name}</p>
                      <div className="title">
                        <p>{p?.category?.name}</p>
                        {p?.price !== p?.total_price ? (
                          <p className="oldprice">${p?.price}</p>
                        ) : null}

                        <p className="newprice">${p?.total_price}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="view">
              <Link
                to={`/products`}
                className="view_btn"
                onClick={handleScrollToTop}
              >
                View All
              </Link>
            </div>
          </section>
          <section className="why_choose">
            <p className="subtitle">- Why Us</p>
            <p className="title">Why People Choose Us</p>
            <div className="choose_cols">
              <div className="choose_col">
                <div className="choose_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="32"
                    viewBox="0 0 29 32"
                    fill="none"
                  >
                    <path
                      d="M27 21.521V10.3645C26.9995 9.87538 26.8709 9.395 26.6271 8.97155C26.3834 8.5481 26.033 8.19646 25.6111 7.9519L15.8889 2.37367C15.4666 2.12887 14.9876 2 14.5 2C14.0124 2 13.5334 2.12887 13.1111 2.37367L3.38889 7.9519C2.96703 8.19646 2.61664 8.5481 2.37286 8.97155C2.12909 9.395 2.0005 9.87538 2 10.3645V21.521C2.0005 22.0101 2.12909 22.4904 2.37286 22.9139C2.61664 23.3373 2.96703 23.689 3.38889 23.9335L13.1111 29.5118C13.5334 29.7566 14.0124 29.8854 14.5 29.8854C14.9876 29.8854 15.4666 29.7566 15.8889 29.5118L25.6111 23.9335C26.033 23.689 26.3834 23.3373 26.6271 22.9139C26.8709 22.4904 26.9995 22.0101 27 21.521Z"
                      stroke="black"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.375 8.91406L14.5 15.9566L26.625 8.91406"
                      stroke="black"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.5 30V15.9429"
                      stroke="black"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p>Easy Returns</p>
                <span>
                  Our return policy is simple and that is why customers love our
                  shop.
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
                <p>Customer Service</p>
                <span>
                  We offer amazing customer service no matter what happens.
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
                  All of our products go through very strict inspection before
                  we dispatch them.
                </span>
              </div>
            </div>
          </section>
          <Slide />
          <section className="blogs">
            <p className="subtitle">- Our Blog</p>
            <p className="title">Check Out our Blog</p>
            <div className="blog_inner">
              <div className="blog">
                <div className="image">
                  <img src={`blog/blog1.png`} alt="" />
                </div>
                <div className="title">
                  <p>Morning Skincare Routine: 10 Top Tips for you</p>
                  <p>TOP TIPS</p>
                </div>
              </div>
              <div className="blog">
                <div className="image">
                  <img src={`blog/blog2.png`} alt="" />
                </div>
                <div className="title">
                  <p>New Collection is Out</p>
                  <p>NEW IN</p>
                </div>
              </div>
              <div className="blog">
                <div className="image">
                  <img src={`blog/blog3.png`} alt="" />
                </div>
                <div className="title">
                  <p>Always Stay Fresh</p>
                  <p>HOW TO</p>
                </div>
              </div>
              <div className="blog">
                <div className="image">
                  <img src={`blog/blog4.png`} alt="" />
                </div>
                <div className="title">
                  <p>Improve your Skin now</p>
                  <p>MASKS</p>
                </div>
              </div>
              <div className="blog">
                <div className="image">
                  <img src={`blog/blog5.png`} alt="" />
                </div>
                <div className="title">
                  <p>Stay Safe in the Sun</p>
                  <p>SUN CARE</p>
                </div>
              </div>
              <div className="blog">
                <div className="image">
                  <img src={`blog/blog6.png`} alt="" />
                </div>
                <div className="title">
                  <p>Explore our Bestselling Products</p>
                  <p>BESTSELLERS</p>
                </div>
              </div>
              <div className="blog">
                <div className="image">
                  <img src={`blog/blog7.png`} alt="" />
                </div>
                <div className="title">
                  <p>5 Great Tips to Get that Perfect Skin</p>
                  <p>TOP TIPS</p>
                </div>
              </div>
            </div>
            <div className="view">
              <a href="" className="view_btn">
                View All
              </a>
            </div>
          </section>
          <Newsletter />
        </div>
      </div>
    </>
  );
}
const t = (a) => a;
export default connect(t)(Home);
