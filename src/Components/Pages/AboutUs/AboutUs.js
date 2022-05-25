import React from "react";
import history from "../../../Images/history.jpg";

const AboutUs = () => {
  return (
    <div className="container mx-auto">
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row">
          <img src={history} class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-6xl font-bold text-center my-8 text-accent font-saira ">
              Our Story
            </h1>
            <p class="py-6 text-justify font-roboto p-4">
              Indus was founded in 2007 by a core team of riders whose sole goal
              was to bring the best possible shopping experience to any
              enthusiast who visits us, in-store or online. Over the next
              decade, we continuously smashed records, raked in awards, and,
              most importantly, helped keep hundreds of thousands of new and
              experienced riders safe and sound. Now, as part of the Comoto
              Family of Brands, Indus continues its mission to serve the rider,
              fuel the industry, and inspire the community. At Indus, we know
              that a large and rider-specific product selection is a commodity
              within the world of motorcycle gear and parts web sites. There is
              a lot of competition out there and to an extent we all have
              overlapping product selections. We hope our straightforward and
              fair customer approach differentiates us from the pack and speaks
              to how serious we are about putting our customer's satisfaction as
              our number one priority. For us, the customer always comes first
              and we do our darndest to make sure that each customer has an
              experience which is exemplary of our brand. You can find
              compliments from past customers (as well as some complaints!) by
              reading reviews of Indus at ResellerRatings.com. We cherish any
              and all customer feedback; if there is something we can do better,
              we want to know! We hope that you enjoy shopping with us now and
              in the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
