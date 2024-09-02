import React from "react";
import Image from "next/image";
import logo from "../../public/tonloadpic.png";
const Header = () => {
  return (
    <div className="flex justify-between p-[6%] items-center ">
      <h1 className="font-bold text-[5vw] leading-[30.75px]">TonClaim</h1>
      <div className="flex items-center gap-2 py-[1vw] px-[4vw] bg-secondary  border border-[#22272B] rounded-[8px]">
        <span className="opacity-[50%] text-[4vw] leading-[24.6px]">0.00000 TON</span>
        <div>
          <Image
            alt="loading logo"
            src={logo}
            style={{ maxWidth: "3.5vw", height: "auto", borderRadius: "25px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
