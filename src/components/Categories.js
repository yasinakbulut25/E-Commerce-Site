import React from "react";
import { useShopContext } from "../context/ShopContext";
function Categories() {
  const { categories, currentCategory, getProducts } = useShopContext();

  const capitalizeFirstLetter = (string) => {
    const seperate = string.split("-");
    const retrunString =
      seperate.length < 2
        ? seperate[0].charAt(0).toUpperCase() + seperate[0].slice(1)
        : seperate[0].charAt(0).toUpperCase() +
          seperate[0].slice(1) +
          " " +
          seperate[1].charAt(0).toUpperCase() +
          seperate[1].slice(1);
    return retrunString;
  };

  return (
    <div className="category-boxes">
      {currentCategory === "" ? (
        <div onClick={() => getProducts()} className="category-box active">
          All
        </div>
      ) : (
        <div onClick={() => getProducts()} className="category-box">
          All
        </div>
      )}
      {categories.map((category) => {
        let categoryClass = "category-box";
        if (currentCategory === category) {
          categoryClass = "category-box active";
        }
        return (
          <div
            onClick={getProducts.bind(this, category)}
            key={category}
            className={categoryClass}
          >
            {capitalizeFirstLetter(category)}
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
