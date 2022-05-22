import React from "react";
import Parts from "../Parts/Parts";
import Banner from "./Banner";
import BusinessSummery from "./BusinessSummery";

const Home = () => {
  return (
    <div>
      <Banner />
      <Parts />
      <BusinessSummery />
    </div>
  );
};

export default Home;
