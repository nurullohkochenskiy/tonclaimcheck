import React from "react";
import { usePopUpStore } from "@/store/popUpNotificationStore";
import Image from "next/image";
import closeIcon from "../../../public/icons/close-btn.svg";
const PopUp = () => {
  const popUp = usePopUpStore((state) => state.popUp);
  const notificationFrom = usePopUpStore((state) => state.notificationFrom);
  const setPopUp = usePopUpStore((state) => state.setPopUp);
  const setNotificationType = usePopUpStore(
    (state) => state.setNotificationType
  );
  const handleClick = () => {
    setPopUp(false);
    setNotificationType("");
  };
  if (popUp === false) {
    return <></>;
  }
  if (notificationFrom === "main") {
    return (<>
    <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={() => handleClick()}></div>
    <div className="fixed bottom-[1%] w-[88%] left-1/2 transform -translate-x-1/2 flex flex-col  p-[4%] bg-secondary rounded-[2vw] z-50">
        <div onClick={() => handleClick()} className="flex justify-end">
          <Image
            alt="loading logo"
            src={closeIcon}
            style={{ maxWidth: "2vw", height: "auto" }}
          />
        </div>
        <div className="flex flex-col items-center py-[6%]">
          <div className="font-bold text-[5vw]">Daily bonus</div>
          <div className="opacity-[50%] text-[4vw]">
            Watch ad to claim daily bonus again!
          </div>
        </div>
        <button className="font-medium button-color rounded-[8px] py-[2%] text-[4vw] flex justify-center w-full">
          Watch Ad
        </button>
      </div>
    </>
    );
  }

  // return (
  //   <div className="fixed bottom-[1%] w-[88%] left-1/2 transform -translate-x-1/2 flex flex-col  p-[4%] bg-secondary rounded-[2vw] z-50">
  //     <div className="flex justify-end">
  //       <Image
  //         alt="loading logo"
  //         src={closeIcon}
  //         style={{ maxWidth: "2vw", height: "auto" }}
  //       />
  //     </div>
  //     <div className="flex flex-col items-center py-[6%]">
  //       <div className="font-bold text-[5vw]">Daily bonus</div>
  //       <div className="opacity-[50%] text-[4vw]">
  //         Watch ad to claim daily bonus again!
  //       </div>
  //     </div>
  //     <button className="font-medium button-color rounded-[8px] py-[2%] text-[4vw] flex justify-center w-full">
  //       Watch Ad
  //     </button>
  //   </div>
  // );
};

export default PopUp;
