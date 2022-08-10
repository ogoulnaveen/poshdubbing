import React from "react";
import { Link } from "react-router-dom";
import InputBox from "../ReusableComponents/InputBox";
import InputWithIcon from "../ReusableComponents/InputWithIcon/InputWithIcon";
import HeadingTwo from "../ReusableComponents/HeadingTwo";

const ForgetPwdText = () => {
  return (
    <div className="flex-1 p-10 order-2 lg:order-none sm:w-[600px] mx-auto">
      <Link to="/sign-in" className="font-semibold hidden lg:block mb-20">
        Back to login
      </Link>
      <div className="">
        {/* <h1 className="font-bold text-2xl sm:text-3xl lg:text-2xl xl:text-3xl  text-[#012054] mb-2">
          Forget Password!
        </h1> */}
        <HeadingTwo className="mb-4 font-bold sm:text-3xl lg:text-2xl xl:text-3xl ">
          Forget Password!
        </HeadingTwo>

        <p className="text-gray-400 text-sm font-medium mb-8 lg:mb-14">
          Send a link to your email to reset your password
        </p>
        <form className="">
          <h1 className="text-xl font-bold text-[#012054] mb-2">Email</h1>{" "}
          <InputBox placeholder="john24@gmail.com" className="rounded-3xl" />
          <a
            href="#id"
            className="inline-block w-56 text-center font-medium py-5 leading-none border
      rounded-full text-white border-[#012054] hover:border-transparent
      hover:text-white mt-5 xl:mt-20 bg-[#012054]"
          >
            Send rest link
          </a>
        </form>
      </div>
    </div>
  );
};

export default ForgetPwdText;
