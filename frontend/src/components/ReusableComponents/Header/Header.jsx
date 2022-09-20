import { React, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/PoshDubbing H white .png";
import { FormattedMessage } from 'react-intl';
import InjectIntl from 'react-intl-inject';
const Header = ({props}) => {
  console.log(props)
  const [isBoxVisible, setVisible] = useState({ isBoxVisible: false });

  const toogle = () => {
    setVisible((prevState) => ({ isBoxVisible: !prevState.isBoxVisible }));
  };

  return (
    <InjectIntl>
    {({ intl }) => (
    <nav className="flex items-center justify-between flex-wrap bg-transparent lg:pt-4">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/">
          <img src={logo} className="w-64" alt="Website Logo" srcset="" />
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={toogle}
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        className={`w-full ${
          isBoxVisible.isBoxVisible ? "" : "hidden"
        } flex-grow lg:flex lg:items-center lg:w-auto justify-center`}
      >
        <div
          className={` flex-grow lg:flex lg:items-center lg:w-auto justify-center`}
        >
          <div className="text-lg font-medium">
            <Link
              to="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-[#5BECC0] mr-10"
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-[#5BECC0] mr-10"
            >
              {intl.formatMessage({ id: 'home.english' })}
            </Link>

            <Link
              to="/pricing"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-[#5BECC0] mr-10"
            >
              <FormattedMessage id="home.pricing"></FormattedMessage>
            </Link>
            <select
              style={{ width: "73px" }}
              value={props.language}
              className="font-bold text-[#0057D4] text-sm hover:underline hover:text-[#0057D4]"
              onChange={(evt) => props.setLanguage(evt.target.value)}
            >
              <option value="en"> english</option>
              <option value="ar"> arabic</option>
            </select>
          </div>
        </div>
        <div>
          <Link
            to="/login"
            className="inline-block text-base font-semibold px-8 py-3 lg:px-12 lg:py-5 leading-none border
          rounded-full text-white border-[#5BECC0] hover:border-transparent
          hover:text-white hover:bg-[#5BECC0] mt-4 lg:mt-0 "
          >
            {" "}
            Sign-in
          </Link>
        </div>
        <br />
        <br />
      </div>
    </nav>
    )}</InjectIntl>
  );
};

export default Header;
