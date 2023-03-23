import Banner from "../assets/images/banner.png";
import Contact from "./Contact";
import Products from "./Products";

function Home() {
  return (
    <>
      <div className="banner-img">
        <img src={Banner} alt="banner" />
      </div>
      <Products />
      <Contact />
    </>
  );
}

export default Home;
