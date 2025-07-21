import React, { useEffect } from "react";
import Banner from "../../component/Banner/Banner";
import ProductSection from "../../component/ProductSection/ProductSection";

import HighlightAdd from "../../component/HighlightAdd/HighlightAdd";
import ExtraCardSection from "../../component/ExtarCardSection/ExtraCardSection";
import MarketSection from "../../component/MarketSection/MarketSection";

const Home = () => {
  useEffect(() => {
    document.title = "LocalHarvest | Home";
  }, []);
  return (
    <div className=" max-w-7xl mx-auto">
      <Banner />
      <ProductSection />
      <HighlightAdd />
      <ExtraCardSection />
      <MarketSection />
    </div>
  );
};

export default Home;
