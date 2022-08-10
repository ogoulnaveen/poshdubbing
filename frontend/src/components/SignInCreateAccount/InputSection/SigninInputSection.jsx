import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import InputWithIcon from "../../ReusableComponents/InputWithIcon/InputWithIcon";
import PasswordInput from "../../ReusableComponents/PasswordInput";
import HeadingTwo from "../../ReusableComponents/HeadingTwo";
import { useState } from "react";


const SigninInputSection = () => {

  const [email,setEmail] = React.useState();
  const [password,setPassword] = React.useState();
  const navigate = useNavigate();
  
  const handlelogin = async () =>{
  
    let result = await fetch("http://localhost:5000/login",{
      method : 'post',
      body:JSON.stringify({email,password}),
      headers : {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    console.warn(result)
    navigate("/dashboard")

  }

  return (
    <div className="flex-1 p-10 order-2 lg:order-none sm:w-[600px] mx-auto">
      <div>
        <div className="text-center mb-8">
          <HeadingTwo className="mb-4 font-bold">Hello</HeadingTwo>
          <p className="font-medium text-[#012054] text-lg">
            Sign in to your <span className="font-semibold">Posh Dubbing</span>{" "}
            account
          </p>
        </div>
        <form class="space-y-8 " action="#">
        <i class="fa fa-user icon"></i>
        <input type="Text" placeholder="enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br></br>
        <i class="fa fa-user icon"></i>
        <input  type="Text" placeholder="enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

       
          <div class="flex items-start">
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  class="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded "
                  required=""
                />
              </div>
              <div class="text-sm ml-3">
                <label
                  for="remember"
                  class="font-medium  text-gray-400  text-base "
                >
                  Remember me
                </label>
              </div>
            </div>
            <Link
              to="/forget-password"
              class=" hover:underline text-gray-400 ml-auto  font-medium text-base "
            >
              Forget Password?
            </Link>
          </div>
          <div className="text-center">
            <button onClick={handlelogin}
               className={`inline-block w-56 text-center font-semibold py-5 leading-none border
      rounded-full text-white text-lg border-[#053D9A] hover:border-transparent
      hover:text-white bg-[#053D9A] mb-8`}
            >
              Sign In
            </button>
            <div class="text-base font-medium text-gray-400">
              Don't have an account?{" "}
              <Link
                to="/createaccount"
                class="text-[#012054] font-bold hover:underline ml-4"
              >
                Create
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SigninInputSection;
