import React from "react";
import Parts from "../Parts/Parts";
import Banner from "./Banner";
import BusinessSummery from "./BusinessSummery";
import Choose from "./Choose";
import Reviews from "./Reviews";
import Team from "./Team";

const Home = () => {
  return (
    <div>
      <Banner />
      <Parts />
      <BusinessSummery />
      <Choose />
      <Team />
      <Reviews />
    </div>
  );
};

export default Home;
