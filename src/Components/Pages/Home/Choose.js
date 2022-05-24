import React from "react";
import homeextra1 from "../../../Images/homeextra1.jpg";
import chooseicon1 from "../../../Images/chooseicon1.png";
import chooseicon2 from "../../../Images/chooseicon2.png";
import chooseicon3 from "../../../Images/chooseicon3.png";
import chooseicon4 from "../../../Images/chooseicon4.png";

const Choose = () => {
  return (
    <div className="bg-secondary">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center">
        <div className="w-full">
          <img src={homeextra1} alt="" className="w-full" />
        </div>
        <div className="bg-secondary p-10">
          <h1 className="font-saira text-accent text-4xl font-bold">
            Why Choose Us
          </h1>
          <p className="font-roboto text-white text-base font-bold mt-2">
            WE OFFER DIFFERENT SERVICES
          </p>
          <div className="flex items-center gap-10 font-roboto mt-6">
            <div class="flex items-center gap-2">
              <div class="">
                <img
                  src={chooseicon1}
                  alt=""
                  className="w-[60%] bg-accent rounded-[50%] transition p-2 hover:bg-black hover:ease-in-out hover:duration-300 "
                />
              </div>
              <div class="iconTitle">
                <h2 className="text-accent font-bold text-xl">
                  A Full Service
                </h2>
                <p className="text-white text-base">
                  We are providing a full time services to our clients
                </p>
              </div>
            </div>

            <div class="flex items-center gap-2">
              <div class="">
                <img
                  src={chooseicon2}
                  alt=""
                  className="w-[60%] bg-accent rounded-[50%] transition p-2 hover:bg-black hover:ease-in-out hover:duration-300"
                />
              </div>
              <div class="iconTitle">
                <h2 className="text-accent font-bold text-xl">
                  Quick Delivery
                </h2>
                <p className="text-white text-base">
                  Always ready to deliver products as early as possible
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-10 mt-6">
            <div class="flex items-center gap-2">
              <div class="icon-img">
                <img
                  src={chooseicon3}
                  alt=""
                  className="w-[60%] bg-accent rounded-[50%] transition p-2 hover:bg-black hover:ease-in-out hover:duration-300"
                />
              </div>
              <div class="iconTitle">
                <h2 className="text-accent font-bold text-xl">Maintenance</h2>
                <p className="text-white text-base">
                  Providing a maintenance service for a huge time period
                </p>
              </div>
            </div>

            <div class="flex items-center gap-2">
              <div class="icon-img">
                <img
                  src={chooseicon4}
                  alt=""
                  className="w-[60%] bg-accent rounded-[50%] transition p-2 hover:bg-black hover:ease-in-out hover:duration-300"
                />
              </div>
              <div class="iconTitle">
                <h2 className="text-accent font-bold text-xl">
                  Expert Workers
                </h2>
                <p className="text-white text-base">
                  Professional workers are giving best services to our clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
