import React from "react";
import Image from "next/image";
import logo_loader from "public/assets/images/Loader_Website2.gif";
import "./Loader.css";

function Loader() {
  return (
    <div>
      <div className="" style={{ backgroundColor: "#FCFCFC !important" }}>
        <div className="bg-white w-screen h-screen flex items-center justify-center">
          <Image src={logo_loader} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Loader;
