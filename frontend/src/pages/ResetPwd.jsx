import React from "react";
import resetImg from "../assets/images/Save new pwd.svg";
import { Link } from "react-router-dom";
import ForgetResetTemp from "../components/ReusableComponents/ForgetResetTemp/ForgetResetTemp";
import ImagePart from "../components/ForgetPwd/ImagePart";

const ResetPwd = () => {
  return (
    <ForgetResetTemp>
      <div className="flex-1 py-10 px-6 order-2 lg:order-none sm:w-[600px] sm:mx-auto">
        <Link to="/sign-in" className="font-semibold hidden lg:block mb-10">
          Back to login
        </Link>
        <div className="">
          <h1 className="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-bold text-[#012054] mb-2">
            Reset Password
          </h1>
          <p className="text-gray-400 text-sm font-medium mb-8 lg:mb-14">
            Please choose your new password
          </p>
          <form>
            <div className="mb-5">
              <h1 className="text-xl font-semibold text-[#012054] mb-2">
                New Password
              </h1>{" "}
              <input
                type="password"
                placeholder="Enter your new password"
                className="rounded-2xl py-2 border border-[#012054] px-4 w-full"
              />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-[#012054] mb-2">
                Confirm Password
              </h1>{" "}
              <input
                type="password"
                placeholder="Confirm your new password"
                className="rounded-2xl py-2 border border-[#012054]  px-4 w-full"
              />
            </div>

            <a
              href="#id"
              className="inline-block w-56 text-center font-medium py-5 leading-none border
      rounded-full text-white border-[#012054] hover:border-transparent
      hover:text-white mt-5 xl:mt-20 bg-[#012054]"
            >
              Save new password
            </a>
          </form>
        </div>
      </div>
      <ImagePart image={resetImg} className="" />
    </ForgetResetTemp>
  );
};

export default ResetPwd;
