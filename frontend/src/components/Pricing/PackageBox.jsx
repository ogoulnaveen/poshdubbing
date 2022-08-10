import React from "react";
import OfferText from "./OfferText";

const PackageBox = ({
  price,
  packageName,
  packageColor,
  btnColor = "",
  className = "",
  duration,
}) => {
  return (
    <>
      <div className="flex-1 relative z-[1000] mb-12">
        <div className=" ">
          <div className="bg-white py-14 shadow-2xl rounded-3xl w-[300px] md:w-[370px] mx-auto">
            <div className="text-center ">
              <h1 className="text-[#012054] text-xl">
                ${" "}
                <span className="text-6xl text-[#012054] font-medium">
                  {price}
                </span>{" "}
                / {duration}
              </h1>
              <hr className="w-1/2 mx-auto" />
            </div>
            <div className="flex flex-col space-y-3 mt-7 items-center ">
              <OfferText text="Lorem ipum is simply dummy text" />
              <OfferText text="Lorem ipum is simply dummy text" />
              <OfferText text="Lorem ipum is simply dummy text" />
              <OfferText text="Lorem ipum is simply dummy text" />
              <OfferText text="Lorem ipum is simply dummy text" />
              <OfferText text="Lorem ipum is simply dummy text" />
            </div>
            <div className="text-center mt-20 lg:mt-28">
              <a
                href="#id"
                className={`inline-block w-40 text-center py-4 leading-none border
              rounded-full border-[#053D9A] bg-[${btnColor}] ${className}`}
              >
                Buy now
              </a>
            </div>
          </div>
        </div>
        <h1
          className={`-z-10 absolute -left-[20%] sm:left-[7%] md:left-[10%] lg:-left-[10%] xl:left-[3%] 2xl:-left-[10%] top-1/4  transform -rotate-90 uppercase text-base md:text-xl text-white bg-[${packageColor}] w-44 py-3 rounded-xl font-medium text-center`}
        >
          {packageName}
        </h1>
      </div>
    </>
  );
};
// lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2
// top-32 -left-[68px] sm:left-[5px] md:left-[68px] lg:-left-12
export default PackageBox;
