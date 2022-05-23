import React from "react";
import Parts from "../Parts/Parts";
import Banner from "./Banner";
import BusinessSummery from "./BusinessSummery";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <Parts />
      <BusinessSummery />
      <Reviews />
    </div>
  );
};

export default Home;
