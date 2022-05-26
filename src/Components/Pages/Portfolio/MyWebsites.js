import React from "react";
import website1 from "../../../Images/website1.png";
import website2 from "../../../Images/website2.png";
import website3 from "../../../Images/website3.png";

const MyWebsites = () => {
  return (
    <div>
      <h1 className="font-saira underline text-accent text-4xl text-center font-bold my-14">
        My Projects
      </h1>
      <div
        className="container mx-auto"
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="my-10 flex-row items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          <div class="card w-80 bg-base-100 shadow-xl transition hover:bg-secondary hover:duration-300 mt-4 h-full">
            <figure className="mt-2 rounded-lg">
              <img src={website1} alt="Shoes" className="rounded-lg" />
            </figure>
            <div class="card-body items-center font-roboto">
              <h2 class="text-white p-2 font-bold text-xl bg-accent ">
                Warehouse Management
              </h2>
              <a
                className="text-accent underline"
                href="https://e-warehouse-client.web.app/"
                alt=""
              >
                Live Website Link
              </a>
              <p class=" font-bold text-gray-500 text-justify ">
                <h1 class="card-body items-center text-accent font-roboto">
                  Website key Features
                </h1>
                <li>
                  A warehouse management website, where sellers can add their
                  products by giving product description
                </li>
                <li>
                  In the stock update form, sellers can update their products
                  quantity
                </li>
                <li>
                  In the my products page, the sellers can only see their added
                  products
                </li>
              </p>
            </div>
          </div>

          <div class="card w-80 bg-base-100 shadow-xl transition hover:bg-secondary hover:duration-300 mt-4 h-full">
            <figure className="mt-2 rounded-lg">
              <img src={website2} alt="Shoes" className="rounded-lg" />
            </figure>
            <div class="card-body items-center font-roboto">
              <h2 class="text-white p-2 text-center font-bold text-xl bg-accent ">
                Independent Service Provider
              </h2>
              <a
                className="text-accent underline"
                href="https://conquerself-8580b.web.app/"
                alt="link"
              >
                Live Website Link
              </a>
              <p class=" font-bold text-gray-500 text-justify ">
                <h1 class="card-body items-center text-accent font-roboto">
                  Website key Features
                </h1>
                <li>
                  A independent service provider website, where in the service
                  section, one can see the whole services and also can see the
                  service details
                </li>
                <li>Used a map using leaflet</li>
                <li>
                  Used authentication system with the firebase, with this one
                  can sign in or sign up in the website
                </li>
              </p>
            </div>
          </div>

          <div class="card w-80 bg-base-100 shadow-xl transition hover:bg-secondary hover:duration-300 mt-4 h-full">
            <figure className="mt-2 rounded-lg">
              <img src={website3} alt="Shoes" className="rounded-lg" />
            </figure>
            <div class="card-body items-center font-roboto">
              <h2 class="text-white p-2 font-bold text-xl bg-accent ">
                Product Analysis
              </h2>
              <a
                className="text-accent underline"
                href="https://packtech-7bcc46.netlify.app/"
                alt="link"
              >
                Live Website Link
              </a>
              <p class=" font-bold text-gray-500 text-justify  ">
                <h1 class="card-body items-center text-accent font-roboto">
                  Website key Features
                </h1>
                <li>This app is based on a Product Reviews</li>
                <li>
                  Made a home page which shows three reviews of the product
                </li>
                <li>
                  Dashboard shows 3 charts which shows the investment and
                  revenue regarding the product
                </li>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWebsites;
