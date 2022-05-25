import React from "react";
import servicebanner from "../../../Images/servicebanner.png";
import phone from "../../../Images/phonecall.png";
import email from "../../../Images/email.png";
import location from "../../../Images/placeholder.png";

const CustomerService = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-6xl font-bold text-center my-8 text-accent font-saira ">
        We Do Care !!!
      </h1>
      <div className="flex justify-center">
        <div class="card w-full bg-base-100 shadow-xl image-full">
          <figure>
            <img src={servicebanner} alt="Shoes" />
          </figure>
          <div class="card-body mt-20 font-roboto text-lg">
            <h2 class="text-center font-bold text-white">
              With riding season ramping up, our Customer Service Team is going
              full throttle to help with all your riding needs! The volume we
              experience this time of year can be very high, leading to longer
              than normal call hold times, but answers to common questions can
              be found by emailing us.
            </h2>
            <p class="text-center font-bold text-white">
              Thank you for your patience. Ride safe and keep the rubber side
              down!!
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 mt-10 gap-10 ">
          <div class="card card-side w-[370px]  p-8 bg-base-100 shadow-xl">
            <figure>
              <img src={phone} alt="Movie" className="w-20" />
            </figure>
            <div class="card-body">
              <h1 class="card-title font-saira text-2xl text-accent">
                Phone / Fax
              </h1>
              <p className="font-roboto font-bold text-neutral">
                (+021) 245522455
              </p>
              <p className="font-roboto font-bold text-neutral">
                (+000) 245522455
              </p>
            </div>
          </div>

          <div class="card card-side w-[370px]  p-8 bg-base-100 shadow-xl">
            <figure>
              <img src={email} alt="Movie" className="w-20" />
            </figure>
            <div class="card-body">
              <h1 class="card-title font-saira text-2xl text-accent">E-mail</h1>
              <p className="font-roboto font-bold text-neutral">
                info@indus.com
              </p>
              <p className="font-roboto font-bold text-neutral">
                support@indus.com
              </p>
            </div>
          </div>

          <div class="card card-side w-[370px] p-8 bg-base-100 shadow-xl">
            <figure>
              <img src={location} alt="Movie" className="w-20" />
            </figure>
            <div class="card-body">
              <h1 class="card-title font-saira text-2xl text-accent">
                Location
              </h1>
              <p className="font-roboto font-bold text-neutral">California</p>
              <p className="font-roboto font-bold text-neutral">U.S.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerService;
