import React, {useState} from "react";
 import { Link , useNavigate} from "react-router-dom";
import PasswordInput from "../../ReusableComponents/PasswordInput";
import InputWithIcon from "./../../ReusableComponents/InputWithIcon/InputWithIcon";
import HeadingTwo from "./../../ReusableComponents/HeadingTwo";

const CreateInputSection = () => {

  const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const navigate = useNavigate();

const collectData = async () =>{
   console.warn(name,email,password);
   let result = await fetch("http://localhost:5000/createaccount", {
  method:'post',
  body: JSON.stringify({name,email,password}),
  headers : {
    'Content-Type': 'application/json'
  }

   });
   result = await result.json();
   console.log(result);
   navigate('/login')
}


  return (
    <div className="flex-1 p-10 order-2 lg:order-none sm:w-[600px] mx-auto">
      <div className="text-center mb-8">
        <HeadingTwo className="mb-4 font-bold">Hello</HeadingTwo>
      </div>
      <form className="space-y-4 xl:space-y-8" action="#">
     
      <i class="fa fa-user icon"></i>
        <input type="Text" placeholder="enter name" value={name} onChange={(e)=>setName(e.target.value)}/>
<br></br>
        <i class="fa fa-user icon"></i>
        <input type="Text" placeholder="enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br></br>
        <i class="fa fa-user icon"></i>
        <input type="Text" placeholder="enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>


        <div className="text-center">
          <button onClick={collectData}
            href="#id"
            className={`inline-block w-56 text-center font-semibold py-5 leading-none border
      rounded-full text-white border-[#053D9A] hover:border-transparent
      hover:text-white bg-[#053D9A] mb-8`}
          >
            Create Account
          </button>
          <div className="text-base font-medium text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#012054] font-bold hover:underline ml-4"
            >
              Sign in
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateInputSection;
