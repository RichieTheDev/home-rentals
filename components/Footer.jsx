import React from "react";
import { CiLocationOn } from "react-icons/ci";
import {
  SlSocialInstagram,
  SlSocialFacebook,
  SlSocialSkype,
  SlSocialTumblr,
  SlSocialYoutube,
  SlSocialDropbox,
  SlSocialGithub,
  SlSocialLinkedin,
} from "react-icons/sl";
import { BsTelephone, BsPrinter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="text-lg mt-16 border-t border-[#F4511E] mx-4 sm:mx-14">
      <div className="sm:p-20 p-4 flex sm:flex-row flex-col">
        <div className="flex-1 text-2xl font-bold">
          <p>LOGO</p>
        </div>
        <div className="flex space-x-2 items-center flex-col">
          <div className=" flex space-x-1 items-center">
            <CiLocationOn size={20} className="text-[#F4511E]" />
            <p>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</p>
          </div>
          <div className="flex sm:flex-row flex-col sm:space-x-20 mt-2 items-center">
            <div className="flex space-x-1 items-center">
              <BsTelephone size={20} className="text-[#F4511E]" />
              <p>(123) 456-7890</p>
            </div>
            <div className="flex space-x-1 items-center">
              <BsPrinter size={20} className="text-[#F4511E]" />
              <p>(123) 456-7890</p>
            </div>
          </div>
          <div className=" flex space-x-8 items-center mt-4">
            <SlSocialTumblr size={20} className="text-[#F4511E]" />
            <SlSocialInstagram size={20} className="text-[#F4511E]" />
            <SlSocialFacebook size={20} className="text-[#F4511E]" />
            <SlSocialSkype size={20} className="text-[#F4511E]" />
            <SlSocialDropbox size={20} className="text-[#F4511E] " />
            <SlSocialYoutube size={20} className="text-[#F4511E] " />
            <SlSocialLinkedin
              size={20}
              className="text-[#F4511E] hidden sm:inline"
            />
            <SlSocialGithub
              size={20}
              className="text-[#F4511E] hidden sm:inline"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row pb-6 lg:text-lg text-base">
        <p>About Us</p>
        <p className="lg:ml-6">Contact Us</p>
        <p className="lg:ml-6">Help</p>
        <p className="lg:ml-6">Privacy Policy</p>
        <p className="lg:ml-6">Disclaimer</p>
        <div className="flex lg:ml-auto text-lg lg:text-xs">
          <p>Copyright © 2020 Minimumlivingcost. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
