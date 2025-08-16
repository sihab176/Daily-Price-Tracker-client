import React, { useEffect } from "react";
import Banner from "../../component/Banner/Banner";
import ProductSection from "../../component/ProductSection/ProductSection";

import HighlightAdd from "../../component/HighlightAdd/HighlightAdd";
import ExtraCardSection from "../../component/ExtarCardSection/ExtraCardSection";
import MarketSection from "../../component/MarketSection/MarketSection";
import LimitedOffer from "../../component/LimitedOffer/LimitedOffer";

const Home = () => {
  useEffect(() => {
    document.title = "LocalHarvest | Home";
  }, []);
  return (
    <div className="">
      <Banner />
      <ProductSection />
      <HighlightAdd />
      <ExtraCardSection />
      <MarketSection />
      <LimitedOffer />
    </div>
  );
};

export default Home;
