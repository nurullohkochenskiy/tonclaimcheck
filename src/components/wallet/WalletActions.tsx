"use client";
import React from "react";
import { usePopUpStore } from "@/store/popUpNotificationStore";
import Image from "next/image";
import magnetIcon from "../../../public/icons/magnet-icon.svg";
const WalletActions = () => {
  const setPopUp = usePopUpStore((state) => state.setPopUp);
  const setNotificationType = usePopUpStore(
    (state) => state.setNotificationType
  );
  const handleClick = () => {
    setPopUp(true);
    setNotificationType("main");
  };
  //! Variant 1
  //   return (
  //     <div className="flex flex-col m-[6%] p-[4%] bg-secondary rounded-[2vw]">
  //       <div className="flex flex-col items-center py-[6%]">
  //         <div className="font-bold text-[5vw]">0.00000 TON</div>
  //         <div className="opacity-[50%] text-[4vw]">XXXXX******************XX</div>
  //       </div>
  //       <button
  //         onClick={() => handleClick()}
  //         className="font-medium button-color rounded-[1.6vw] py-[2%] text-[4vw] flex justify-center w-full"
  //       >
  //         Connect Wallet
  //       </button>
  //     </div>
  //   );
  //! Variant 2
  return (
    <div className="flex flex-col m-[6%] p-[4%] bg-secondary rounded-[2vw]">
      <div className="flex flex-col items-center py-[6%]">
        <div className="font-bold text-[5vw]">0.00000 TON</div>
        <div className="opacity-[50%] text-[4vw]">UQDu******************mX</div>
      </div>
      {/* //& Before click */}
      <button
          onClick={() => handleClick()}
          className="font-medium button-color rounded-[1.6vw] py-[2%] text-[4vw] flex justify-center w-full mb-[3vw]"
        >
          Withdraw
        </button>
        <button
          onClick={() => handleClick()}
          className="font-medium button-color rounded-[1.6vw] py-[2%] text-[4vw] flex justify-center w-full"
        >
          Change Wallet
        </button>
      {/* //&After click  */}
      {/* <div className="relative w-full">
        <input
          type="text"
          className="bg-transparent border border-[#22272B] rounded-[1.6vw] mb-[3vw] font-normal leading-[5vw] px-[4vw] py-[2.5vw] text-[4vw] w-full"
          placeholder="Enter withdraw amount..."
        />
        <div className="absolute right-[4vw] top-[40%] transform -translate-y-1/2">
          <Image
            alt="magnet"
            src={magnetIcon}
            style={{
              maxWidth: "4vw",
              height: "auto",
              opacity: "50%",
            }}
          />
        </div>
      </div>
      <button
        onClick={() => handleClick()}
        className="font-medium button-color rounded-[1.6vw] py-[2%] text-[4vw] flex justify-center w-full"
      >
        Submit request
      </button> */}
    </div>
  );
};

export default WalletActions;
