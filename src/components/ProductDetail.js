import React from "react";
import { useParams, Link } from "react-router-dom";
import { useShopContext } from "../context/ShopContext";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import ProductItem from "./ProductItem";

function ProductDetail() {
  const { products, cart, addToCart, decraseFromCart, removeFromCart } =
    useShopContext();
  const { productId } = useParams();
  const findProduct = products[productId - 1];
  const findFromCart = cart.find(
    (item) => item.product.id === Number(productId)
  );
  return (
    <div>
      {findProduct ? (
        <>
          <div className="breadcrumbs">
            <span>Home</span>
            <span>Product</span>
            <span>{findProduct.category}</span>
            <span>{findProduct.title}</span>
          </div>

          <div className="product-grid">
            <div className="product-detail-image">
              <img src={findProduct.images[0]} alt="iphone" />
            </div>
            <div className="product-detail-infos">
              <h1 className="product-detail-title">{findProduct.title}</h1>
              <p className="product-detail-explain">
                {findProduct.description}
              </p>
              <div className="product-detail-stars">
                <i className="bi bi-star-fill active"></i>
                <i className="bi bi-star-fill active"></i>
                <i className="bi bi-star-fill active"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <span>(123)</span>
              </div>
              <div className="product-detail-price">
                <h2 className="detail-price">
                  ${findProduct.price}.99 or $
                  {Number(findProduct.price / 6).toFixed(2)}/month
                </h2>
                <p className="price-explain">
                  Suggested payments with 6 months special financing
                </p>
              </div>
              <div className="add-remove-box">
                <button
                  onClick={() => decraseFromCart(findProduct)}
                  type="button"
                  className="add-remove-btn"
                >
                  <i className="bi bi-dash"></i>
                </button>
                <span>{findFromCart ? findFromCart.quantity : 0}</span>
                <button
                  onClick={() => addToCart(findProduct)}
                  className="add-remove-btn"
                >
                  <i className="bi bi-plus"></i>
                </button>
              </div>
              <div className="shop-links">
                <Link to="">Buy Now</Link>
                {findFromCart ? (
                  <button
                    onClick={() => removeFromCart(findProduct)}
                    className="remove-btn"
                    type="button"
                  >
                    Remove From Cart
                  </button>
                ) : (
                  <button
                    onClick={() => addToCart(findProduct)}
                    className="add-btn"
                    type="button"
                  >
                    Add To Cart
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="section">
            <h3 className="section-title">Similar Products</h3>
            <div className="product-boxes">
              {products.map((item) => {
                return item.category === findProduct.category &&
                  item.id !== findProduct.id ? (
                  <ProductItem key={item.id} product={item} />
                ) : (
                  ""
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="product-grid">
            <SkeletonTheme baseColor="#f3f4f7" highlightColor="#dadee7">
              <Skeleton height={45} count={10} />
            </SkeletonTheme>
            <SkeletonTheme baseColor="#f3f4f7" highlightColor="#dadee7">
              <Skeleton height={45} count={10} />
            </SkeletonTheme>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductDetail;
