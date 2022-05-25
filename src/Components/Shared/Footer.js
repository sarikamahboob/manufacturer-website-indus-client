import React from "react";
import footer from "../../Images/footer.png";
import { MdEmail } from "react-icons/md";
import { BsFillPhoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div
      className="mt-12 "
      style={{
        backgroundImage: `url(${footer})`,
        backgroundSize: "cover",
      }}
    >
      <footer class="footer p-10 text-secondary text-base font-roboto container mx-auto">
        <div className=" ">
          <span class="font-saira text-2xl font-extrabold text-accent">
            About Us
          </span>
          <p className="w-60 text-justify text-white">
            indus was founded by riders to bring the best shopping experience to
            all enthusiasts who visit us in-store or online. We offer an
            enormous selection of gear, parts, and accessories to serve beginner
            riders to bonafide professionals, and we aim to create meaningful,
            insightful content designed to inform and entertain.
            <span
              className="cursor-pointer transition hover:text-accent  "
              onClick={() => navigate(`/aboutus`)}
            >
              ...Read More
            </span>
          </p>
        </div>
        <div className="">
          <span class="font-saira text-2xl font-extrabold text-accent">
            Important Links
          </span>
          <Link
            to="/blogs"
            className="font-bold text-white transition hover:text-accent"
          >
            Blogs
          </Link>
          <Link
            to="/portfolio"
            className="font-bold text-white transition hover:text-accent"
          >
            Portfolio
          </Link>
          <Link
            to="/aboutus"
            className="font-bold text-white transition hover:text-accent"
          >
            About Us
          </Link>
          <Link
            to="/customerservice"
            className="font-bold text-white transition hover:text-accent"
          >
            Customer Service
          </Link>
          <Link
            to="/dashboard"
            className="font-bold text-white transition hover:text-accent"
          >
            Dashboard
          </Link>
        </div>
        <div>
          <span class="font-saira text-2xl font-extrabold text-accent">
            Services
          </span>
          <p className="font-bold text-white transition hover:text-accent">
            Full Time Service
          </p>
          <p className="font-bold text-white transition hover:text-accent">
            Maintenance
          </p>
          <p className="font-bold text-white transition hover:text-accent">
            Quick Delivery
          </p>
          <p className="font-bold text-white transition hover:text-accent">
            Lowest Price Guarantee
          </p>
          <p className="font-bold text-white transition hover:text-accent">
            Hassle Free returns
          </p>
          <p className="font-bold text-white transition hover:text-accent">
            Loyalty Rewards
          </p>
        </div>
        <div>
          <span class="font-saira text-2xl font-extrabold text-accent">
            Contact
          </span>
          <div class="flex items-center gap-2">
            <span className="text-accent">
              <MdEmail />
            </span>
            <span className="font-bold text-white ">info@indus.com</span>
          </div>
          <div class="flex items-center gap-2">
            <span className="text-accent">
              <BsFillPhoneFill />
            </span>
            <span className="font-bold text-white ">01700000000</span>
          </div>
          <div class="flex items-center gap-2">
            <span className="text-accent">
              <FaMapMarkerAlt />
            </span>
            <span className="font-bold text-white ">California, U.S.</span>
          </div>
        </div>
      </footer>
      <footer class="footer flex items-center justify-between px-10 py-4 border-t border-base-100 text-base-content ">
        <div class="items-center grid-flow-col">
          <div>
            <p className=" text-white font-saira text-base">
              Indus © Sarika Mahboob 2022. All Rights Reserved
            </p>
          </div>
        </div>
        <div class="md:place-self-center md:justify-self-end">
          <div class="grid grid-flow-col gap-4">
            <a
              href="#"
              className=" border p-2 rounded-[50%] border-accent text-accent hover:bg-accent hover:text-white transition hover:ease-in-out"
            >
              <span className="text-lg   ">
                <FaFacebookF />
              </span>
            </a>
            <a
              href="#"
              className=" border p-2 rounded-[50%] border-accent text-accent hover:bg-accent hover:text-white transition hover:ease-in-out"
            >
              <span className="text-lg">
                <AiFillInstagram />
              </span>
            </a>
            <a
              href="#"
              className=" border p-2 rounded-[50%] border-accent text-accent hover:bg-accent hover:text-white transition hover:ease-in-out"
            >
              <span className=" text-lg">
                <FaTwitter />
              </span>
            </a>
            <a
              href="#"
              className=" border p-2 rounded-[50%] border-accent text-accent hover:bg-accent hover:text-white transition hover:ease-in-out"
            >
              <span className="text-lg">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
