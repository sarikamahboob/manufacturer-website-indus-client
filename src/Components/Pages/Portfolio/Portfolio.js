import React from "react";
import MyWebsites from "./MyWebsites";

const Portfolio = () => {
  return (
    <div className="container mx-auto mt-20 ">
      <h1 className="mb-5 text-5xl font-bold text-accent font-saira text-center mb-20">
        Welcome to my Portfolio !!!
      </h1>
      <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2 items-center gap-10 p-2">
        <div className="shadow-lg p-10 rounded-lg border-t-4 border-accent  h-full">
          <h1 className="mb-5 text-4xl underline font-bold text-accent font-saira text-center ">
            My Info
          </h1>
          <h1 className=" font-roboto text-xl mt-6">
            <span className="text-accent font-bold text-2xl">Name:</span> Sarika
            Mahboob
          </h1>
          <p className=" font-roboto text-xl mt-6">
            <span className="text-accent font-bold text-2xl">Email:</span>{" "}
            sarika.mahboob1234@gmail.com
          </p>
          <p className=" font-roboto text-xl mt-6">
            <span className="text-accent font-bold text-2xl">Education:</span>{" "}
            BSC in Computer Science & Engineering
          </p>
          <p className=" font-roboto text-xl mt-6">
            <span className="text-accent font-bold text-2xl">Varsity:</span>{" "}
            Green University of Bangladesh
          </p>
          <p className=" font-roboto text-xl mt-6">
            <span className="text-accent font-bold text-2xl">Address:</span>
            Pallabi Extention, Mirpur, Dhaka-1216
          </p>
          <p className=" font-roboto text-xl mt-6">
            <span className="text-accent font-bold text-2xl">
              LinkedIn Link:
            </span>
            https://www.linkedin.com/in/sarika-mahboob-744a9a153
          </p>
        </div>
        <div className="shadow-lg p-10 rounded-lg border-t-4 border-accent  h-full">
          <h1 className="mb-5 text-4xl underline font-bold text-accent font-saira text-center ">
            My Skills
          </h1>
          <div className="font-roboto">
            <div className="flex items-center mt-6">
              <span className="text-accent font-bold text-xl mr-2 w-32">
                HTML5:
              </span>
              <progress
                class="progress w-full"
                value="100"
                max="100"
              ></progress>
            </div>
            <div className="flex items-center mt-6">
              <span className="text-accent font-bold text-xl mr-2 w-32">
                CSS3:
              </span>
              <progress
                class="progress w-full"
                value="100"
                max="100"
              ></progress>
            </div>
            <div className="flex items-center mt-6 ">
              <span className="text-accent font-bold text-xl mr-2 w-32 ">
                Bootstrap5:
              </span>
              <progress class="progress w-full" value="90" max="100"></progress>
            </div>
            <div className="flex items-center mt-6">
              <span className="text-accent font-bold text-xl mr-2 w-32">
                JavaScript:
              </span>
              <progress class="progress w-full" value="70" max="100"></progress>
            </div>
            <div className="flex items-center mt-6">
              <span className="text-accent font-bold text-xl mr-2 w-32">
                ES6:
              </span>
              <progress class="progress w-full" value="60" max="100"></progress>
            </div>
            <div className="flex items-center mt-6">
              <span className="text-accent font-bold text-xl mr-2 w-32">
                ReactJs:
              </span>
              <progress class="progress w-full" value="70" max="100"></progress>
            </div>
            <div className="flex items-center mt-6">
              <span className="text-accent font-bold text-xl mr-2 w-32">
                React Router:
              </span>
              <progress class="progress w-full" value="80" max="100"></progress>
            </div>
            <div className="flex items-center mt-6">
              <span className="text-accent font-bold text-xl mr-2 w-32">
                Tailwind:
              </span>
              <progress class="progress w-full" value="80" max="100"></progress>
            </div>
            <div className="flex items-center mt-6">
              <span className="text-accent font-bold text-xl mr-2 w-32">
                Daisy UI:
              </span>
              <progress
                class="progress w-full"
                value="100"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
      </div>
      <MyWebsites />
    </div>
  );
};

export default Portfolio;
