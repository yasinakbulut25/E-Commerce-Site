import React from "react";
import { Link } from "react-router-dom";
import { useShopContext } from "../context/ShopContext";

function Cart() {
  const { cart, addToCart, decraseFromCart, removeFromCart } = useShopContext();
  let subTotal = 0;
  const shipping = 8.99;
  return (
    <div className="section">
      <h1 className="section-title">Shopping Cart</h1>
      <div className="cart-area">
        {cart.length === 0 ? (
          <div className="empty-message">You have not added a product yet!</div>
        ) : (
          <>
            {cart.map((item) => {
              subTotal += item.product.price * item.quantity;
              return (
                <div key={item.product.id} className="cart-item">
                  <div className="cart-row">
                    <Link to={"/product/" + item.product.id}>
                      <div className="cart-image">
                        <img src={item.product.images[0]} alt="product" />
                      </div>
                    </Link>
                    <div className="cart-texts">
                      <h2 className="cart-title">{item.product.title}</h2>
                      <p className="cart-explain">{item.product.description}</p>
                    </div>
                  </div>
                  <div className="cart-row">
                    <h3 className="cart-price">${item.product.price}</h3>
                    <div className="cart-action add-remove-box">
                      <button
                        onClick={() => decraseFromCart(item.product)}
                        type="button"
                        className="add-remove-btn"
                      >
                        <i className="bi bi-dash"></i>
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => addToCart(item.product)}
                        type="button"
                        className="add-remove-btn"
                      >
                        <i className="bi bi-plus"></i>
                      </button>
                    </div>
                    <div
                      onClick={() => removeFromCart(item.product)}
                      className="cart-remove"
                    >
                      <i className="bi bi-trash"></i>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="cart-total">
              <div className="total-text">
                <span>
                  Subtotal: <b>${subTotal}</b>
                </span>
              </div>
              <div className="total-text">
                <span>
                  Shipping: <b>${shipping}</b>
                </span>
              </div>
              <div className="total-text">
                <span>
                  Total: <b>${subTotal + shipping}</b>
                </span>
              </div>
            </div>

            <div className="order-btn-area">
              <button type="button" className="order-button">
                Place Order
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
