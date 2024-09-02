import React from "react";
import Image from "next/image";
import logo from "../../../public/tonloadpic.png";
import lightningIcon from "../../../public/icons/lightning-icon.svg";
const Tasks = () => {
  return (
    <div className="m-[6%]">
      <div className="mb-[3%] text-[4vw] leading-[30.75px]">Tasks</div>
      <div className="flex justify-between items-center p-[4%] bg-secondary rounded-[2vw]">
        <div className="flex flex-col w-[70%]">
          <div className="font-bold text-[4vw]">TonClaim News</div>
          <div className="text-[3vw] opacity-[50%]">
            The official news channel of TonClaim.
          </div>
          <div className="text-[3vw] flex items-center gap-[2vw]">
            <span>
              <Image
                alt="logo"
                src={logo}
                style={{
                  maxWidth: "3.5vw",
                  height: "auto",
                  borderRadius: "11vw",
                }}
              />
            </span>
            <span className="opacity-[50%]">0.00000 TON</span>
          </div>
        </div>
        <div className="pr-[2vw]">
          <Image
            alt="lightning Icon"
            src={lightningIcon}
            style={{ maxWidth: "3.5vw", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );

  //! No tasks
  // return (
  //   <div className="m-[6%]">
  //     <div className="mb-[3%] text-[4vw] leading-[30.75px]">Tasks</div>
  //     <div className="flex justify-center items-center h-full">
  //       <div>Empty!</div>
  //       <div>No tasks available yet!</div>
  //     </div>
  //   </div>
  // );
};

export default Tasks;
