import React from "react";
import Image from "next/image";
import logo from "../../../public/tonloadpic.png";
import pendingIcon from "../../../public/icons/pending-icon.svg";
import completedIcon from "../../../public/icons/completed-icon.svg";
const Withdrawals = () => {
  return (
    <>
      <div className="m-[6%]">
        <div className="mb-[3%] text-[4vw] leading-[30.75px]">Withdrawals</div>
        {/*//* List */}
        {/* <div className="flex flex-col gap-[3vw]">
         
          <div className="flex justify-between items-center p-[4%] bg-secondary rounded-[2vw]">
            <div className="flex flex-col w-[70%]">
              <div className="font-bold text-[4vw]">#0000 - Pending</div>
              <div className="text-[3vw] opacity-[50%]">
                Withdrawal request pending!
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
                alt="pendingIcon"
                src={pendingIcon}
                style={{ maxWidth: "3.5vw", height: "auto" }}
              />
            </div>
          </div>
         
          <div className="flex justify-between items-center p-[4%] bg-secondary rounded-[2vw]">
            <div className="flex flex-col w-[70%]">
              <div className="font-bold text-[4vw]">#0000 - Completed</div>
              <div className="text-[3vw] opacity-[50%]">
                Withdrawal request pending!
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
                alt="completedIcon"
                src={completedIcon}
                style={{ maxWidth: "3.5vw", height: "auto" }}
              />
            </div>
          </div>
        </div> */}

        {/* //* No Withdrawals */}
        <div className="mt-[40vw] flex flex-col justify-center items-center">
          <span className="text-[5vw] font-bold leading-[6vw]">Empty!</span>
          <span className="text-[4vw] font-normal leading-[5vw] opacity-50">No payments available yet!</span>
        </div>
      </div>
    </>
  );
};

export default Withdrawals;
