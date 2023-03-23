import React, { createContext, useContext, useEffect, useState } from "react";

const ShopContext = createContext();

function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");
  const [cart, setCart] = useState([]);
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    getCategories();
    getProducts();
    getCartFromLocalStorage();
  }, []);

  const changeTheme = () => {
    setTheme(!theme);
    document.getElementsByTagName("body")[0].className = theme
      ? "light-mode"
      : "dark-mode";
  };

  const getCartFromLocalStorage = () => {
    if (localStorage.getItem("cart")) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    } else {
      localStorage.setItem("cart", JSON.stringify(cart));
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  };

  const updateLocalCart = (update) =>
    localStorage.setItem("cart", JSON.stringify(update));

  const getCategories = () => {
    fetch("https://dummyjson.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  };

  const getProducts = (category) => {
    const apiUrl = category
      ? "https://dummyjson.com/products/category/" + category
      : "https://dummyjson.com/products?limit=30";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
    category ? setCurrentCategory(category) : setCurrentCategory("");
  };

  const addToCart = (productItem) => {
    const newCart = [...cart];
    let addedItem = newCart.find((item) => item.product.id === productItem.id);

    if (addedItem) {
      addedItem.quantity += 1;
      setCart(newCart);
      updateLocalCart(newCart);
    } else {
      addedItem = {
        product: productItem,
        quantity: 1,
      };
      setCart([...cart, addedItem]);
      updateLocalCart([...cart, addedItem]);
    }
  };

  const decraseFromCart = (productItem) => {
    const newCart = [...cart];
    const decrasedItem = newCart.find(
      (item) => item.product.id === productItem.id
    );
    const newQuantity = decrasedItem.quantity - 1;
    if (newQuantity === 0) {
      return removeFromCart(productItem);
    } else {
      decrasedItem.quantity -= 1;
    }
    setCart(newCart);
    updateLocalCart(newCart);
  };

  const removeFromCart = (productItem) => {
    const newCart = [
      ...cart.filter((item) => item.product.id !== productItem.id),
    ];
    setCart(newCart);
    updateLocalCart(newCart);
  };

  const sharedValuesAndMethods = {
    getCategories,
    categories,
    currentCategory,
    getProducts,
    products,
    cart,
    setCart,
    addToCart,
    decraseFromCart,
    removeFromCart,
    theme,
    changeTheme,
  };

  return (
    <ShopContext.Provider value={sharedValuesAndMethods}>
      {children}
    </ShopContext.Provider>
  );
}
const useShopContext = () => useContext(ShopContext);
export { Provider, useShopContext };
export default ShopContext;
