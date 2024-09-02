import React from "react";
import Image from "next/image";
import watchAdIcon from "../../../public/icons/watch-ad-icon.svg";
import { usePopUpStore } from "@/store/popUpNotificationStore";
const Dailybonus = () => {
  const setPopUp = usePopUpStore((state) => state.setPopUp);
  const setNotificationType = usePopUpStore((state) => state.setNotificationType)
  const handleClick = () => {
    setPopUp(true);
    setNotificationType('main')
  };
  return (
    <div className="flex flex-col m-[6%] p-[4%] bg-secondary rounded-[2vw]">
      <div className="flex flex-col items-center py-[6%]">
        <div className="font-bold text-[5vw]">0.00000 TON</div>
        <div className="opacity-[50%] text-[4vw]">Claim your daily bonus!</div>
      </div>
      <button
        onClick={() => handleClick()}
        className="font-medium button-color rounded-[8px] py-[2%] text-[4vw] flex justify-center w-full"
      >
        {/* <Image
          alt="logo"
          src={watchAdIcon}
          style={{ maxWidth: "3.5vw", height: "auto" }}
        /> */}
        Claim
      </button>
    </div>
  );
};

export default Dailybonus;
