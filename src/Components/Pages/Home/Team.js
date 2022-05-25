import React from "react";
import teamone from "../../../Images/teamone.jpg";
import teamtwo from "../../../Images/teamtwo.jpg";
import teamthree from "../../../Images/teamthree.jpg";
import teamfour from "../../../Images/teamfour.jpg";

const Team = () => {
  return (
    <div>
      <h1 className="font-saira text-accent text-4xl text-center font-bold my-24">
        Meat Our Team
      </h1>
      <div
        className="container mx-auto"
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="my-10 flex-row items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
          <div class="card w-80 bg-base-100 shadow-xl transition hover:bg-secondary hover:duration-300 mt-4">
            <figure className="mt-2 rounded-lg">
              <img src={teamone} alt="Shoes" className="rounded-lg" />
            </figure>
            <div class="card-body items-center font-roboto">
              <h2 class="text-accent font-bold text-xl">Jason Statham</h2>
              <p class="text-accent font-bold text-base">CEO & Founder</p>
            </div>
          </div>

          <div class="card w-80 bg-base-100 shadow-xl transition hover:bg-secondary hover:duration-300 mt-4">
            <figure className="mt-2 rounded-lg">
              <img src={teamtwo} alt="Shoes" className="rounded-lg" />
            </figure>
            <div class="card-body items-center font-roboto">
              <h2 class="text-accent font-bold text-xl">Luis Warner</h2>
              <p class="text-accent font-bold text-base">
                Manager and Director
              </p>
            </div>
          </div>

          <div class="card w-80 bg-base-100 shadow-xl transition hover:bg-secondary hover:duration-300 mt-4">
            <figure className="mt-2 rounded-lg">
              <img src={teamthree} alt="Shoes" className="rounded-lg" />
            </figure>
            <div class="card-body items-center font-roboto">
              <h2 class="text-accent font-bold text-xl">Steven Smith</h2>
              <p class="text-accent font-bold text-base">Parts Engineer</p>
            </div>
          </div>

          <div class="card w-80 bg-base-100 shadow-xl transition hover:bg-secondary hover:duration-300 mt-4">
            <figure className="mt-2 rounded-lg">
              <img src={teamfour} alt="Shoes" className="rounded-lg" />
            </figure>
            <div class="card-body items-center font-roboto">
              <h2 class="text-accent font-bold text-xl">Jogan Klopp</h2>
              <p class="text-accent font-bold text-base">Service Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
