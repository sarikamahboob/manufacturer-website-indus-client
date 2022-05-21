import React from "react";
import banner from "../../Images/banner.png";

const Banner = () => {
  return (
    <div class="hero h-[50rem]" style={{ backgroundImage: `url(${banner})` }}>
      <div className="text-accent"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold text-accent font-saira">
            Explore The Indus
          </h1>
          <p class="mb-5 text-base-100 font-roboto">
            Get the best services, best materials and best delivery
          </p>
          <button class="btn btn-accent text-base-100 font-roboto  hover:bg-transparent ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
