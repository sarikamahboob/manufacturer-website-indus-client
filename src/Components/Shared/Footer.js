import React from "react";
import footer from "../../Images/footer.png";
import { MdEmail } from "react-icons/md";
import { BsFillPhoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="mt-12"
      style={{
        backgroundImage: `url(${footer})`,
        backgroundSize: "cover",
      }}
    >
      <footer class="footer p-10 text-secondary text-base font-roboto">
        <div className="">
          <span class="font-saira text-2xl font-extrabold text-accent">
            Services
          </span>
          <a className="font-bold text-white">Branding</a>
          <a class="">Design</a>
          <a class="">Marketing</a>
          <a class="">Advertisement</a>
        </div>
        <div>
          <span class="footer-title font-saira">Company</span>
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Jobs</a>
          <a class="link link-hover">Press kit</a>
        </div>
        <div>
          <span class="footer-title font-saira">Legal</span>
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
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
            <a className=" border p-2 rounded-[50%] border-accent text-accent hover:bg-accent hover:text-white transition hover:ease-in-out">
              <span className="text-lg   ">
                <FaFacebookF />
              </span>
            </a>
            <a className=" border p-2 rounded-[50%] border-accent text-accent hover:bg-accent hover:text-white transition hover:ease-in-out">
              <span className="text-lg">
                <AiFillInstagram />
              </span>
            </a>
            <a className=" border p-2 rounded-[50%] border-accent text-accent hover:bg-accent hover:text-white transition hover:ease-in-out">
              <span className=" text-lg">
                <FaTwitter />
              </span>
            </a>
            <a className=" border p-2 rounded-[50%] border-accent text-accent hover:bg-accent hover:text-white transition hover:ease-in-out">
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
