import React from "react";
import polyganImg from "../../../assets/images/Polygon 7.svg";

const DubbingAccordion = ({ title, description }) => {
  return (
    <div className="overflow-hidden">
      <label className="">
        <input
          className="peer absolute opacity-0"
          type="checkbox"
          name=""
          id=""
        />
        <img
          src={polyganImg}
          className="mb-1 inline-block w-5 peer-checked:rotate-[94deg]"
          alt=""
          srcset=""
        />
        <p className="inline-block cursor-pointer items-center px-6 text-base font-semibold text-[#012054] transition sm:text-lg md:w-11/12 md:text-base lg:text-lg xl:text-xl">
          {title}
        </p>

        <div className="max-h-0 text-left transition-all duration-500 peer-checked:max-h-screen sm:text-center md:text-left">
          <p className="p-5">{description}</p>
        </div>
      </label>
    </div>
  );
};

export default DubbingAccordion;
