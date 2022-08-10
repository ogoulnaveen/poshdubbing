import React from "react";
import AboutHeader from "../components/AboutUs/AboutHeader";
import Footer from "../components/ReusableComponents/Footer/Footer";
import WrapperMax from "../components/ReusableComponents/WrapperMax/WrapperMax";
import PackageBox from "./../components/Pricing/PackageBox";

const Pricing = () => {
  return (
    <>
      <section className="bg-[#EDF2FF] pb-32">
        <AboutHeader />
        <WrapperMax>
          <div className="flex flex-col items-center xl:flex-row justify-center space-x-6 my-14">
            <h1 className="font-semibold text-xl sm:text-2xl lg:text-3xl xl:text-4xl mb-8">
              Lorem ipsum has survived not only five
            </h1>
            <ul
              class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4 md:space-x-6 space-y-6 md:space-y-0"
              id="tabs-tab"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <a
                  href="#tabs-monthly"
                  class="
                  inline-block w-44 text-center font-semibold py-4 leading-none border
                  rounded-full text-[#053D9A] hover:text-white text-lg border-[#053D9A] hover:border-transparent hover:bg-[#053D9A]
    "
                  id="tabs-monthly-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#tabs-monthly"
                  role="tab"
                  aria-controls="tabs-monthly"
                  aria-selected="true"
                >
                  Monthly
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a
                  href="#tabs-yearly"
                  class="
                  inline-block w-44 text-center font-semibold py-4 leading-none border
                  rounded-full text-[#053D9A] hover:text-white text-lg border-[#053D9A] hover:border-transparent hover:bg-[#053D9A]
    "
                  id="tabs-yearly-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#tabs-yearly"
                  role="tab"
                  aria-controls="tabs-yearly"
                  aria-selected="true"
                >
                  Yearly
                </a>
              </li>
            </ul>
          </div>
          <div class="tab-content" id="tabs-tabContent">
            <div
              class="tab-pane fade show active"
              id="tabs-monthly"
              role="tabpanel"
              aria-labelledby="tabs-monthly-tab"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
                {" "}
                <PackageBox
                  price="10.5"
                  packageName="Basic"
                  packageColor="#012054"
                  className="text-[#012054]"
                  duration="month"
                />
                <PackageBox
                  price="15.3"
                  packageName="Standard"
                  packageColor="#5BECC0"
                  btnColor="#012054"
                  className=" text-white"
                  duration="month"
                />
                <PackageBox
                  price="23.7"
                  packageName="PRO"
                  packageColor="#012054"
                  btnColor="#5BECC0"
                  className="border-none text-white"
                  duration="month"
                />
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="tabs-yearly"
              role="tabpanel"
              aria-labelledby="tabs-yearly-tab"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
                {" "}
                <PackageBox
                  price="100.5"
                  packageName="Basic"
                  packageColor="#012054"
                  className="text-[#012054]"
                  duration="year"
                />
                <PackageBox
                  price="150.3"
                  packageName="Standard"
                  packageColor="#5BECC0"
                  btnColor="#012054"
                  className=" text-white"
                  duration="year"
                />
                <PackageBox
                  price="230.7"
                  packageName="PRO"
                  packageColor="#012054"
                  btnColor="#5BECC0"
                  className="border-none text-white"
                  duration="year"
                />
              </div>
            </div>
          </div>
        </WrapperMax>
      </section>
      <Footer />
    </>
  );
};

export default Pricing;
