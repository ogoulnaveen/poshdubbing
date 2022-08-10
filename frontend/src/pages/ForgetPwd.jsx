import React from "react";
import forgetPwd from "../assets/images/Forgot pwd.svg";
import ForgetResetTemp from "./../components/ReusableComponents/ForgetResetTemp/ForgetResetTemp";
import ForgetPwdText from "./../components/ForgetPwd/ForgetPwdText";
import ImagePart from "./../components/ForgetPwd/ImagePart";
const ForgetPassword = () => {
  return (
    <ForgetResetTemp>
      <ForgetPwdText />
      <ImagePart image={forgetPwd} />
    </ForgetResetTemp>
  );
};

export default ForgetPassword;
