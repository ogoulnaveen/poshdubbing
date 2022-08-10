import React from "react";
import userImg from "../../assets/images/testimonial.jpg";
import Button from "../ReusableComponents/Button";
import InputBox from "../ReusableComponents/InputBox";
import InputLabel from "../ReusableComponents/InputLabel";

const Settings = () => {
  return (
    <section className="">
      <div className="container border mx-auto px-6 lg:px-24 xl:px-32">
        <div className="text-center md:text-left">
          <h1 className="text-[#012054] font-bold text-xl ">My Profile</h1>
          <div className="relative">
            <img
              src={userImg}
              className="w-[130px] h-[130px] rounded-[50%] border-4 border-[#5BECC0] my-12 mx-auto md:mx-0"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <form class="w-full max-w-lg">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <InputLabel label="first name" id="grid-first-name" />
              <InputBox placeholder="John" />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <InputLabel label="last name" id="grid-last-name" />
              <InputBox placeholder="Doe" />
            </div>
          </div>
          <div class="-mx-3 mb-6">
            <div class="w-full px-3 mb-6 md:mb-0">
              <InputLabel label="Email" id="grid-email" />
              <InputBox placeholder="johndoe@gmail.com" type="email" />
            </div>
          </div>
          <div class="-mx-3 mb-6">
            <div class="w-full px-3 mb-6 md:mb-0">
              <InputLabel label="Address" id="grid-address" />
              <InputBox placeholder="Bangalore, Karnatala, India" />
            </div>
          </div>
          <div class="-mx-3 mb-6">
            <div class="w-full px-3 mb-6 md:mb-0">
              <InputLabel label="Password" id="grid-password" />
              <InputBox placeholder="Password" type="password" />
            </div>
          </div>
          <div class="-mx-3 pb-6 mt-12 flex justify-between">
            <Button to="#id" className="bg-[#5BECC0] w-28 text-white">
              Save
            </Button>
            <Button
              to="#id"
              className="bg-transparent w-28 text-[#012054] border border-[#012054] hover:bg-[#012054] hover:text-white transition"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Settings;
