import React from "react";
import icon1 from "../../../Images/icon1.png";
import icon2 from "../../../Images/icon2.png";
import icon3 from "../../../Images/icon3.png";
import icon4 from "../../../Images/icon4.png";

const BusinessSummery = () => {
  return (
    <div className="flex items-center justify-center my-10 ">
      <div class="stats shadow bg-accent">
        <div class="stat flex items-center justify-center ">
          <div class="stat-figure">
            <img src={icon1} className="w-20" alt="icon1" />
          </div>
          <div>
            <div class="stat-value text-white font-saira">10000+</div>
            <div class="stat-desc text-base text-black font-roboto font-bold">
              Satisfied Clients
            </div>
          </div>
        </div>

        <div class="stat flex items-center justify-center ">
          <div class="stat-figure">
            <img src={icon2} className="w-20" alt="icon2" />
          </div>
          <div>
            <div class="stat-value text-white font-saira">100M+</div>
            <div class="stat-desc text-base text-black font-roboto font-bold">
              Annual Revenue
            </div>
          </div>
        </div>

        <div class="stat flex items-center justify-center ">
          <div class="stat-figure">
            <img src={icon3} className="w-20" alt="icon3" />
          </div>
          <div>
            <div class="stat-value text-white font-saira">30K+</div>
            <div class="stat-desc text-base text-black font-roboto font-bold">
              Reviews
            </div>
          </div>
        </div>

        <div class="stat flex items-center justify-center ">
          <div class="stat-figure">
            <img src={icon4} className="w-20" alt="icon3" />
          </div>
          <div>
            <div class="stat-value text-white font-saira">500+</div>
            <div class="stat-desc text-base text-black font-roboto font-bold">
              Bike Parts
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummery;
