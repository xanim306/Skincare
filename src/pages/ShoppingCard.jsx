import React from "react";
import Newsletter from "../components/Newsletter";
import { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Link from "antd/es/typography/Link";
// import { Navigate } from "react-router-dom";

function ShoppingCard({ API_IMAGE }) {
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
  //  -------------------

  // ---------------------

  // const updateQuantity = async (itemId, newQuantity) => {
  //   try {
  //     const updatedCartItems = cartItems.items.map((item) =>
  //       item.id === itemId ? { ...item, quantity: newQuantity } : item
  //     );
  //     setCartItems(updatedCartItems);
  //     console.log(itemId);
  //     console.log(newQuantity)
  //     await axios.post(
  //       `http://127.0.0.1:8000/products/update-cart-item/${itemId}/`,
  //       { quantity: newQuantity }
  //     );
  //   } catch (error) {
  //     console.error("Error updating cart item:", error);
  //   }
  // };

  const updateQuantity = async (itemId, newQuantity) => {
    try {
      // Update the quantity locally first
      const updatedItems = cartItems.items.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      );

      const updatedCart = { ...cartItems, items: updatedItems };
      setCartItems(updatedCart);

      // Send a POST request to the update cart item endpoint with the item ID and new quantity
      const response = await axios.post(
        `http://127.0.0.1:8000/products/update-cart-item/${itemId}/`,
        { quantity: newQuantity }
      );

      // If the request is successful, return the updated item data
      return response.data;
    } catch (error) {
      // If there's an error, log it and return null
      console.error("Error updating cart item quantity:", error);
      return null;
    }
  };

  const removeFromCart = async (itemId, cartItems, setCartItems) => {
    try {
      // Send a DELETE request to the remove cart item endpoint with the item ID
      await axios.delete(`/remove-cart-item/${itemId}/`);

      // Filter out the removed item from the cart items list
      const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
      setCartItems(updatedCartItems);
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const handleClearAll = () => {
    // Sepetteki tüm ürünleri kaldır
    axios
      .delete("http://127.0.0.1:8000/products/clear-cart/")
      .then(() => {
        setCartItems([]); // Boş sepet
      })
      .catch((error) => {
        console.error("Error clearing cart:", error);
      });
  };

  return (
    <>
      <div className="cart_inner">
        <div className="container">
          <span>
            Home <i class="fa-solid fa-chevron-right"></i> Categories{" "}
            <i class="fa-solid fa-chevron-right"></i> Shopping Cart
          </span>
          <p className="subtitle">- Your Cart</p>
          <div className="shopping">
            <span className="title">Shopping Cart</span>
            <button className="clear_btn" onClick={handleClearAll}>
              Clear All
            </button>
          </div>

          {/* indi */}
          {/* {cartItems.items.map(item => (
            <div key={item.id} className="cartItem">
              <div className="itemImage">
                <img src={`${API_IMAGE}${item.product_image}`} alt={item.name} />
              </div>
              <div className="itemDetails">
                <p>{item.product_title}</p>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}  */}
          {/* <img src={`${API_IMAGE}${cartItems.items[0].product_image}`} alt="" />  */}

          <div className="totalCartInner">
            {cartItems.length !== 0 && (
              <div className="inner_left">
                {cartItems.items &&
                  cartItems?.items.map((item) => (
                    <div key={item.id} className="cartItem">
                      <div className="itemImage">
                        <img
                          src={`${API_IMAGE}${item.product_image}`}
                          alt={item.name}
                        />
                      </div>
                      <div className="itemDetails">
                        <p className="itemTitle">{item.product_title}</p>
                        <div className="title">
                          {/* <p>{item.quantity}</p> */}

                          {item?.price !== item?.total_price ? (
                            <p className="oldprice">${item?.price}</p>
                          ) : null}
                          <p className="newprice"> ${item?.total_price}</p>
                        </div>
                        <div className="update">
                          <div className="count">
                            <i
                              className="fa-solid fa-chevron-left"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                            ></i>
                            <span>{item.quantity}</span>
                            <i
                              className="fa-solid fa-chevron-right"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                            ></i>
                          </div>
                          <button
                            className="removeBtn"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <span className="removeBtnIcon">X</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}

            {/* {cartItems.length !== 0 && (
              <div className="inner_right">
                <p>Cart Total</p>
                <div className="data">
                  <p>Subtotal:</p>
                  <span>${cartItems.subtotal_price}</span>
                </div>
                <div className="data">
                  <p>Shipping:</p>
                  <span>${cartItems.shipping_price}</span>
                </div>
                <div className="data total">
                  <p>Total:</p>
                  <span>${cartItems.total_price}</span>
                </div>
                <div className="checkout_btn">
                  Checkout</div>
              </div>
            )} */}
            {cartItems.length !== 0 && (
              <div className="inner_right">
                <p>Cart Total</p>
                <div className="data">
                  <p>Subtotal:</p>
                  <span>${cartItems.subtotal_price}</span>
                </div>
                <div className="data">
                  <p>Shipping:</p>
                  <span>${cartItems.shipping_price}</span>
                </div>
                <div className="data total">
                  <p>Total:</p>
                  <span>${cartItems.total_price}</span>
                </div>
                {/* Link bileşeni kullanarak checkout düğmesini oluşturun */}
                <div className="checkout_btn">Checkout</div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="container">
        <Newsletter />
      </div>
    </>
  );
}
const t = (a) => a;
export default connect(t)(ShoppingCard);
