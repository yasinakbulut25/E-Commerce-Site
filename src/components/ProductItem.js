import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useShopContext } from "../context/ShopContext";

function ProductItem({ product }) {
  const { addToCart, decraseFromCart, cart } = useShopContext();
  const [like, setLike] = useState(false);
  const changeLike = () => setLike(!like);
  const findProduct = cart.find((item) => item.product.id === product.id);

  return (
    <div className="product-box">
      <Link to={"/product/" + product.id}>
        <div className="product-img">
          <img src={product.images[0]} alt="product" />
        </div>
      </Link>
      <div className="product-details">
        <div className="product-texts">
          <h3 className="product-title">{product.title}</h3>
          <p className="product-explain">{product.description}</p>
        </div>
        <div
          onClick={changeLike}
          className={like ? "product-like liked" : "product-like"}
        >
          <i className="bi bi-heart-fill"></i>
        </div>
      </div>
      <div className="product-price">
        <span className="price">${product.price}.99</span>
        <div className="add-cart">
          {findProduct ? (
            <button
              onClick={() => decraseFromCart(product)}
              className="product-action-btn decrase-btn"
            >
              <i className="bi bi-dash"></i>
            </button>
          ) : (
            ""
          )}
          <span className="added">
            {findProduct ? findProduct.quantity : 0}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="product-action-btn add-btn"
          >
            <i className="bi bi-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
