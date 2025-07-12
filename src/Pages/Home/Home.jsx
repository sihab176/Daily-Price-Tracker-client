import React from "react";
import Banner from "../../component/Banner/Banner";
import ProductSection from "../../component/ProductSection/ProductSection";
import Footer from "../../component/Footer/Footer";
import HighlightAdd from "../../component/HighlightAdd/HighlightAdd";

const Home = () => {
  return (
    <div>
      <Banner />
      <ProductSection />
      <HighlightAdd />
      <Footer />
    </div>
  );
};

export default Home;
