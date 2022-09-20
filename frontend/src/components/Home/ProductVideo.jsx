import React from "react";
import videoImg from "../../assets/images/product-video.svg";
import HeadingOne from "../ReusableComponents/HeadingOne";
import Wrapper from "../ReusableComponents/WrapperMin/WrapperMin";

const ProductVideo = () => {
  return (
    <section className="bg-[#EDF2FF]">
      <Wrapper className="text-center">
        <HeadingOne className="mb-4 lg:mb-8">Product video</HeadingOne>

        <p className="mb-7 text-sm lg:text-base font-medium">
        Upload your files with PoshDubbing by simply dragging the file or uploading from your device.

        </p>
        <img src={videoImg} className="mx-auto w-[650px]" alt="Product Video" />
      </Wrapper>
    </section>
  );
};

export default ProductVideo;
