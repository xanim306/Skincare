import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Newsletter from "../components/Newsletter";
import { Select, Slider, Button } from "antd";
import Slide from "../components/Slide";

function Products({ products, API_IMAGE }) {
  // useEffect(() => {
  //   fetch(
  //     "http://127.0.0.1:8000/products/list/?name=oi&price_range_min=&price_range_max=&status=&skintype=",
  //     {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-type": "application/json",
  //       },
  //     }
  //   )
  //     .then((a) => a.json())
  //     .then((a) => console.log(a));
  // }, []);
  const [status, setStatus] = useState("");
  // const [skinType, setSkinType] = useState("");
  const [filteredProducts, setFilteredProducts] = useState({});
  const [minMaxPrices, SetMinMaxPrices] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const { Option } = Select;
  useEffect(() => {
    fetch(
      `http://127.0.0.1:8000/products/list/?name=&price_range_min=${minPrice.toString()}&price_range_max=${maxPrice.toString()}&status=${status}&skintype=`
    )
      .then((a) => a.json())
      .then((a) => setFilteredProducts(a));
  }, [status, minPrice, maxPrice]);

  const handleStatus = (value) => {
    setStatus(value);
  };
  // const handleSkinType = (value) => {
  //   setSkinType(value);
  // };
  const onChange = (value) => {
    SetMinMaxPrices(value);
  };

  const handleButtonClick = () => {
    setMinPrice(minMaxPrices?.at(0));
    setMaxPrice(minMaxPrices?.at(1));
  };
  const dropdownRender = (menu) => (
    <div>
      {menu}
      <Slider range defaultValue={[20, 50]} onChange={onChange} />
      <Button type="primary" onClick={handleButtonClick}>
        Click me
      </Button>
    </div>
  );
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <>
      <div className="products_all">
        <div className="container">
          <span>
            Home Page <i className="fa-solid fa-chevron-right"></i>Navigation{" "}
            <i className="fa-solid fa-chevron-right"></i>Products
          </span>

          <section className="explore_products">
            <p className="subtitle">- Our Products</p>
            <p className="title">Explore our Products</p>
            <Select
              defaultValue="choose status"
              style={{ width: 200 }}
              onChange={handleStatus}
              options={[
                { value: "NEW IN", label: "NEW IN" },
                { value: "LOW STOCK", label: "LOW STOCK" },
              ]}
            />

            <Select
              defaultValue="Price Range"
              style={{ width: 200 }}
              showSearch={false}
              dropdownRender={dropdownRender}
            >
              <Option disabled={true} value="option1">
                Set Min&Max Prices
              </Option>
            </Select>
            <div className="products">
              {!filteredProducts?.results?.length
                ? products?.results?.map((p) => {
                    return (
                      <>
                        {
                          <Link
                            to={`/${p.id}/product`}
                            className="product"
                            key={p.id}
                            onClick={handleScrollToTop}
                          >
                            {p.discount_percent ? (
                              <button className="discount_percent">{`${p.discount_percent}% OFF`}</button>
                            ) : null}
                            <div className="image">
                              <img
                                src={`${API_IMAGE}/${p.images.image}`}
                                alt=""
                              />
                            </div>

                            <div className="titles">
                              <p>{p.name}</p>
                              <div className="title">
                                <p>{p.category.name}</p>

                                {p.price !== p.total_price ? (
                                  <p className="oldprice">${p.price}</p>
                                ) : null}

                                <p className="newprice">${p.total_price}</p>
                              </div>
                            </div>
                          </Link>
                        }
                      </>
                    );
                  })
                : filteredProducts?.results?.map((filtered) => {
                    return (
                      <>
                        {
                          <Link
                            to={`/${filtered.id}/product`}
                            className="product"
                            key={filtered.id}
                            onClick={handleScrollToTop}
                          >
                            {filtered.discount_percent ? (
                              <button className="discount_percent">{`${filtered.discount_percent}% OFF`}</button>
                            ) : null}
                            <div className="image">
                              <img
                                src={`${API_IMAGE}/${filtered.images.image}`}
                                alt=""
                              />
                            </div>

                            <div className="titles">
                              <p>{filtered.name}</p>
                              <div className="title">
                                <p>{filtered.category.name}</p>

                                {filtered.price !== filtered.total_price ? (
                                  <p className="oldprice">${filtered.price}</p>
                                ) : null}

                                <p className="newprice">
                                  ${filtered.total_price}
                                </p>
                              </div>
                            </div>
                          </Link>
                        }
                      </>
                    );
                  })}
            </div>
          </section>
        </div>
      </div>

      <Slide />

      <Newsletter />
    </>
  );
}
const t = (a) => a;
export default connect(t)(Products);
