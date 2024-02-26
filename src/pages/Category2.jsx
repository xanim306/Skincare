import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import Newsletter from "../components/Newsletter";
import { useState, useEffect } from "react";

function Category2({ products, API_IMAGE, API_PRODUCTS }) {
  const { id } = useParams();
  const filteredProducts = products?.results?.filter(
    (p) => p.category?.id === +id
  );

  return (
    <>
      <section className="filtered_products">
        <div className="container">
          <span>
            Home <i className="fa-solid fa-chevron-right"></i>Navigation{" "}
            <i className="fa-solid fa-chevron-right"></i>{" "}
            {filteredProducts?.[0]?.category?.name}
          </span>

          <p className="subtitle">
            {" "}
            {`${filteredProducts?.[0]?.category?.name} Products`}
          </p>
          <p className="title">{`Explore the ${filteredProducts?.[0]?.category?.name} Products`}</p>

          <div className="filtered_wrapper">
            {filteredProducts?.map((a, b) => {
              return (
                <div className="product" key={b}>
                  {a.discount_percent ? (
                    <button className="discount_percent">{`${a.discount_percent}% OFF`}</button>
                  ) : null}
                  <div className="image">
                    <img src={`${API_IMAGE}/${a.images.image}`} alt="" />
                  </div>
                  <div className="titles">
                    <p>{a.name}</p>
                    <div className="title">
                      <p>{a.category.name}</p>

                      {a.price !== a.total_price ? (
                        <p className="oldprice">${a.price}</p>
                      ) : null}
                      <p className="newprice">${a.total_price}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <div className="container">
      <Newsletter />
      </div>
      
    </>
  );
}
const t = (a) => a;
export default connect(t)(Category2);
