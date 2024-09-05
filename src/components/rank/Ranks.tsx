import React from "react";
import Image from "next/image";
import logo from "../../../public/tonloadpic.png";
import profileIcon from "../../../public/icons/profile-icon.svg";
const Ranks = () => {
  return (
    <>
      <div className="m-[6%]">
        <div className="mb-[3%] text-[4vw] leading-[30.75px]">Ranks</div>
        {/*//* List */}
        <div className="flex flex-col gap-[3vw]">
         
          <div className="flex justify-between items-center p-[4%] bg-secondary rounded-[2vw]">
            <div className="flex flex-col w-[70%]">
              <div className="font-bold text-[4vw]">#TGID - 00000000</div>
              <div className="text-[3vw] opacity-[50%]">
                Has 00000000 friends!
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
                src={profileIcon}
                style={{ maxWidth: "3.5vw", height: "auto" }}
              />
            </div>
          </div>
         
          <div className="flex justify-between items-center p-[4%] bg-secondary rounded-[2vw]">
            <div className="flex flex-col w-[70%]">
              <div className="font-bold text-[4vw]">#TGID - 00000000</div>
              <div className="text-[3vw] opacity-[50%]">
                Has 00000000 friends!
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
                src={profileIcon}
                style={{ maxWidth: "3.5vw", height: "auto" }}
              />
            </div>
          </div>
        </div>

        {/* //* No rank */}
        {/* <div className="mt-[50vw] flex flex-col justify-center items-center">
          <span className="text-[5vw] font-bold leading-[6vw]">Empty!</span>
          <span className="text-[4vw] font-normal leading-[5vw] opacity-50">No ranks available yet!</span>
        </div> */}
      </div>
    </>
  );
};

export default Ranks;
