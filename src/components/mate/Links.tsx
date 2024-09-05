"use client";
import React from "react";
import { usePopUpStore } from "@/store/popUpNotificationStore";
const Links = () => {
  const setPopUp = usePopUpStore((state) => state.setPopUp);
  const setNotificationType = usePopUpStore(
    (state) => state.setNotificationType
  );
  const handleClick = () => {
    setPopUp(true);
    setNotificationType("main");
  };
  return (
    <div className="flex flex-col m-[6%] p-[4%] bg-secondary rounded-[2vw]">
      <div className="flex flex-col items-center py-[6%]">
        <div className="font-bold text-[5vw]">Invite mates</div>
        <div className="opacity-[50%] text-[4vw]">
          Get a reward for every friend!
        </div>
      </div>
      <button
        onClick={() => handleClick()}
        className="font-medium button-color rounded-[8px] py-[2%] text-[4vw] flex justify-center w-full mb-[3vw]"
      >
        Copy
      </button>
      <button
        onClick={() => handleClick()}
        className="font-medium button-color rounded-[8px] py-[2%] text-[4vw] flex justify-center w-full"
      >
        Share
      </button>
    </div>
  );
};

export default Links;
