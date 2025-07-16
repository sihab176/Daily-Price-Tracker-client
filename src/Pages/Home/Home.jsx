import React from "react";
import Banner from "../../component/Banner/Banner";
import ProductSection from "../../component/ProductSection/ProductSection";

import HighlightAdd from "../../component/HighlightAdd/HighlightAdd";
import ExtraCardSection from "../../component/ExtarCardSection/ExtraCardSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <ProductSection />
      <HighlightAdd />
      <ExtraCardSection />
    </div>
  );
};

export default Home;
