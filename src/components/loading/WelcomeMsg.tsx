import Image from "next/image";
import React from "react";
import logo from "../../../public/tonloadpic.png";
const WelcomeMsg = () => {
  return (
    <div className="flex flex-col items-center fixed left-1/2 top-[30%]  transform -translate-x-1/2 font-clashdisplay">
      <Image
        alt="loading logo"
        src={logo}
        style={{ maxWidth: "20vw", height: "auto", borderRadius: "25px" }}
      />
      <h1 className="font-bold text-white text-[5vw] leading-[30.75px] mt-[4vw]">
        TonClaim
      </h1>
      <p className=" font-normal text-white text-[4vw] leading-[24.6px] opacity-[50%] ">Bonuses & Tasks Daily!</p>
    </div>
  );
};

export default WelcomeMsg;
