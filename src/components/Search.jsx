import React from "react";
import Img1 from "../assets/Img1.png";
import Img2 from "../assets/Img2.png";
import Img3 from "../assets/Img3.png";
import Img4 from "../assets/Img4.png";
import IMG from "../assets/IMG.jpg";
import IMG21 from "../assets/IMG21.png";

const Search = () => {
  return (
    <div className="mt-14 bg-white font-['Inter']">
      <div className="flex flex-wrap mx-3 sm:mx-0 sm:flex-nowrap justify-around sm:justify-center  sm:space-x-8 ">
        <div className="flex mr-auto sm:mr-0 flex-col ">
          <div>
            <img
              src={Img1}
              alt="/"
              className="w-40 h-52  brightness-75 object-cover rounded-2xl absolute"
            />
            <p className="relative ml-6 top-4 text-white leading-none  text-center">
              Flexible Leases
            </p>
          </div>
          <div className="mt-52">
            <img
              src={Img3}
              alt="/"
              className="w-36 h-44 brightness-75 object-cover rounded-2xl absolute"
            />
            <p className="relative ml-2  top-4 text-white leading-none  text-center">
              Monthly House
              <p>Cleaning</p>
            </p>
          </div>
        </div>
        <div className="flex mr-auto flex-col">
          <div>
            <img
              src={Img2}
              alt="/"
              className="w-40 sm:w-52 h-44 mt-12 brightness-75 object-cover rounded-2xl absolute"
            />
            <p className="relative ml-4 sm:ml-10 font-medium pt-6 top-10 text-white leading-none  text-center">
              7 Day Happiness
              <p className=" text-white  text-center">Guaranteed</p>
            </p>
          </div>
          <div className="mt-32">
            <img
              src={Img4}
              alt="/"
              className="w-40 sm:w-52 h-52 mt-12 brightness-75 object-cover rounded-2xl absolute"
            />
            <p className="relative ml-4 sm:ml-8 font-medium pt-6 top-10 text-white leading-none  text-center">
              Choose your Own
              <p className=" text-white  text-center">Roommate</p>
            </p>
          </div>
        </div>
        <div className="sm:pl-10 flex flex-col px-2 sm:px-0 mt-48 sm:mt-32">
          <h1 className="text-[#18191F] text-3xl text-center sm:text-2xl font-bold">
            Flexibility And Options
          </h1>
          <h1 className="text-[#18191F] text-3xl sm:text-2xl text-center font-bold">
            To Suit your Style
          </h1>
          <p className="text-base sm:text-sm mt-2">
            You need it? We got it, Make finding your next
          </p>
          <p className="text-base sm:text-sm">
            home easy, simple and comfortable. from our
          </p>
          <p className="text-base sm:text-sm">
            happiness guarantee to our selective roommate
          </p>
          <p className="text-base sm:text-sm">
            finder option. We provide the Flexibility you{" "}
          </p>
          <p className="text-base sm:text-sm">most desire</p>
          <button className="buttonss text-lg w-fit sm:w-full mt-6">
            Search Rooms
          </button>
        </div>
      </div>
      <div className=" mt-10 sm:mt-56 text-center text-[#18191F] text-2xl font-semibold">
        <p>
          Your Property with us And Be Confident That Your Room Will Be Filled
          Out
        </p>
      </div>
      <div className="text-[#252B42] font-['Poppins'] shadow-2xl rounded-md mt-4 p-4 sm:p-10 mx-4 sm:mx-32 ">
        <div className="text-[#F4511E] ">
          <p className="text-center font-semibold text-xl">
            Add a New Property
          </p>
        </div>
        <div className="text-black font-medium">
          <form className="flex flex-col sm:flex-row justify-between shadow-none drop-shadow-none">
            <div className="flex flex-col justify-between">
              <div className="mt-4">
                <label htmlFor="Name">
                  Name <span className="text-[#F4511E]">*</span>
                </label>
                <input
                  type="text"
                  className="inputs"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="City">
                  City <span className="text-[#F4511E]">*</span>
                </label>
                <input
                  type="text"
                  className="inputs"
                  placeholder="Enter City"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="Price">
                  Price <span className="text-[#F4511E]">*</span>
                </label>
                <input
                  type="text"
                  className="inputs"
                  placeholder="Enter Price"
                />
              </div>
            </div>
            <div className="mt-4">
              <div>
                <label htmlFor="Address">
                  Address <span className="text-[#F4511E]">*</span>
                </label>
                <input
                  type="text"
                  className="inputs"
                  placeholder="Enter Your Address"
                />
                <div className="mt-4">
                  <label htmlFor="State">
                    State <span className="text-[#F4511E]">*</span>
                  </label>
                  <input
                    type="text"
                    className="inputs"
                    placeholder="Enter Your State"
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="Rooms">
                    Rooms <span className="text-[#F4511E]">*</span>
                  </label>
                  <input
                    type="text"
                    className="inputs"
                    placeholder="Enter Your Rooms"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="Unit Number">
                Unit Number <span className="text-[#F4511E]">*</span>
              </label>
              <input
                type="text"
                className="inputs"
                placeholder="Enter Your Unit Number"
              />
              <div className="mt-4">
                <label htmlFor="Room Type">
                  Room Type <span className="text-[#F4511E]">*</span>
                </label>
                <input
                  type="text"
                  className="inputs"
                  placeholder="Enter Your Room Type"
                />
              </div>
            </div>
          </form>
          <div className="mt-4 block">
            <label htmlFor="Description">
              Description <span className="text-[#F4511E]">*</span>
            </label>
            <textarea
              rows="7"
              className="block shadow-2xl bg-[#f9f9f9] p-2.5 w-full rounded-md text-sm"
              placeholder="Enter description"
            ></textarea>
          </div>
          <div className="mt-14 block">
            <p>
              Upload Photos <span className="text-[#F4511E]">*</span>
            </p>
            <div className="border text-center p-10 mt-2 border-[#f4511e] border-dashed">
              <p className="sm:ml-20">
                Drag Your here or{" "}
                <span className="text-[#F4511E]">
                  <input type="file" />
                </span>{" "}
              </p>
              <p className="text-[#252B42] text-sm">
                Supported: JPG, JPEG, PNG
              </p>
            </div>
          </div>
          <button className="flex justify-center buttonss mt-8 sm:px-24 w-full sm:w-fit text-base sm:py-4 mx-auto">
            Add New Property
          </button>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col-reverse mt-10 bg-gradient-to-r from-pink-100 to-pink-100">
        <div className="flex-1 mt-8 sm:mt-28 text-[#18191F] text-lg sm:text-sm font-['Inter'] px-4 sm:px-20">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel
            pellentesque est. Curabitur at odio sit amet libero vulputate
            efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa,
            faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus
            fringilla finibus
          </p>
          <div className="flex mt-4 space-x-4 items-center">
            <img
              src={IMG21}
              alt="/"
              className="w-fit sm:w-12 h-12 object-cover"
            />
            <div className="flex flex-col text-sm sm:text-xs">
              <p className="text-[#F4511E] font-bold">Harry Wilson</p>
              <p>Property Owner</p>
            </div>
          </div>
        </div>

        <img
          src={IMG}
          alt="/"
          className="sm:flex-1 w-screen px-2  rounded-md sm:w-20 sm:h-80 object-cover brightness-75"
        />
      </div>
    </div>
  );
};

export default Search;
