import React from "react";
import Logo from "../assets/Logo.png";
import Min from "../assets/Min.png";
import Iframe from "react-iframe";
import { AiOutlineSearch } from "react-icons/ai";
import { BiDollarCircle } from "react-icons/bi";
import { RiCommunityLine, RiEye2Line } from "react-icons/ri";
import { SiDatabricks } from "react-icons/si";
import { TbPlant } from "react-icons/tb";
import { BsShieldFillX } from "react-icons/bs";

function Navbar() {
  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat sm:px-10 px-4 text-white lg:h-screen">
        <div className="sm:p-4 p-2 border-b flex items-center">
          <img src={Logo} alt="/" className="w-1/2 sm:w-fit" />
          <div className="hidden sm:flex justify-center mx-auto font-medium mt-4 space-x-6">
            <p>Home</p>
            <p>Landlord</p>
            <p>Tenants</p>
            <p>Contact us</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-24 items-center">
          <div className="sm:mt-14 md:mt-0 pt-14 sm:pt-0 lg:pl-28 pl-4 text-3xl sm:text-4xl md:text-4xl lg:text-5xl sm:space-y-1 font-['Inter'] font-bold ">
            <p>The Most Affordable</p>
            <p>Place to Stay In The</p>
            <p>San Francisco Bay Area</p>
          </div>
          <div className="flex items-center flex-col">
            <div>
              <Iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
                width="100%"
                height="240"
                className="rounded-2xl mt-8 mx-auto sm:mt-14"
              />
            </div>
            <div>
              <div className="bg-white mx-auto mb-8 p-4 text-sm sm:text-xs rounded-lg mt-4 text-[#252B42] font-medium font-['Poppins']">
                <div className="flex flex-row items-center">
                  <select className="rounded btn">
                    <option>All Type</option>
                  </select>
                  <select className="rounded btn">
                    <option>Neighborhood</option>
                  </select>
                  <AiOutlineSearch
                    size={40}
                    className="bg-[#23A6F0] text-blue-50 rounded-sm px-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fff] headings lg:mx-12 ">
        <h1 className="sm:after:w-[22%] text-2xl underliner">
          Minimum Living Costs of Taking Care of Things
        </h1>
        <div className="sm:flex sm:flex-row mt-4 mx-1">
          <div className="sm:flex-1 lg:flex-none">
            <img
              src={Min}
              alt="/"
              className="w-[387px] h-[400px] object-scale-down"
            />
          </div>

          <div className="flexing">
            <div>
              <BiDollarCircle size={41} className="box mt-4" />
              <p>Pay As Little</p>
              <p>As Possible!</p>
            </div>
            <div>
              <TbPlant size={41} className="box mt-4" />
              <p>Enjoy Peaceful</p>
              <p>Environment!</p>
            </div>
          </div>
          <div className="flexing ml-auto md:ml-4 lg:ml-auto">
            <div>
              <RiCommunityLine size={41} className="box mt-4" />
              <p>Enjoy Wisdom</p>
              <p>Of Community</p>
            </div>
            <div>
              <BsShieldFillX size={41} className="box mt-4" />
              <p>Stay Safe!</p>
              <p>Save Money!</p>
            </div>
          </div>
          <div className="flexing ml-auto md:ml-4 lg:ml-auto">
            <div>
              <SiDatabricks size={41} className="box mt-4" />
              <p>Let Somebody </p>
              <p>Take Care of Landlord</p>
            </div>
            <div>
              <RiEye2Line size={41} className="box mt-4" />
              <p>Pay For What</p>
              <p>You Use</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
