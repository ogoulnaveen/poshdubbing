import React from "react";
import { Home, Settings, Create } from "./index.js";
import Projects from "./Projects.jsx";

export default function MainLayout({ showLayout }) {
  console.log(showLayout);

  let position = "justify-center";
  if (showLayout === "settings" || "projects") {
    position = "";
  }

  // if (showLayout === "home") {
  //   showLayout = <Home />;
  // } else if (showLayout === "settings") {
  //   showLayout = <Settings />;
  // } else if (showLayout === "create") {
  //   showLayout = <Create />;
  // } else if (showLayout === "projects") {
  //   showLayout = <Projects />;
  // }
  return (
    <div className="w-full bg-[#032054]">
      <div style={{padding:'50px',fontSize:'20px'}}
        className={`sm:h-screen items-center ${position} bg-[#edf2ff] lg:rounded-l-[50px]`}
      >
        Number of Users<br/>
       <span> {showLayout.length}</span>
      </div>
    </div>
  );
}
