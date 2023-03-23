import React from "react";
import { useShopContext } from "../context/ShopContext";
import Categories from "./Categories";
import ProductItem from "./ProductItem";
function Products() {
  const { products } = useShopContext();
  return (
    <div className="section">
      <h2 className="section-title">Latest Products</h2>
      <Categories />
      <div className="product-boxes">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
