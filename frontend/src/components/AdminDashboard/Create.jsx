import React from "react";
import successfullImg from "../../assets/images/successful.svg";
import WrapperMin from "../ReusableComponents/WrapperMin/WrapperMin";

const Create = () => {
  return (
    <section className="bg-[#EDF2FF]">
      <WrapperMin>
        <div className="flex flex-col xl:flex-row mt-8 bg-[#012054] xl:w-[950px] rounded-lg p-10">
          <div className="flex-1 mb-8 xl:mb-0">
            <div className="mb-6">
              <label className="text-2xl font-semibold mb-2 text-white">
                Upload your files
              </label>
              <p className="text-sm text-gray-300">
                It is a long established fact that a reade will be
              </p>
            </div>
            <div className="flex items-center w-full">
              <label className="flex flex-col border-2 border-gray-300 items-center justify-center border-dashed w-[250px] md:w-[420px] xl:w-[320px] md:h-[300px] rounded-xl p-3 md:p-0">
                <div className="flex flex-col items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-gray-400 group-hover:text-gray-600 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p className="cursor-pointer text-sm tracking-wider text-gray-400 group-hover:text-gray-600 text-center">
                    Drag&Drop your files here <br /> or{" "}
                    <span className="text-[#5BECC0]">browse</span> to upload
                  </p>
                </div>
                <input type="file" class="opacity-0" />
              </label>
            </div>
          </div>
          <div className="flex-1 my-auto">
            <div className="flex flex-col items-center space-y-4">
              {" "}
              <img src={successfullImg} className="w-28" alt="" />
              <label className="text-lg font-semibold mb-2 text-white">
                File uploaded successfully
              </label>
            </div>
          </div>
        </div>
      </WrapperMin>
    </section>
  );
};

export default Create;
